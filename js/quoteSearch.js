/* exported QuoteSearch */

"use strict";

const quoteSearchSources = [
  {
    name: "bing",
    prefix: "b",
    url: "https://www.bing.com/search?q=%s",
  },
  {
    name: "baidu",
    prefix: "bd",
    url: "https://www.baidu.com/s?ie=utf-8&wd=%s",
  },
  {
    name: "google",
    prefix: "g",
    url: "https://www.google.com/search?q=%s",
  },
  {
    name: "luogu",
    prefix: "lg",
    url: "https://www.luogu.com.cn/problem/list?content=true&page=1&keyword=%s",
  },
  {
    name: "oeis",
    prefix: "oeis",
    url: "http://oeis.org/search?q=%s",
  },
  {
    name: "google translate",
    prefix: "tr",
    url: "https://translate.google.cn/?source=osdd#auto|auto|%s",
  },
  {
    name: "duckduckgo",
    prefix: "ddg",
    url: "https://duckduckgo.com/?q=%s",
  },
];

function QuoteSearch(val) {
  let splitedVal = val.split(" ");
  let firstWord = splitedVal[0];
  splitedVal.shift();
  let elseWords = splitedVal.join(" ");
  let matched = quoteSearchSources.some((source) => {
    if ("'" + source.prefix === firstWord) {
      window.location = source.url.replace("%s", elseWords);
      return true;
    }
  });
  if (!matched) {
    // 默认使用 bing
    window.location = quoteSearchSources[0].url.replace("%s", val);
  }
}
