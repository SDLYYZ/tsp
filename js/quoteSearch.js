"use strict";

let QuoteSearch = window.QuoteSearch || {
  sources: [
    {
      name: "bing",
      prefixes: ["b", "bing"],
      url: "https://www.bing.com/search?q=%s",
      suggest:
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
    },
    {
      name: "baidu",
      prefixes: ["bd", "baidu"],
      url: "https://www.baidu.com/s?ie=utf-8&wd=%s",
      suggest:
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
    },
    {
      name: "google",
      prefixes: ["g", "gg", "google"],
      url: "https://www.google.com/search?q=%s",
      suggest:
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
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
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
    },
    {
      name: "miji search",
      prefixes: ["mj", "mjsou"],
      url: "https://mijisou.com/?q=%s",
      suggest:
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
    },
    {
      name: "lookao",
      prefixes: ["lk", "lookao"],
      url: "https://lookao.com/search?q=%s",
      suggest:
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
    },
    {
      name: "jingdong",
      prefixes: ["jd", "jingdong"],
      url: "https://search.jd.com/Search?keyword=%s&enc=utf-8",
      suggest:
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
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
        "https://suggestion.baidu.com/su?"+
        "wd=%s&cb=QuoteSearch.WriteBaiduSuggestion",
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
  
  wrap: $(),

  // 当前选中的 suggestion 的 index, -1 表示未选中
  selectedSuggestion: -1, 

  Init: function (wrap) {
    QuoteSearch.wrap = wrap;
  },
  
  UpdateCss: function() {
    QuoteSearch.wrap.children().css("background", "rgba(255, 255, 255, 0.25)");
    if (QuoteSearch.selectedSuggestion >= 0) {
      QuoteSearch.wrap.children().eq(QuoteSearch.selectedSuggestion)
        .css("background", "rgba(0, 0, 0, 0.2)");
    }
  },
  
  Blur: function() {
    QuoteSearch.selectedSuggestion = -1;
    QuoteSearch.UpdateCss();
  },

  SelectUp: function() {
    --QuoteSearch.selectedSuggestion;
    if (QuoteSearch.selectedSuggestion < 0) {
      QuoteSearch.selectedSuggestion = -1;
    }
    QuoteSearch.UpdateCss();
  },

  SelectDown: function() {
    ++QuoteSearch.selectedSuggestion;
    if (QuoteSearch.selectedSuggestion >= QuoteSearch.wrap.children().length) {
      QuoteSearch.selectedSuggestion = QuoteSearch.wrap.children().length - 1;
    }
    QuoteSearch.UpdateCss();
  },

  Search: function (kw, newtab = false) {
    let splitedKw = kw.split(" ");
    let firstWord = splitedKw[0].toLowerCase();
    splitedKw.shift();
    let elseWords = splitedKw.join(" ");
    let matched = QuoteSearch.sources.some((source) => {
      return source.prefixes.some((prefix) => {
        if ("'" + prefix === firstWord) {
          if (newtab) {
            window.open(
              source.url.replace(
                "%s",
                encodeURIComponent(elseWords)
              ), "_black");
          } else {
            window.location = source.url.replace(
              "%s",
              encodeURIComponent(elseWords)
            );
          }
          return true;
        }
      });
    });
    if (!matched) {
      // 默认使用 bing
      if (newtab) {
        window.open(QuoteSearch.sources[0].url.replace(
          "%s",
          encodeURIComponent(kw)
        ), "_black");
      } else {
        window.location = QuoteSearch.sources[0].url.replace(
          "%s",
          encodeURIComponent(kw)
        );
      }
    }
  },

  GetSuggestion: function (kw) {
    let splitedKw = kw.split(" ");
    let firstWord = splitedKw[0].toLowerCase();
    splitedKw.shift();
    let elseWords = splitedKw.join(" ");
    let matched = QuoteSearch.sources.some((source) => {
      return source.prefixes.some((prefix) => {
        if ("'" + prefix === firstWord && source.suggest) {
          let obj = document.createElement("script");
          obj.src = source.suggest.replace("%s", encodeURIComponent(elseWords));
          document.body.appendChild(obj);
          obj.remove();
          return true;
        }
      });
    });
    if (!matched) {
      // 默认使用 bing
      let obj = document.createElement("script");
      obj.src = QuoteSearch.sources[0].suggest.replace(
        "%s",
        encodeURIComponent(kw)
      );
      document.body.appendChild(obj);
      obj.remove();
    }
  },

  WriteBaiduSuggestion: function (data) {
    let text = "";
    data.s.forEach((res) => {
      text += `<div>${res}</div>`;
    });
    QuoteSearch.wrap.html(text);
  },

  WriteTaobaoSuggestion: function (data) {
    let text = "";
    data.result.forEach((res) => {
      text += `<div>${res[0]}</div>`;
    });
    QuoteSearch.wrap.html(text);
  },
};
