/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/global.css":
/*!****************************!*\
  !*** ./src/css/global.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/autoSuggestion.ts":
/*!**********************************!*\
  !*** ./src/ts/autoSuggestion.ts ***!
  \**********************************/
/*! exports provided: AutoSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSuggestion", function() { return AutoSuggestion; });
/* harmony import */ var _quoteSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quoteSearch */ "./src/ts/quoteSearch.ts");

var AutoSuggestion = /** @class */ (function () {
    function AutoSuggestion(wrap) {
        // 当前选中的 suggestion 的 index, -1 表示未选中
        this.selected = -1;
        this.wrap = wrap;
    }
    AutoSuggestion.WriteBing = function (wrap, data) {
        var text = "";
        var slicedData = [];
        try {
            slicedData = AutoSuggestion.Slice(data.AS.Results[0].Suggests);
        }
        catch (TypeError) {
            wrap.html("");
            return;
        }
        slicedData.forEach(function (res) {
            text += "<div>" + res.Txt + "</div>";
        });
        wrap.html(text);
    };
    AutoSuggestion.WriteBaidu = function (wrap, data) {
        var text = "";
        var slicedData = [];
        try {
            slicedData = AutoSuggestion.Slice(data.s);
        }
        catch (TypeError) {
            wrap.html("");
            return;
        }
        slicedData.forEach(function (res) {
            text += "<div>" + res + "</div>";
        });
        wrap.html(text);
    };
    AutoSuggestion.WriteGoogle = function (wrap, data) {
        var text = "";
        var slicedData = [];
        try {
            slicedData = AutoSuggestion.Slice(data[1]);
        }
        catch (TypeError) {
            wrap.html("");
            return;
        }
        slicedData.forEach(function (res) {
            text += "<div>" + res[0] + "</div>";
        });
        wrap.html(text);
    };
    AutoSuggestion.WriteTaobao = function (wrap, data) {
        var text = "";
        var slicedData = [];
        try {
            slicedData = AutoSuggestion.Slice(data.result);
        }
        catch (TypeError) {
            wrap.html("");
            return;
        }
        slicedData.forEach(function (res) {
            text += "<div>" + res[0] + "</div>";
        });
        wrap.html(text);
    };
    AutoSuggestion.Slice = function (items) {
        if (items === undefined || items === null) {
            return [];
        }
        var winHeight = $(window).height();
        if (winHeight <= 700) {
            return items.slice(0, 6);
        }
        else if (winHeight <= 800) {
            return items.slice(0, 8);
        }
        else {
            return items.slice(0, 10);
        }
    };
    AutoSuggestion.prototype.Blur = function () {
        this.selected = -1;
        this.UpdateCss();
    };
    AutoSuggestion.prototype.SelectUp = function () {
        --this.selected;
        if (this.selected < 0) {
            this.selected = -1;
        }
        this.UpdateCss();
    };
    AutoSuggestion.prototype.SelectDown = function () {
        ++this.selected;
        if (this.selected >= this.wrap.children().length) {
            this.selected = this.wrap.children().length - 1;
        }
        this.UpdateCss();
    };
    // 返回 `obj` 或者当前选择的建议候选项文字
    AutoSuggestion.prototype.GetObjOrSelected = function (obj) {
        return this.selected >= 0
            ? this.wrap.children().eq(this.selected).text()
            : obj;
    };
    AutoSuggestion.prototype.Get = function (keyword) {
        var _this = this;
        var sendAjax = function (to, keyword) {
            return $.ajax({
                url: to.url.replace("%s", encodeURIComponent(keyword)),
                dataType: "jsonp",
                jsonp: to.jsonp,
                success: function (data) {
                    to.callback(_this.wrap, data);
                },
            });
        };
        var s = Object(_quoteSearch__WEBPACK_IMPORTED_MODULE_0__["SplitKeyword"])(keyword);
        if (s.others === "" || s.others === null || s.others === undefined) {
            this.wrap.html("");
            return;
        }
        // 遍历每个搜索引擎
        // 如果前缀匹配, 就使用它
        (s.prefix !== null &&
            _quoteSearch__WEBPACK_IMPORTED_MODULE_0__["QuoteSearch"].sources.some(function (source) {
                return source.prefixes.some(function (prefix) {
                    return prefix === s.prefix &&
                        source.suggest !== undefined &&
                        sendAjax(source.suggest, s.others);
                });
            })) ||
            sendAjax(_quoteSearch__WEBPACK_IMPORTED_MODULE_0__["QuoteSearch"].sources[0].suggest, s.others);
    };
    AutoSuggestion.prototype.UpdateCss = function () {
        this.wrap.children().css("background", "rgba(255, 255, 255, 0.25)");
        if (this.selected >= 0) {
            this.wrap
                .children()
                .eq(this.selected)
                .css("background", "rgba(0, 0, 0, 0.2)");
        }
    };
    AutoSuggestion.sources = {
        bing: {
            url: "https://api.bing.com/qsonhs.aspx?" +
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
            url: "https://suggestqueries.google.com/complete/search?client=youtube&q=%s",
            jsonp: "jsonp",
            callback: AutoSuggestion.WriteGoogle,
        },
        taobao: {
            url: "https://suggest.taobao.com/sug?code=utf-8&q=%s",
            jsonp: "callback",
            callback: AutoSuggestion.WriteTaobao,
        },
    };
    return AutoSuggestion;
}());



/***/ }),

/***/ "./src/ts/global.js":
/*!**************************!*\
  !*** ./src/ts/global.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint no-extend-native: ["error", { "exceptions": ["Date"] }] */

Date.prototype.format = function (format) {
  const date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds(),
  };
  let res = format;
  if (/(y+)/i.test(format)) {
    res = format.replace(
      RegExp.$1,
      String(this.getFullYear()).substr(4 - RegExp.$1.length),
    );
  }
  for (const k in date) {
    if (new RegExp("(" + k + ")").test(res)) {
      res = res.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? date[k]
          : ("00" + date[k]).substr(String(date[k]).length),
      );
    }
  }
  return res;
};


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/global.css */ "./src/css/global.css");
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_global_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/ts/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tangyan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tangyan */ "./src/ts/tangyan.ts");
/* harmony import */ var _quoteSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quoteSearch */ "./src/ts/quoteSearch.ts");
/* harmony import */ var _autoSuggestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autoSuggestion */ "./src/ts/autoSuggestion.ts");






$(function () {
    var searchBar = $("#search");
    var timeText = $("#time");
    var suggestionsWrap = $("#suggestions");
    function UpdateTime() {
        timeText.html(new Date().format("hh:mm"));
    }
    UpdateTime();
    setInterval(UpdateTime, 1000);
    var _ = new _tangyan__WEBPACK_IMPORTED_MODULE_3__["TangYan"]();
    var __ = new _quoteSearch__WEBPACK_IMPORTED_MODULE_4__["QuoteSearch"](searchBar, new _autoSuggestion__WEBPACK_IMPORTED_MODULE_5__["AutoSuggestion"](suggestionsWrap));
    $(document).on("keydown", function (ev) {
        if (document.activeElement === document.body &&
            !ev.ctrlKey &&
            !ev.altKey &&
            !ev.metaKey &&
            ev.key !== "Enter" &&
            ev.key !== "Escape") {
            searchBar.attr("placeholder", "Search");
            searchBar.removeAttr("disabled");
            searchBar[0].focus();
            if (ev.key === " ") {
                searchBar.val("");
                return false;
            }
        }
    });
});


/***/ }),

/***/ "./src/ts/quoteSearch.ts":
/*!*******************************!*\
  !*** ./src/ts/quoteSearch.ts ***!
  \*******************************/
/*! exports provided: SplitKeyword, QuoteSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitKeyword", function() { return SplitKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSearch", function() { return QuoteSearch; });
/* harmony import */ var _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoSuggestion */ "./src/ts/autoSuggestion.ts");

// 将 keyword 分为 `quotePrefix?` 和 `others` 两部分
function SplitKeyword(keyword) {
    var splitedKw = keyword.split(" ");
    var firstWord = splitedKw[0].toLowerCase(); // 忽略大小写
    // 以 `'` 开头
    if (firstWord[0] !== "'") {
        return { prefix: null, others: keyword };
    }
    else {
        splitedKw.shift();
        var elseWords = splitedKw.join(" ");
        // 将开头的 `'` 删除
        return { prefix: firstWord.substr(1), others: elseWords };
    }
}
var QuoteSearch = /** @class */ (function () {
    function QuoteSearch(searchBar, suggestion) {
        var _this = this;
        this.searchBar = searchBar;
        this.suggestion = suggestion;
        searchBar.on("keydown", function (ev) {
            switch (ev.key) {
                case "Enter":
                    // Shift + Enter 在新标签页打开搜索结果
                    _this.Search(ev.shiftKey);
                    if (!ev.shiftKey) {
                        searchBar.attr("disabled", "disabled");
                        searchBar.attr("placeholder", "Searching...");
                    }
                    searchBar.val("");
                    break;
                case "ArrowUp":
                    _this.suggestion.SelectUp();
                    ev.preventDefault();
                    break;
                case "ArrowDown":
                    _this.suggestion.SelectDown();
                    ev.preventDefault();
                    break;
            }
        });
        searchBar.on("keyup", function (ev) {
            if (ev.key === "Escape") {
                searchBar[0].blur();
            }
        });
        searchBar.on("input", function () {
            if (searchBar.val() !== "") {
                _this.suggestion.Get(_this.searchBar.val().toString());
                _this.suggestion.Blur();
            }
        });
    }
    QuoteSearch.prototype.Search = function (newtab) {
        var _this = this;
        if (newtab === void 0) { newtab = false; }
        // 打开搜索结果
        var openResult = function (url, keyword) {
            return window.open(url.replace("%s", encodeURIComponent(_this.suggestion.GetObjOrSelected(keyword))), newtab ? "_blank" : "_self");
        };
        var s = SplitKeyword(this.searchBar.val().toString());
        console.log(s);
        // 遍历每个搜索引擎
        // 如果前缀匹配, 就使用它
        (s.prefix !== null &&
            QuoteSearch.sources.some(function (source) {
                return source.prefixes.some(function (pr) { return pr === s.prefix && openResult(source.url, s.others); });
            })) ||
            openResult(QuoteSearch.sources[0].url, s.others);
    };
    QuoteSearch.sources = [
        {
            name: "bing",
            prefixes: ["b", "bing"],
            url: "https://www.bing.com/search?q=%s",
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.bing,
        },
        {
            name: "baidu",
            prefixes: ["bd", "baidu"],
            url: "https://www.baidu.com/s?ie=utf-8&wd=%s",
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.baidu,
        },
        {
            name: "google",
            prefixes: ["g", "gg", "google"],
            url: "https://www.google.com/search?q=%s",
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.google,
        },
        {
            name: "luogu",
            prefixes: ["lg", "luogu"],
            url: "https://www.luogu.com.cn/problem/list?content=true&page=1&keyword=%s",
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
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.google,
        },
        {
            name: "miji search",
            prefixes: ["mj", "mjsou"],
            url: "https://mijisou.com/?q=%s",
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.baidu,
        },
        {
            name: "lookao",
            prefixes: ["lk", "lookao"],
            url: "https://lookao.com/search?q=%s",
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.baidu,
        },
        {
            name: "jingdong",
            prefixes: ["jd", "jingdong"],
            url: "https://search.jd.com/Search?keyword=%s&enc=utf-8",
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.taobao,
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
            suggest: _autoSuggestion__WEBPACK_IMPORTED_MODULE_0__["AutoSuggestion"].sources.bing,
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
    return QuoteSearch;
}());



/***/ }),

/***/ "./src/ts/tangyan.ts":
/*!***************************!*\
  !*** ./src/ts/tangyan.ts ***!
  \***************************/
/*! exports provided: TangYan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangYan", function() { return TangYan; });
var TangYan = /** @class */ (function () {
    function TangYan() {
        $.ajax({
            url: TangYan.source.url,
            dataType: "jsonp",
            jsonp: TangYan.source.jsonp,
            success: TangYan.source.callback,
        });
    }
    TangYan.Write = function (obj) {
        document.getElementById("tang-yan").innerHTML = obj.hitokoto + "&emsp;\u2014\u2014" + obj.from;
    };
    TangYan.source = {
        url: "https://api.lyoi.cc/tangokoto?type=jsonp",
        jsonp: "_callback",
        callback: TangYan.Write,
    };
    return TangYan;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hdXRvU3VnZ2VzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcXVvdGVTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Rhbmd5YW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBRdW90ZVNlYXJjaCwgU3BsaXRLZXl3b3JkIH0gZnJvbSBcIi4vcXVvdGVTZWFyY2hcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9TdWdnZXN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBzb3VyY2VzID0ge1xuICAgIGJpbmc6IHtcbiAgICAgIHVybDpcbiAgICAgICAgXCJodHRwczovL2FwaS5iaW5nLmNvbS9xc29uaHMuYXNweD9cIiArXG4gICAgICAgIFwidHlwZT1jYiZxPSVzJmNvdW50PTEwJnNhZmVzZWFyY2g9U3RyaWN0XCIsXG4gICAgICBqc29ucDogXCJjYlwiLFxuICAgICAgY2FsbGJhY2s6IEF1dG9TdWdnZXN0aW9uLldyaXRlQmluZyxcbiAgICB9LFxuICAgIGJhaWR1OiB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zdWdnZXN0aW9uLmJhaWR1LmNvbS9zdT93ZD0lc1wiLFxuICAgICAganNvbnA6IFwiY2JcIixcbiAgICAgIGNhbGxiYWNrOiBBdXRvU3VnZ2VzdGlvbi5Xcml0ZUJhaWR1LFxuICAgIH0sXG4gICAgZ29vZ2xlOiB7XG4gICAgICB1cmw6XG4gICAgICAgIFwiaHR0cHM6Ly9zdWdnZXN0cXVlcmllcy5nb29nbGUuY29tL2NvbXBsZXRlL3NlYXJjaD9jbGllbnQ9eW91dHViZSZxPSVzXCIsXG4gICAgICBqc29ucDogXCJqc29ucFwiLFxuICAgICAgY2FsbGJhY2s6IEF1dG9TdWdnZXN0aW9uLldyaXRlR29vZ2xlLFxuICAgIH0sXG4gICAgdGFvYmFvOiB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zdWdnZXN0LnRhb2Jhby5jb20vc3VnP2NvZGU9dXRmLTgmcT0lc1wiLFxuICAgICAganNvbnA6IFwiY2FsbGJhY2tcIixcbiAgICAgIGNhbGxiYWNrOiBBdXRvU3VnZ2VzdGlvbi5Xcml0ZVRhb2JhbyxcbiAgICB9LFxuICB9O1xuXG4gIHB1YmxpYyBzdGF0aWMgV3JpdGVCaW5nKFxuICAgIHdyYXA6IEpRdWVyeTxIVE1MRWxlbWVudD4sXG4gICAgZGF0YToge1xuICAgICAgQVM6IHsgUmVzdWx0czogeyBTdWdnZXN0czogeyBUeHQ6IGFueSB9W10gfVtdIH07XG4gICAgfSxcbiAgKSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBzbGljZWREYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHNsaWNlZERhdGEgPSBBdXRvU3VnZ2VzdGlvbi5TbGljZShkYXRhLkFTLlJlc3VsdHNbMF0uU3VnZ2VzdHMpO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgd3JhcC5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzbGljZWREYXRhLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgdGV4dCArPSBgPGRpdj4ke3Jlcy5UeHR9PC9kaXY+YDtcbiAgICB9KTtcbiAgICB3cmFwLmh0bWwodGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFdyaXRlQmFpZHUod3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgZGF0YTogeyBzOiBhbnlbXSB9KSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBzbGljZWREYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHNsaWNlZERhdGEgPSBBdXRvU3VnZ2VzdGlvbi5TbGljZShkYXRhLnMpO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgd3JhcC5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzbGljZWREYXRhLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgdGV4dCArPSBgPGRpdj4ke3Jlc308L2Rpdj5gO1xuICAgIH0pO1xuICAgIHdyYXAuaHRtbCh0ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgV3JpdGVHb29nbGUod3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgZGF0YTogYW55W11bXSkge1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgc2xpY2VkRGF0YSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBzbGljZWREYXRhID0gQXV0b1N1Z2dlc3Rpb24uU2xpY2UoZGF0YVsxXSk7XG4gICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICB3cmFwLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNsaWNlZERhdGEuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICB0ZXh0ICs9IGA8ZGl2PiR7cmVzWzBdfTwvZGl2PmA7XG4gICAgfSk7XG4gICAgd3JhcC5odG1sKHRleHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBXcml0ZVRhb2JhbyhcbiAgICB3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LFxuICAgIGRhdGE6IHsgcmVzdWx0OiBhbnlbXSB9LFxuICApIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHNsaWNlZERhdGEgPSBbXTtcbiAgICB0cnkge1xuICAgICAgc2xpY2VkRGF0YSA9IEF1dG9TdWdnZXN0aW9uLlNsaWNlKGRhdGEucmVzdWx0KTtcbiAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgIHdyYXAuaHRtbChcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2xpY2VkRGF0YS5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIHRleHQgKz0gYDxkaXY+JHtyZXNbMF19PC9kaXY+YDtcbiAgICB9KTtcbiAgICB3cmFwLmh0bWwodGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBTbGljZShpdGVtczogYW55W10pIHtcbiAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCB8fCBpdGVtcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCB3aW5IZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgaWYgKHdpbkhlaWdodCA8PSA3MDApIHtcbiAgICAgIHJldHVybiBpdGVtcy5zbGljZSgwLCA2KTtcbiAgICB9IGVsc2UgaWYgKHdpbkhlaWdodCA8PSA4MDApIHtcbiAgICAgIHJldHVybiBpdGVtcy5zbGljZSgwLCA4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW1zLnNsaWNlKDAsIDEwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyYXA6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cbiAgLy8g5b2T5YmN6YCJ5Lit55qEIHN1Z2dlc3Rpb24g55qEIGluZGV4LCAtMSDooajnpLrmnKrpgInkuK1cbiAgcHJpdmF0ZSBzZWxlY3RlZCA9IC0xO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy53cmFwID0gd3JhcDtcbiAgfVxuXG4gIHB1YmxpYyBCbHVyKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAtMTtcbiAgICB0aGlzLlVwZGF0ZUNzcygpO1xuICB9XG5cbiAgcHVibGljIFNlbGVjdFVwKCkge1xuICAgIC0tdGhpcy5zZWxlY3RlZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA8IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5VcGRhdGVDc3MoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3REb3duKCkge1xuICAgICsrdGhpcy5zZWxlY3RlZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA+PSB0aGlzLndyYXAuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLndyYXAuY2hpbGRyZW4oKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB0aGlzLlVwZGF0ZUNzcygpO1xuICB9XG5cbiAgLy8g6L+U5ZueIGBvYmpgIOaIluiAheW9k+WJjemAieaLqeeahOW7uuiuruWAmemAiemhueaWh+Wtl1xuICBwdWJsaWMgR2V0T2JqT3JTZWxlY3RlZChvYmo6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkID49IDBcbiAgICAgID8gdGhpcy53cmFwLmNoaWxkcmVuKCkuZXEodGhpcy5zZWxlY3RlZCkudGV4dCgpXG4gICAgICA6IG9iajtcbiAgfVxuXG4gIHB1YmxpYyBHZXQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VuZEFqYXggPSAoXG4gICAgICB0bzoge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAganNvbnA6IHN0cmluZztcbiAgICAgICAgY2FsbGJhY2s6ICh3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBkYXRhOiBhbnkpID0+IHZvaWQ7XG4gICAgICB9LFxuICAgICAga2V5d29yZDogc3RyaW5nLFxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgIHVybDogdG8udXJsLnJlcGxhY2UoXCIlc1wiLCBlbmNvZGVVUklDb21wb25lbnQoa2V5d29yZCkpLFxuICAgICAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgICAgICBqc29ucDogdG8uanNvbnAsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgdG8uY2FsbGJhY2sodGhpcy53cmFwLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgcyA9IFNwbGl0S2V5d29yZChrZXl3b3JkKTtcbiAgICBpZiAocy5vdGhlcnMgPT09IFwiXCIgfHwgcy5vdGhlcnMgPT09IG51bGwgfHwgcy5vdGhlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53cmFwLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOmBjeWOhuavj+S4quaQnOe0ouW8leaTjlxuICAgIC8vIOWmguaenOWJjee8gOWMuemFjSwg5bCx5L2/55So5a6DXG4gICAgKHMucHJlZml4ICE9PSBudWxsICYmXG4gICAgICBRdW90ZVNlYXJjaC5zb3VyY2VzLnNvbWUoKHNvdXJjZSkgPT5cbiAgICAgICAgc291cmNlLnByZWZpeGVzLnNvbWUoXG4gICAgICAgICAgKHByZWZpeCkgPT5cbiAgICAgICAgICAgIHByZWZpeCA9PT0gcy5wcmVmaXggJiZcbiAgICAgICAgICAgIHNvdXJjZS5zdWdnZXN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbmRBamF4KHNvdXJjZS5zdWdnZXN0LCBzLm90aGVycyksXG4gICAgICAgICksXG4gICAgICApKSB8fFxuICAgICAgc2VuZEFqYXgoUXVvdGVTZWFyY2guc291cmNlc1swXS5zdWdnZXN0LCBzLm90aGVycyk7XG4gIH1cblxuICBwcml2YXRlIFVwZGF0ZUNzcygpIHtcbiAgICB0aGlzLndyYXAuY2hpbGRyZW4oKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVwiKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA+PSAwKSB7XG4gICAgICB0aGlzLndyYXBcbiAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgLmVxKHRoaXMuc2VsZWN0ZWQpXG4gICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwicmdiYSgwLCAwLCAwLCAwLjIpXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50IG5vLWV4dGVuZC1uYXRpdmU6IFtcImVycm9yXCIsIHsgXCJleGNlcHRpb25zXCI6IFtcIkRhdGVcIl0gfV0gKi9cblxuRGF0ZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICBjb25zdCBkYXRlID0ge1xuICAgIFwiTStcIjogdGhpcy5nZXRNb250aCgpICsgMSxcbiAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLFxuICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLFxuICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksXG4gICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSxcbiAgICBcInErXCI6IE1hdGguZmxvb3IoKHRoaXMuZ2V0TW9udGgoKSArIDMpIC8gMyksXG4gICAgXCJTK1wiOiB0aGlzLmdldE1pbGxpc2Vjb25kcygpLFxuICB9O1xuICBsZXQgcmVzID0gZm9ybWF0O1xuICBpZiAoLyh5KykvaS50ZXN0KGZvcm1hdCkpIHtcbiAgICByZXMgPSBmb3JtYXQucmVwbGFjZShcbiAgICAgIFJlZ0V4cC4kMSxcbiAgICAgIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCksXG4gICAgKTtcbiAgfVxuICBmb3IgKGNvbnN0IGsgaW4gZGF0ZSkge1xuICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KHJlcykpIHtcbiAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKFxuICAgICAgICBSZWdFeHAuJDEsXG4gICAgICAgIFJlZ0V4cC4kMS5sZW5ndGggPT09IDFcbiAgICAgICAgICA/IGRhdGVba11cbiAgICAgICAgICA6IChcIjAwXCIgKyBkYXRlW2tdKS5zdWJzdHIoU3RyaW5nKGRhdGVba10pLmxlbmd0aCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsImltcG9ydCBcIi4uL2Nzcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2dsb2JhbFwiO1xuaW1wb3J0IHsgVGFuZ1lhbiB9IGZyb20gXCIuL3Rhbmd5YW5cIjtcbmltcG9ydCB7IFF1b3RlU2VhcmNoIH0gZnJvbSBcIi4vcXVvdGVTZWFyY2hcIjtcbmltcG9ydCB7IEF1dG9TdWdnZXN0aW9uIH0gZnJvbSBcIi4vYXV0b1N1Z2dlc3Rpb25cIjtcblxuJCgoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9ICQoXCIjc2VhcmNoXCIpO1xuICBjb25zdCB0aW1lVGV4dCA9ICQoXCIjdGltZVwiKTtcbiAgY29uc3Qgc3VnZ2VzdGlvbnNXcmFwID0gJChcIiNzdWdnZXN0aW9uc1wiKTtcblxuICBmdW5jdGlvbiBVcGRhdGVUaW1lKCkge1xuICAgIHRpbWVUZXh0Lmh0bWwobmV3IERhdGUoKS5mb3JtYXQoXCJoaDptbVwiKSk7XG4gIH1cblxuICBVcGRhdGVUaW1lKCk7XG4gIHNldEludGVydmFsKFVwZGF0ZVRpbWUsIDEwMDApO1xuICBjb25zdCBfID0gbmV3IFRhbmdZYW4oKTtcbiAgY29uc3QgX18gPSBuZXcgUXVvdGVTZWFyY2goc2VhcmNoQmFyLCBuZXcgQXV0b1N1Z2dlc3Rpb24oc3VnZ2VzdGlvbnNXcmFwKSk7XG5cbiAgJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIChldjogSlF1ZXJ5LktleURvd25FdmVudCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICFldi5jdHJsS2V5ICYmXG4gICAgICAhZXYuYWx0S2V5ICYmXG4gICAgICAhZXYubWV0YUtleSAmJlxuICAgICAgZXYua2V5ICE9PSBcIkVudGVyXCIgJiZcbiAgICAgIGV2LmtleSAhPT0gXCJFc2NhcGVcIlxuICAgICkge1xuICAgICAgc2VhcmNoQmFyLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaFwiKTtcbiAgICAgIHNlYXJjaEJhci5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICBzZWFyY2hCYXJbMF0uZm9jdXMoKTtcbiAgICAgIGlmIChldi5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHNlYXJjaEJhci52YWwoXCJcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBBdXRvU3VnZ2VzdGlvbiB9IGZyb20gXCIuL2F1dG9TdWdnZXN0aW9uXCI7XG5cbi8vIOWwhiBrZXl3b3JkIOWIhuS4uiBgcXVvdGVQcmVmaXg/YCDlkowgYG90aGVyc2Ag5Lik6YOo5YiGXG5leHBvcnQgZnVuY3Rpb24gU3BsaXRLZXl3b3JkKGtleXdvcmQ6IHN0cmluZykge1xuICBjb25zdCBzcGxpdGVkS3cgPSBrZXl3b3JkLnNwbGl0KFwiIFwiKTtcbiAgY29uc3QgZmlyc3RXb3JkID0gc3BsaXRlZEt3WzBdLnRvTG93ZXJDYXNlKCk7IC8vIOW/veeVpeWkp+Wwj+WGmVxuICAvLyDku6UgYCdgIOW8gOWktFxuICBpZiAoZmlyc3RXb3JkWzBdICE9PSBcIidcIikge1xuICAgIHJldHVybiB7IHByZWZpeDogbnVsbCwgb3RoZXJzOiBrZXl3b3JkIH07XG4gIH0gZWxzZSB7XG4gICAgc3BsaXRlZEt3LnNoaWZ0KCk7XG4gICAgY29uc3QgZWxzZVdvcmRzID0gc3BsaXRlZEt3LmpvaW4oXCIgXCIpO1xuICAgIC8vIOWwhuW8gOWktOeahCBgJ2Ag5Yig6ZmkXG4gICAgcmV0dXJuIHsgcHJlZml4OiBmaXJzdFdvcmQuc3Vic3RyKDEpLCBvdGhlcnM6IGVsc2VXb3JkcyB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdW90ZVNlYXJjaCB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc291cmNlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImJpbmdcIixcbiAgICAgIHByZWZpeGVzOiBbXCJiXCIsIFwiYmluZ1wiXSxcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5iaW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJiYWlkdVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImJkXCIsIFwiYmFpZHVcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/aWU9dXRmLTgmd2Q9JXNcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMuYmFpZHUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdvb2dsZVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImdcIiwgXCJnZ1wiLCBcImdvb2dsZVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmdvb2dsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibHVvZ3VcIixcbiAgICAgIHByZWZpeGVzOiBbXCJsZ1wiLCBcImx1b2d1XCJdLFxuICAgICAgdXJsOlxuICAgICAgICBcImh0dHBzOi8vd3d3Lmx1b2d1LmNvbS5jbi9wcm9ibGVtL2xpc3Q/Y29udGVudD10cnVlJnBhZ2U9MSZrZXl3b3JkPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm9laXNcIixcbiAgICAgIHByZWZpeGVzOiBbXCJvZWlzXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vb2Vpcy5vcmcvc2VhcmNoP3E9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ29vZ2xlIHRyYW5zbGF0ZVwiLFxuICAgICAgcHJlZml4ZXM6IFtcInRyXCIsIFwiZ3RyXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vdHJhbnNsYXRlLmdvb2dsZS5jbi8/c291cmNlPW9zZGQjYXV0b3xhdXRvfCVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRyYW5zbGF0ZSBlbiB0byB6aC1DTlwiLFxuICAgICAgcHJlZml4ZXM6IFtcImVuMnpoXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vdHJhbnNsYXRlLmdvb2dsZS5jbi8/c291cmNlPW9zZGQjZW58emgtQ058JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidHJhbnNsYXRlIHpoLUNOIHRvIGVuXCIsXG4gICAgICBwcmVmaXhlczogW1wiemgyZW5cIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNuLz9zb3VyY2U9b3NkZCN6aC1DTnxlbnwlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJiYWlkdSB0cmFuc2xhdGVcIixcbiAgICAgIHByZWZpeGVzOiBbXCJidHJcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9mYW55aS5iYWlkdS5jb20jZW4vemgvJXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZHVja2R1Y2tnb1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImRkZ1wiLCBcImR1Y2tkdWNrZ29cIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8/cT0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5nb29nbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1pamkgc2VhcmNoXCIsXG4gICAgICBwcmVmaXhlczogW1wibWpcIiwgXCJtanNvdVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL21pamlzb3UuY29tLz9xPSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmJhaWR1LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsb29rYW9cIixcbiAgICAgIHByZWZpeGVzOiBbXCJsa1wiLCBcImxvb2thb1wiXSxcbiAgICAgIHVybDogXCJodHRwczovL2xvb2thby5jb20vc2VhcmNoP3E9JXNcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMuYmFpZHUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImppbmdkb25nXCIsXG4gICAgICBwcmVmaXhlczogW1wiamRcIiwgXCJqaW5nZG9uZ1wiXSxcbiAgICAgIHVybDogXCJodHRwczovL3NlYXJjaC5qZC5jb20vU2VhcmNoP2tleXdvcmQ9JXMmZW5jPXV0Zi04XCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLnRhb2JhbyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwid2lraXBlZGlhXCIsXG4gICAgICBwcmVmaXhlczogW1wid2lraVwiLCBcIndpa2lwZWRpYVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3d3dy53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpTZWFyY2g/c2VhcmNoPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIndpa2lwZWRpYSAoY2hpbmVzZSlcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ3aWtpemhcIiwgXCJ3aWtpcGVkaWF6aFwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlNlYXJjaD9zZWFyY2g9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieWFuZGV4XCIsXG4gICAgICBwcmVmaXhlczogW1wieWFcIiwgXCJ5YW5kZXhcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly95YW5kZXguY29tL3NlYXJjaC8/dGV4dD0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5iaW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJvaXdraVwiLFxuICAgICAgcHJlZml4ZXM6IFtcIm9pd2lraVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPXNpdGU6b2ktd2lraS5vcmcrJXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiemhpaHVcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ6aFwiLCBcInpoaWh1XCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9zZWFyY2g/dHlwZT1jb250ZW50JnE9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicnVub29iXCIsXG4gICAgICBwcmVmaXhlczogW1wicnVub29iXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnJ1bm9vYi5jb20vP3M9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ3JlYXN5Zm9ya1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImdmb3JrXCIsIFwiZ3JlYXN5Zm9ya1wiXSxcbiAgICAgIHVybDogXCJodHRwczovL2dyZWFzeWZvcmsub3JnL3NjcmlwdHMvc2VhcmNoLz9xPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdpdGh1YlwiLFxuICAgICAgcHJlZml4ZXM6IFtcImdoXCIsIFwiZ2l0aHViXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZWFyY2g/cT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJnaXRlZVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImdpdGVlXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vc2VhcmNoLmdpdGVlLmNvbS8/dHlwZT1yZXBvc2l0b3J5JnE9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibHlvaVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImx5b2lcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9seW9pLmNjL3Byb2JsZW1zL3NlYXJjaD9rZXl3b3JkPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNvZGVmb3JjZXNcIixcbiAgICAgIHByZWZpeGVzOiBbXCJjZlwiLCBcImNvZGVmb3JjZXNcIl0sXG4gICAgICB1cmw6IFwiaHR0cDovL2NvZGVmb3JjZXMuY29tL3NlYXJjaD9ieT0mcXVlcnk9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29kZWZvcmNlcy5tbFwiLFxuICAgICAgcHJlZml4ZXM6IFtcImNmbWxcIiwgXCJjb2RlZm9yY2VzbWxcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlZm9yY2VzLm1sL3NlYXJjaD9ieT0mcXVlcnk9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29kZWZvcmMuZXNcIixcbiAgICAgIHByZWZpeGVzOiBbXCJjZmVzXCIsIFwiY29kZWZvcmNlc2VzXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vY29kZWZvcmMuZXMvc2VhcmNoP2J5PSZxdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtYWN3a1wiLFxuICAgICAgcHJlZml4ZXM6IFtcIm1hY3drXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vbWFjd2suY29tL3NvZnQvYWxsL3MtJXMvcDFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidHdpdHRlclwiLFxuICAgICAgcHJlZml4ZXM6IFtcInR3aXRcIiwgXCJ0d2VldFwiLCBcInR3aXR0ZXJcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zZWFyY2g/cT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJnYW9kZSBtYXBcIixcbiAgICAgIHByZWZpeGVzOiBbXCJnZG1hcFwiLCBcImdhb2RlbWFwXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vZGl0dS5hbWFwLmNvbS9zZWFyY2g/cXVlcnk9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwid29sZnJhbWFscGhhXCIsXG4gICAgICBwcmVmaXhlczogW1wid2FcIiwgXCJ3b2xmcmFtXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYmlsaWJpbGlcIixcbiAgICAgIHByZWZpeGVzOiBbXCJiaWxpXCIsIFwiYmlsaWJpbGlcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zZWFyY2guYmlsaWJpbGkuY29tL2FsbD9rZXl3b3JkPSVzXCIsXG4gICAgfSxcbiAgXTtcblxuICBwcml2YXRlIHNlYXJjaEJhcjogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcbiAgcHJpdmF0ZSBzdWdnZXN0aW9uOiBBdXRvU3VnZ2VzdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgc2VhcmNoQmFyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LFxuICAgIHN1Z2dlc3Rpb246IEF1dG9TdWdnZXN0aW9uLFxuICApIHtcbiAgICB0aGlzLnNlYXJjaEJhciA9IHNlYXJjaEJhcjtcbiAgICB0aGlzLnN1Z2dlc3Rpb24gPSBzdWdnZXN0aW9uO1xuICAgIHNlYXJjaEJhci5vbihcImtleWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2LmtleSkge1xuICAgICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgICAvLyBTaGlmdCArIEVudGVyIOWcqOaWsOagh+etvumhteaJk+W8gOaQnOe0oue7k+aenFxuICAgICAgICAgIHRoaXMuU2VhcmNoKGV2LnNoaWZ0S2V5KTtcbiAgICAgICAgICBpZiAoIWV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBzZWFyY2hCYXIuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBzZWFyY2hCYXIuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoaW5nLi4uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWFyY2hCYXIudmFsKFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5TZWxlY3RVcCgpO1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb24uU2VsZWN0RG93bigpO1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VhcmNoQmFyLm9uKFwia2V5dXBcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHNlYXJjaEJhclswXS5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VhcmNoQmFyLm9uKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKHNlYXJjaEJhci52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb24uR2V0KHRoaXMuc2VhcmNoQmFyLnZhbCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb24uQmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIFNlYXJjaChuZXd0YWIgPSBmYWxzZSkge1xuICAgIC8vIOaJk+W8gOaQnOe0oue7k+aenFxuICAgIGNvbnN0IG9wZW5SZXN1bHQgPSAodXJsOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZykgPT5cbiAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwucmVwbGFjZShcbiAgICAgICAgICBcIiVzXCIsXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3VnZ2VzdGlvbi5HZXRPYmpPclNlbGVjdGVkKGtleXdvcmQpKSxcbiAgICAgICAgKSxcbiAgICAgICAgbmV3dGFiID8gXCJfYmxhbmtcIiA6IFwiX3NlbGZcIixcbiAgICAgICk7XG4gICAgY29uc3QgcyA9IFNwbGl0S2V5d29yZCh0aGlzLnNlYXJjaEJhci52YWwoKS50b1N0cmluZygpKTtcbiAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAvLyDpgY3ljobmr4/kuKrmkJzntKLlvJXmk45cbiAgICAvLyDlpoLmnpzliY3nvIDljLnphY0sIOWwseS9v+eUqOWug1xuICAgIChzLnByZWZpeCAhPT0gbnVsbCAmJlxuICAgICAgUXVvdGVTZWFyY2guc291cmNlcy5zb21lKChzb3VyY2UpID0+XG4gICAgICAgIHNvdXJjZS5wcmVmaXhlcy5zb21lKFxuICAgICAgICAgIChwcikgPT4gcHIgPT09IHMucHJlZml4ICYmIG9wZW5SZXN1bHQoc291cmNlLnVybCwgcy5vdGhlcnMpLFxuICAgICAgICApLFxuICAgICAgKSkgfHxcbiAgICAgIG9wZW5SZXN1bHQoUXVvdGVTZWFyY2guc291cmNlc1swXS51cmwsIHMub3RoZXJzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRhbmdZYW4ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNvdXJjZSA9IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcGkubHlvaS5jYy90YW5nb2tvdG8/dHlwZT1qc29ucFwiLFxuICAgIGpzb25wOiBcIl9jYWxsYmFja1wiLFxuICAgIGNhbGxiYWNrOiBUYW5nWWFuLldyaXRlLFxuICB9O1xuXG4gIHB1YmxpYyBzdGF0aWMgV3JpdGUob2JqOiB7IGhpdG9rb3RvOiBzdHJpbmc7IGZyb206IHN0cmluZyB9KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInRhbmcteWFuXCIsXG4gICAgKS5pbm5lckhUTUwgPSBgJHtvYmouaGl0b2tvdG99JmVtc3A74oCU4oCUJHtvYmouZnJvbX1gO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFRhbmdZYW4uc291cmNlLnVybCxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgICBqc29ucDogVGFuZ1lhbi5zb3VyY2UuanNvbnAsXG4gICAgICBzdWNjZXNzOiBUYW5nWWFuLnNvdXJjZS5jYWxsYmFjayxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBa0hBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7QUF6RkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlMQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdUtBO0FBQUE7QUFoTUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMktBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQXZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtRUE7QUFBQTtBQXpPQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQUdBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUFBO0FBckJBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9