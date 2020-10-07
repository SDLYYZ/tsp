import { AutoSuggestion } from "./autoSuggestion";

// 将 keyword 分为 `quotePrefix?` 和 `others` 两部分
export function SplitKeyword(keyword: string) {
  let splitedKw = keyword.split(" ");
  let firstWord = splitedKw[0].toLowerCase(); // 忽略大小写
  // 以 `'` 开头
  if (firstWord[0] !== "'") {
    return { prefix: null, others: keyword };
  } else {
    splitedKw.shift();
    let elseWords = splitedKw.join(" ");
    // 将开头的 `'` 删除
    return { prefix: firstWord.substr(1), others: elseWords };
  }
}

export class QuoteSearch {
  public static readonly sources = [
    {
      name: "bing",
      prefixes: ["b", "bing"],
      url: "https://www.bing.com/search?q=%s",
      suggest: AutoSuggestion.sources.bing,
    },
    {
      name: "baidu",
      prefixes: ["bd", "baidu"],
      url: "https://www.baidu.com/s?ie=utf-8&wd=%s",
      suggest: AutoSuggestion.sources.baidu,
    },
    {
      name: "google",
      prefixes: ["g", "gg", "google"],
      url: "https://www.google.com/search?q=%s",
      suggest: AutoSuggestion.sources.google,
    },
    {
      name: "luogu",
      prefixes: ["lg", "luogu"],
      url:
        "https://www.luogu.com.cn/problem/list?content=true&page=1&keyword=%s",
    },
    {
      name: "oeis",
      prefixes: ["oeis"],
      url: "https://oeis.org/search?q=%s",
    },
    {
      name: "google translate",
      prefixes: ["tr", "gtr"],
      url: "https://translate.google.cn/?source=osdd#auto|auto|%s",
    },
    {
      name: "translate en to zh-CN",
      prefixes: ["en2zh"],
      url: "https://translate.google.cn/?source=osdd#en|zh-CN|%s",
    },
    {
      name: "translate zh-CN to en",
      prefixes: ["zh2en"],
      url: "https://translate.google.cn/?source=osdd#zh-CN|en|%s",
    },
    {
      name: "baidu translate",
      prefixes: ["btr"],
      url: "https://fanyi.baidu.com#en/zh/%s",
    },
    {
      name: "duckduckgo",
      prefixes: ["ddg", "duckduckgo"],
      url: "https://duckduckgo.com/?q=%s",
      suggest: AutoSuggestion.sources.google,
    },
    {
      name: "miji search",
      prefixes: ["mj", "mjsou"],
      url: "https://mijisou.com/?q=%s",
      suggest: AutoSuggestion.sources.baidu,
    },
    {
      name: "lookao",
      prefixes: ["lk", "lookao"],
      url: "https://lookao.com/search?q=%s",
      suggest: AutoSuggestion.sources.baidu,
    },
    {
      name: "jingdong",
      prefixes: ["jd", "jingdong"],
      url: "https://search.jd.com/Search?keyword=%s&enc=utf-8",
      suggest: AutoSuggestion.sources.taobao,
    },
    {
      name: "wikipedia",
      prefixes: ["wiki", "wikipedia"],
      url: "https://www.wikipedia.org/wiki/Special:Search?search=%s",
    },
    {
      name: "wikipedia (chinese)",
      prefixes: ["wikizh", "wikipediazh"],
      url: "https://zh.wikipedia.org/wiki/Special:Search?search=%s",
    },
    {
      name: "yandex",
      prefixes: ["ya", "yandex"],
      url: "https://yandex.com/search/?text=%s",
      suggest: AutoSuggestion.sources.bing,
    },
    {
      name: "oiwki",
      prefixes: ["oiwiki"],
      url: "https://cn.bing.com/search?q=site:oi-wiki.org+%s",
    },
    {
      name: "zhihu",
      prefixes: ["zh", "zhihu"],
      url: "https://www.zhihu.com/search?type=content&q=%s",
    },
    {
      name: "runoob",
      prefixes: ["runoob"],
      url: "https://www.runoob.com/?s=%s",
    },
    {
      name: "greasyfork",
      prefixes: ["gfork", "greasyfork"],
      url: "https://greasyfork.org/scripts/search/?q=%s",
    },
    {
      name: "github",
      prefixes: ["gh", "github"],
      url: "https://github.com/search?q=%s",
    },
    {
      name: "gitee",
      prefixes: ["gitee"],
      url: "https://search.gitee.com/?type=repository&q=%s",
    },
    {
      name: "lyoi",
      prefixes: ["lyoi"],
      url: "https://lyoi.cc/problems/search?keyword=%s",
    },
    {
      name: "codeforces",
      prefixes: ["cf", "codeforces"],
      url: "http://codeforces.com/search?by=&query=%s",
    },
    {
      name: "codeforces.ml",
      prefixes: ["cfml", "codeforcesml"],
      url: "https://codeforces.ml/search?by=&query=%s",
    },
    {
      name: "codeforc.es",
      prefixes: ["cfes", "codeforceses"],
      url: "https://codeforc.es/search?by=&query=%s",
    },
    {
      name: "macwk",
      prefixes: ["macwk"],
      url: "https://macwk.com/soft/all/s-%s/p1",
    },
    {
      name: "twitter",
      prefixes: ["twit", "tweet", "twitter"],
      url: "https://twitter.com/search?q=%s",
    },
    {
      name: "gaode map",
      prefixes: ["gdmap", "gaodemap"],
      url: "https://ditu.amap.com/search?query=%s",
    },
    {
      name: "wolframalpha",
      prefixes: ["wa", "wolfram"],
      url: "https://www.wolframalpha.com/input/?i=%s",
    },
    {
      name: "bilibili",
      prefixes: ["bili", "bilibili"],
      url: "https://search.bilibili.com/all?keyword=%s",
    },
  ];

  private searchBar: JQuery<HTMLElement>;
  private suggestion: AutoSuggestion;

  public constructor(
    searchBar: JQuery<HTMLElement>,
    suggestion: AutoSuggestion,
  ) {
    this.searchBar = searchBar;
    this.suggestion = suggestion;
    searchBar.on("keydown", (ev) => {
      switch (ev.key) {
        case "Enter":
          // Shift + Enter 在新标签页打开搜索结果
          this.Search(ev.shiftKey);
          if (!ev.shiftKey) {
            searchBar.attr("disabled", "disabled");
            searchBar.attr("placeholder", "Searching...");
          }
          searchBar.val("");
          break;
        case "ArrowUp":
          this.suggestion.SelectUp();
          ev.preventDefault();
          break;
        case "ArrowDown":
          this.suggestion.SelectDown();
          ev.preventDefault();
          break;
      }
    });
    searchBar.on("keyup", (ev) => {
      if (ev.key === "Escape") {
        searchBar[0].blur();
      }
    });
    searchBar.on("input", () => {
      if (searchBar.val() !== "") {
        this.suggestion.Get(this.searchBar.val().toString());
        this.suggestion.Blur();
      }
    });
  }

  public Search(newtab = false) {
    // 打开搜索结果
    let openResult = (url: string, keyword: string) =>
      window.open(
        url.replace(
          "%s",
          encodeURIComponent(this.suggestion.GetObjOrSelected(keyword)),
        ),
        newtab ? "_blank" : "_self",
      );
    let s = SplitKeyword(this.searchBar.val().toString());
    console.log(s);
    // 遍历每个搜索引擎
    // 如果前缀匹配, 就使用它
    (s.prefix !== null &&
      QuoteSearch.sources.some((source) =>
        source.prefixes.some(
          (pr) => pr === s.prefix && openResult(source.url, s.others),
        ),
      )) ||
      openResult(QuoteSearch.sources[0].url, s.others);
  }
}
