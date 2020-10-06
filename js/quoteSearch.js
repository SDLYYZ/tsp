let QuoteSearch = window.QuoteSearch || {
  sources: [
    {
      name: "bing",
      prefixes: ["b", "bing"],
      url: "https://www.bing.com/search?q=%s",
      suggest:
        "https://api.bing.com/qsonhs.aspx?" +
        "type=cb&q=%s&count=10&safesearch=Strict" +
        "&cb=QuoteSearch.Suggest.WriteBing",
    },
    {
      name: "baidu",
      prefixes: ["bd", "baidu"],
      url: "https://www.baidu.com/s?ie=utf-8&wd=%s",
      suggest:
        "https://suggestion.baidu.com/su?" +
        "wd=%s&cb=QuoteSearch.Suggest.WriteBaidu",
    },
    {
      name: "google",
      prefixes: ["g", "gg", "google"],
      url: "https://www.google.com/search?q=%s",
      suggest:
        "https://suggestqueries.google.com/complete/search?client=youtube" +
        "&q=%s&jsonp=QuoteSearch.Suggest.WriteGoogle",
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
      suggest:
        "https://api.bing.com/qsonhs.aspx?" +
        "type=cb&q=%s&count=10&safesearch=Strict" +
        "&cb=QuoteSearch.Suggest.WriteBing",
    },
    {
      name: "miji search",
      prefixes: ["mj", "mjsou"],
      url: "https://mijisou.com/?q=%s",
      suggest:
        "https://suggestion.baidu.com/su?" +
        "wd=%s&cb=QuoteSearch.Suggest.WriteBaidu",
    },
    {
      name: "lookao",
      prefixes: ["lk", "lookao"],
      url: "https://lookao.com/search?q=%s",
      suggest:
        "https://suggestion.baidu.com/su?" +
        "wd=%s&cb=QuoteSearch.Suggest.WriteBaidu",
    },
    {
      name: "jingdong",
      prefixes: ["jd", "jingdong"],
      url: "https://search.jd.com/Search?keyword=%s&enc=utf-8",
      suggest:
        "https://suggest.taobao.com/sug?code=utf-8" +
        "&q=%s&callback=QuoteSearch.Suggest.WriteTaobao",
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
      suggest:
        "https://api.bing.com/qsonhs.aspx?" +
        "type=cb&q=%s&count=10&safesearch=Strict" +
        "&cb=QuoteSearch.Suggest.WriteBing",
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
  ],

  searchBar: $(),

  Init: (searchBar, suggestionWrap) => {
    QuoteSearch.searchBar = searchBar;
    QuoteSearch.Suggest.wrap = suggestionWrap;
    searchBar.on("keydown", (ev) => {
      switch (ev.key) {
        case "Enter":
          // Shift + Enter 在新标签页打开搜索结果
          QuoteSearch.Search(ev.shiftKey);
          if (!ev.shiftKey) {
            searchBar.attr("disabled", "disabled");
            searchBar.attr("placeholder", "Searching...");
          }
          searchBar.val("");
          break;
        case "ArrowUp":
          QuoteSearch.Suggest.SelectUp();
          ev.preventDefault();
          break;
        case "ArrowDown":
          QuoteSearch.Suggest.SelectDown();
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
        setTimeout(QuoteSearch.Suggest.Get()); // 异步查询
        QuoteSearch.Suggest.Blur();
      }
    });
  },

  // 将 keyword 分为 `quotePrefix?` 和 `others` 两部分
  SplitKeyword: (keyword) => {
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
  },

  Search: (newtab = false) => {
    // 打开搜索结果
    let openResult = (url, keyword) =>
      window.open(
        url.replace(
          "%s",
          encodeURIComponent(QuoteSearch.Suggest.GetObjOrSelected(keyword)),
        ),
        newtab ? "_blank" : "_self",
      );
    let s = QuoteSearch.SplitKeyword(QuoteSearch.searchBar.val());
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
  },

  // Suggest 子模块
  Suggest: {
    wrap: $(),

    // 当前选中的 suggestion 的 index, -1 表示未选中
    selected: -1,

    UpdateCss: () => {
      QuoteSearch.Suggest.wrap
        .children()
        .css("background", "rgba(255, 255, 255, 0.25)");
      if (QuoteSearch.selectedSuggestion >= 0) {
        QuoteSearch.Suggest.wrap
          .children()
          .eq(QuoteSearch.selectedSuggestion)
          .css("background", "rgba(0, 0, 0, 0.2)");
      }
    },

    Blur: () => {
      QuoteSearch.selectedSuggestion = -1;
      QuoteSearch.Suggest.UpdateCss();
    },

    SelectUp: () => {
      --QuoteSearch.selectedSuggestion;
      if (QuoteSearch.selectedSuggestion < 0) {
        QuoteSearch.selectedSuggestion = -1;
      }
      QuoteSearch.Suggest.UpdateCss();
    },

    SelectDown: () => {
      ++QuoteSearch.selectedSuggestion;
      if (
        QuoteSearch.selectedSuggestion >=
        QuoteSearch.Suggest.wrap.children().length
      ) {
        QuoteSearch.selectedSuggestion =
          QuoteSearch.Suggest.wrap.children().length - 1;
      }
      QuoteSearch.Suggest.UpdateCss();
    },

    // 返回 `obj` 或者当前选择的建议候选项文字
    GetObjOrSelected: (obj) =>
      QuoteSearch.selectedSuggestion >= 0
        ? QuoteSearch.Suggest.wrap
            .children()
            .eq(QuoteSearch.selectedSuggestion)
            .text()
        : obj,

    Get: () => {
      let createScript = (url, keyword) => {
        let obj = document.createElement("script");
        obj.src = url.replace("%s", encodeURIComponent(keyword));
        document.body.appendChild(obj);
        obj.remove();
        return true; // js 语法糖
      };
      let s = QuoteSearch.SplitKeyword(QuoteSearch.searchBar.val());
      if (s.others === "" || s.others === null || s.others === undefined) {
        QuoteSearch.Suggest.wrap.html("");
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
              createScript(source.suggest, s.others),
          ),
        )) ||
        createScript(QuoteSearch.sources[0].suggest, s.others);
    },

    Slice: (items) => {
      if (items === undefined || items === null) {
        return [];
      }
      let winHeight = $(window).height();
      if (winHeight <= 700) {
        return items.slice(0, 6);
      } else if (winHeight <= 800) {
        return items.slice(0, 8);
      } else {
        return items.slice(0, 10);
      }
    },

    WriteBing: (data) => {
      let text = "";
      let slicedData = [];
      try {
        slicedData = QuoteSearch.Suggest.Slice(data.AS.Results[0].Suggests);
      } catch (TypeError) {
        QuoteSearch.Suggest.wrap.html("");
        return;
      }
      slicedData.forEach((res) => {
        text += `<div>${res.Txt}</div>`;
      });
      QuoteSearch.Suggest.wrap.html(text);
    },

    WriteBaidu: (data) => {
      let text = "";
      let slicedData = [];
      try {
        slicedData = QuoteSearch.Suggest.Slice(data.s);
      } catch (TypeError) {
        QuoteSearch.Suggest.wrap.html("");
        return;
      }
      slicedData.forEach((res) => {
        text += `<div>${res}</div>`;
      });
      QuoteSearch.Suggest.wrap.html(text);
    },

    WriteGoogle: (data) => {
      let text = "";
      let slicedData = [];
      try {
        slicedData = QuoteSearch.Suggest.Slice(data[1]);
      } catch (TypeError) {
        QuoteSearch.Suggest.wrap.html("");
        return;
      }
      slicedData.forEach((res) => {
        text += `<div>${res[0]}</div>`;
      });
      QuoteSearch.Suggest.wrap.html(text);
    },

    WriteTaobao: (data) => {
      let text = "";
      let slicedData = [];
      try {
        slicedData = QuoteSearch.Suggest.Slice(data.result);
      } catch (TypeError) {
        QuoteSearch.Suggest.wrap.html("");
        return;
      }
      slicedData.forEach((res) => {
        text += `<div>${res[0]}</div>`;
      });
      QuoteSearch.Suggest.wrap.html(text);
    },
  },
};
