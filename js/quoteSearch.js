/* exported QuoteSearch */

"use strict";

const quoteSearchSources = [
  {
    name: "bing",
    prefixes: ["b", "bing"],
    url: "https://www.bing.com/search?q=%s",
  },
  {
    name: "baidu",
    prefixes: ["bd", "baidu"],
    url: "https://www.baidu.com/s?ie=utf-8&wd=%s",
  },
  {
    name: "google",
    prefixes: ["g", "gg", "google"],
    url: "https://www.google.com/search?q=%s",
  },
  {
    name: "luogu",
    prefixes: ["lg", "luogu"],
    url: "https://www.luogu.com.cn/problem/list?content=true&page=1&keyword=%s",
  },
  {
    name: "oeis",
    prefixes: ["oeis"],
    url: "http://oeis.org/search?q=%s",
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
  },
  {
    name: "miji search",
    prefixes: ["mj", "mjsou"],
    url: "https://mijisou.com/?q=%s",
  },
  {
    name: "lookao",
    prefixes: ["lk", "lookao"],
    url: "https://lookao.com/search?q=%s",
  },
  {
    name: "jingdong",
    prefixes: ["jd", "jingdong"],
    url: "https://search.jd.com/Search?keyword=%s&enc=utf-8",
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
];

function QuoteSearch(val) {
  let splitedVal = val.split(" ");
  let firstWord = splitedVal[0];
  splitedVal.shift();
  let elseWords = splitedVal.join(" ");
  let matched = quoteSearchSources.some((source) => {
    return source.prefixes.some((prefix) => {
      if ("'" + prefix === firstWord) {
        window.location = source.url.replace("%s", elseWords);
        return true;
      }
    });
  });
  if (!matched) {
    // 默认使用 bing
    window.location = quoteSearchSources[0].url.replace("%s", val);
  }
}
