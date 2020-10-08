import { QuoteSearch, SplitKeyword } from "./quoteSearch";

export class AutoSuggestion {
  public static sources = {
    bing: {
      url:
        "https://api.bing.com/qsonhs.aspx?" +
        "type=cb&q=%s&count=10&safesearch=Strict",
      jsonp: "cb",
      callback: AutoSuggestion.WriteBing,
    },
    baidu: {
      url: "https://suggestion.baidu.com/su?wd=%s",
      jsonp: "cb",
      callback: AutoSuggestion.WriteBaidu,
    },
    google: {
      url:
        "https://suggestqueries.google.com/complete/search?client=youtube&q=%s",
      jsonp: "jsonp",
      callback: AutoSuggestion.WriteGoogle,
    },
    taobao: {
      url: "https://suggest.taobao.com/sug?code=utf-8&q=%s",
      jsonp: "callback",
      callback: AutoSuggestion.WriteTaobao,
    },
  };

  public static WriteBing(
    wrap: JQuery<HTMLElement>,
    data: {
      AS: { Results: { Suggests: { Txt: any }[] }[] };
    },
  ) {
    let text = "";
    let slicedData = [];
    try {
      slicedData = AutoSuggestion.Slice(data.AS.Results[0].Suggests);
    } catch (TypeError) {
      wrap.html("");
      return;
    }
    slicedData.forEach((res) => {
      text += `<div>${res.Txt}</div>`;
    });
    wrap.html(text);
  }

  public static WriteBaidu(wrap: JQuery<HTMLElement>, data: { s: any[] }) {
    let text = "";
    let slicedData = [];
    try {
      slicedData = AutoSuggestion.Slice(data.s);
    } catch (TypeError) {
      wrap.html("");
      return;
    }
    slicedData.forEach((res) => {
      text += `<div>${res}</div>`;
    });
    wrap.html(text);
  }

  public static WriteGoogle(wrap: JQuery<HTMLElement>, data: any[][]) {
    let text = "";
    let slicedData = [];
    try {
      slicedData = AutoSuggestion.Slice(data[1]);
    } catch (TypeError) {
      wrap.html("");
      return;
    }
    slicedData.forEach((res) => {
      text += `<div>${res[0]}</div>`;
    });
    wrap.html(text);
  }

  public static WriteTaobao(
    wrap: JQuery<HTMLElement>,
    data: { result: any[] },
  ) {
    let text = "";
    let slicedData = [];
    try {
      slicedData = AutoSuggestion.Slice(data.result);
    } catch (TypeError) {
      wrap.html("");
      return;
    }
    slicedData.forEach((res) => {
      text += `<div>${res[0]}</div>`;
    });
    wrap.html(text);
  }

  private static Slice(items: any[]) {
    if (items === undefined || items === null) {
      return [];
    }
    const winHeight = $(window).height();
    if (winHeight <= 700) {
      return items.slice(0, 6);
    } else if (winHeight <= 800) {
      return items.slice(0, 8);
    } else {
      return items.slice(0, 10);
    }
  }

  private wrap: JQuery<HTMLElement>;

  // 当前选中的 suggestion 的 index, -1 表示未选中
  private selected = -1;

  public constructor(wrap: JQuery<HTMLElement>) {
    this.wrap = wrap;
  }

  public Blur() {
    this.selected = -1;
    this.UpdateCss();
  }

  public SelectUp() {
    --this.selected;
    if (this.selected < 0) {
      this.selected = -1;
    }
    this.UpdateCss();
  }

  public SelectDown() {
    ++this.selected;
    if (this.selected >= this.wrap.children().length) {
      this.selected = this.wrap.children().length - 1;
    }
    this.UpdateCss();
  }

  // 返回 `obj` 或者当前选择的建议候选项文字
  public GetObjOrSelected(obj: string) {
    return this.selected >= 0
      ? this.wrap.children().eq(this.selected).text()
      : obj;
  }

  public Get(keyword: string) {
    const sendAjax = (
      to: {
        url: string;
        jsonp: string;
        callback: (wrap: JQuery<HTMLElement>, data: any) => void;
      },
      keyword: string,
    ) => {
      return $.ajax({
        url: to.url.replace("%s", encodeURIComponent(keyword)),
        dataType: "jsonp",
        jsonp: to.jsonp,
        success: (data) => {
          to.callback(this.wrap, data);
        },
      });
    };
    const s = SplitKeyword(keyword);
    if (s.others === "" || s.others === null || s.others === undefined) {
      this.wrap.html("");
      return;
    }
    // 遍历每个搜索引擎
    // 如果前缀匹配, 就使用它
    (s.prefix !== null &&
      QuoteSearch.sources.some((source) =>
        source.prefixes.some(
          (prefix) =>
            prefix === s.prefix &&
            source.suggest !== undefined &&
            sendAjax(source.suggest, s.others),
        ),
      )) ||
      sendAjax(QuoteSearch.sources[0].suggest, s.others);
  }

  private UpdateCss() {
    this.wrap.children().css("background", "rgba(255, 255, 255, 0.25)");
    if (this.selected >= 0) {
      this.wrap
        .children()
        .eq(this.selected)
        .css("background", "rgba(0, 0, 0, 0.2)");
    }
  }
}
