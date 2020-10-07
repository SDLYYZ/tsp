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
  for (let k in date) {
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
/* harmony import */ var _tangyan_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tangyan.js */ "./src/ts/tangyan.js");
/* harmony import */ var _quoteSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quoteSearch */ "./src/ts/quoteSearch.ts");
/* harmony import */ var _autoSuggestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autoSuggestion */ "./src/ts/autoSuggestion.ts");







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
    var __ = new _quoteSearch__WEBPACK_IMPORTED_MODULE_5__["QuoteSearch"](searchBar, new _autoSuggestion__WEBPACK_IMPORTED_MODULE_6__["AutoSuggestion"](suggestionsWrap));
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

/***/ "./src/ts/tangyan.js":
/*!***************************!*\
  !*** ./src/ts/tangyan.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tangyan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tangyan */ "./src/ts/tangyan.ts");

window.TangYan = _tangyan__WEBPACK_IMPORTED_MODULE_0__["TangYan"];


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hdXRvU3VnZ2VzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcXVvdGVTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Rhbmd5YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Rhbmd5YW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBMEQ7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QUMsQ0FBQyxJQUFJLENBQUM7WUFDTCxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3ZCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDM0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYmEsYUFBSyxHQUFuQixVQUFvQixHQUF1QztRQUN6RCxRQUFRLENBQUMsY0FBYyxDQUNyQixVQUFVLENBQ1gsQ0FBQyxTQUFTLEdBQU0sR0FBRyxDQUFDLFFBQVEsMEJBQVcsR0FBRyxDQUFDLElBQU0sQ0FBQztJQUNyRCxDQUFDO0lBVnNCLGNBQU0sR0FBRztRQUM5QixHQUFHLEVBQUUsMENBQTBDO1FBQy9DLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFFBQVEsRUFBRSxPQUFPLENBQUMsS0FBSztLQUN4QixDQUFDO0lBZ0JKLGNBQUM7Q0FBQTtBQXJCbUIiLCJmaWxlIjoiaW5kZXguOTI1YTUxMzc4ZmE1ODg4OTllMGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9pbmRleC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IFF1b3RlU2VhcmNoLCBTcGxpdEtleXdvcmQgfSBmcm9tIFwiLi9xdW90ZVNlYXJjaFwiO1xuZXhwb3J0IGNsYXNzIEF1dG9TdWdnZXN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBzb3VyY2VzID0ge1xuICAgIGJpbmc6IHtcbiAgICAgIHVybDpcbiAgICAgICAgXCJodHRwczovL2FwaS5iaW5nLmNvbS9xc29uaHMuYXNweD9cIiArXG4gICAgICAgIFwidHlwZT1jYiZxPSVzJmNvdW50PTEwJnNhZmVzZWFyY2g9U3RyaWN0XCIsXG4gICAgICBqc29ucDogXCJjYlwiLFxuICAgICAgY2FsbGJhY2s6IEF1dG9TdWdnZXN0aW9uLldyaXRlQmluZyxcbiAgICB9LFxuICAgIGJhaWR1OiB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zdWdnZXN0aW9uLmJhaWR1LmNvbS9zdT93ZD0lc1wiLFxuICAgICAganNvbnA6IFwiY2JcIixcbiAgICAgIGNhbGxiYWNrOiBBdXRvU3VnZ2VzdGlvbi5Xcml0ZUJhaWR1LFxuICAgIH0sXG4gICAgZ29vZ2xlOiB7XG4gICAgICB1cmw6XG4gICAgICAgIFwiaHR0cHM6Ly9zdWdnZXN0cXVlcmllcy5nb29nbGUuY29tL2NvbXBsZXRlL3NlYXJjaD9jbGllbnQ9eW91dHViZSZxPSVzXCIsXG4gICAgICBqc29ucDogXCJqc29ucFwiLFxuICAgICAgY2FsbGJhY2s6IEF1dG9TdWdnZXN0aW9uLldyaXRlR29vZ2xlLFxuICAgIH0sXG4gICAgdGFvYmFvOiB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zdWdnZXN0LnRhb2Jhby5jb20vc3VnP2NvZGU9dXRmLTgmcT0lc1wiLFxuICAgICAganNvbnA6IFwiY2FsbGJhY2tcIixcbiAgICAgIGNhbGxiYWNrOiBBdXRvU3VnZ2VzdGlvbi5Xcml0ZVRhb2JhbyxcbiAgICB9LFxuICB9O1xuXG4gIHB1YmxpYyBzdGF0aWMgV3JpdGVCaW5nKFxuICAgIHdyYXA6IEpRdWVyeTxIVE1MRWxlbWVudD4sXG4gICAgZGF0YToge1xuICAgICAgQVM6IHsgUmVzdWx0czogeyBTdWdnZXN0czogeyBUeHQ6IGFueSB9W10gfVtdIH07XG4gICAgfSxcbiAgKSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBzbGljZWREYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHNsaWNlZERhdGEgPSBBdXRvU3VnZ2VzdGlvbi5TbGljZShkYXRhLkFTLlJlc3VsdHNbMF0uU3VnZ2VzdHMpO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgd3JhcC5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzbGljZWREYXRhLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgdGV4dCArPSBgPGRpdj4ke3Jlcy5UeHR9PC9kaXY+YDtcbiAgICB9KTtcbiAgICB3cmFwLmh0bWwodGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFdyaXRlQmFpZHUod3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgZGF0YTogeyBzOiBhbnlbXSB9KSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBzbGljZWREYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHNsaWNlZERhdGEgPSBBdXRvU3VnZ2VzdGlvbi5TbGljZShkYXRhLnMpO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgd3JhcC5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzbGljZWREYXRhLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgdGV4dCArPSBgPGRpdj4ke3Jlc308L2Rpdj5gO1xuICAgIH0pO1xuICAgIHdyYXAuaHRtbCh0ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgV3JpdGVHb29nbGUod3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgZGF0YTogYW55W11bXSkge1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgc2xpY2VkRGF0YSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBzbGljZWREYXRhID0gQXV0b1N1Z2dlc3Rpb24uU2xpY2UoZGF0YVsxXSk7XG4gICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICB3cmFwLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNsaWNlZERhdGEuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICB0ZXh0ICs9IGA8ZGl2PiR7cmVzWzBdfTwvZGl2PmA7XG4gICAgfSk7XG4gICAgd3JhcC5odG1sKHRleHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBXcml0ZVRhb2JhbyhcbiAgICB3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LFxuICAgIGRhdGE6IHsgcmVzdWx0OiBhbnlbXSB9LFxuICApIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHNsaWNlZERhdGEgPSBbXTtcbiAgICB0cnkge1xuICAgICAgc2xpY2VkRGF0YSA9IEF1dG9TdWdnZXN0aW9uLlNsaWNlKGRhdGEucmVzdWx0KTtcbiAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgIHdyYXAuaHRtbChcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2xpY2VkRGF0YS5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIHRleHQgKz0gYDxkaXY+JHtyZXNbMF19PC9kaXY+YDtcbiAgICB9KTtcbiAgICB3cmFwLmh0bWwodGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBTbGljZShpdGVtczogYW55W10pIHtcbiAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCB8fCBpdGVtcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBsZXQgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgIGlmICh3aW5IZWlnaHQgPD0gNzAwKSB7XG4gICAgICByZXR1cm4gaXRlbXMuc2xpY2UoMCwgNik7XG4gICAgfSBlbHNlIGlmICh3aW5IZWlnaHQgPD0gODAwKSB7XG4gICAgICByZXR1cm4gaXRlbXMuc2xpY2UoMCwgOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtcy5zbGljZSgwLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXG4gIC8vIOW9k+WJjemAieS4reeahCBzdWdnZXN0aW9uIOeahCBpbmRleCwgLTEg6KGo56S65pyq6YCJ5LitXG4gIHByaXZhdGUgc2VsZWN0ZWQgPSAtMTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iod3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMud3JhcCA9IHdyYXA7XG4gIH1cblxuICBwdWJsaWMgQmx1cigpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gLTE7XG4gICAgdGhpcy5VcGRhdGVDc3MoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3RVcCgpIHtcbiAgICAtLXRoaXMuc2VsZWN0ZWQ7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgPCAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gLTE7XG4gICAgfVxuICAgIHRoaXMuVXBkYXRlQ3NzKCk7XG4gIH1cblxuICBwdWJsaWMgU2VsZWN0RG93bigpIHtcbiAgICArK3RoaXMuc2VsZWN0ZWQ7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgPj0gdGhpcy53cmFwLmNoaWxkcmVuKCkubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy53cmFwLmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgdGhpcy5VcGRhdGVDc3MoKTtcbiAgfVxuXG4gIC8vIOi/lOWbniBgb2JqYCDmiJbogIXlvZPliY3pgInmi6nnmoTlu7rorq7lgJnpgInpobnmloflrZdcbiAgcHVibGljIEdldE9iak9yU2VsZWN0ZWQob2JqOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA+PSAwXG4gICAgICA/IHRoaXMud3JhcC5jaGlsZHJlbigpLmVxKHRoaXMuc2VsZWN0ZWQpLnRleHQoKVxuICAgICAgOiBvYmo7XG4gIH1cblxuICBwdWJsaWMgR2V0KGtleXdvcmQ6IHN0cmluZykge1xuICAgIGxldCBzZW5kQWpheCA9IChcbiAgICAgIHRvOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICBqc29ucDogc3RyaW5nO1xuICAgICAgICBjYWxsYmFjazogKHdyYXA6IEpRdWVyeTxIVE1MRWxlbWVudD4sIGRhdGE6IGFueSkgPT4gdm9pZDtcbiAgICAgIH0sXG4gICAgICBrZXl3b3JkOiBzdHJpbmcsXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgdXJsOiB0by51cmwucmVwbGFjZShcIiVzXCIsIGVuY29kZVVSSUNvbXBvbmVudChrZXl3b3JkKSksXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgICAgIGpzb25wOiB0by5qc29ucCxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0by5jYWxsYmFjayh0aGlzLndyYXAsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBsZXQgcyA9IFNwbGl0S2V5d29yZChrZXl3b3JkKTtcbiAgICBpZiAocy5vdGhlcnMgPT09IFwiXCIgfHwgcy5vdGhlcnMgPT09IG51bGwgfHwgcy5vdGhlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53cmFwLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOmBjeWOhuavj+S4quaQnOe0ouW8leaTjlxuICAgIC8vIOWmguaenOWJjee8gOWMuemFjSwg5bCx5L2/55So5a6DXG4gICAgKHMucHJlZml4ICE9PSBudWxsICYmXG4gICAgICBRdW90ZVNlYXJjaC5zb3VyY2VzLnNvbWUoKHNvdXJjZSkgPT5cbiAgICAgICAgc291cmNlLnByZWZpeGVzLnNvbWUoXG4gICAgICAgICAgKHByZWZpeCkgPT5cbiAgICAgICAgICAgIHByZWZpeCA9PT0gcy5wcmVmaXggJiZcbiAgICAgICAgICAgIHNvdXJjZS5zdWdnZXN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbmRBamF4KHNvdXJjZS5zdWdnZXN0LCBzLm90aGVycyksXG4gICAgICAgICksXG4gICAgICApKSB8fFxuICAgICAgc2VuZEFqYXgoUXVvdGVTZWFyY2guc291cmNlc1swXS5zdWdnZXN0LCBzLm90aGVycyk7XG4gIH1cblxuICBwcml2YXRlIFVwZGF0ZUNzcygpIHtcbiAgICB0aGlzLndyYXAuY2hpbGRyZW4oKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVwiKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA+PSAwKSB7XG4gICAgICB0aGlzLndyYXBcbiAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgLmVxKHRoaXMuc2VsZWN0ZWQpXG4gICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwicmdiYSgwLCAwLCAwLCAwLjIpXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50IG5vLWV4dGVuZC1uYXRpdmU6IFtcImVycm9yXCIsIHsgXCJleGNlcHRpb25zXCI6IFtcIkRhdGVcIl0gfV0gKi9cblxuRGF0ZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICBjb25zdCBkYXRlID0ge1xuICAgIFwiTStcIjogdGhpcy5nZXRNb250aCgpICsgMSxcbiAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLFxuICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLFxuICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksXG4gICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSxcbiAgICBcInErXCI6IE1hdGguZmxvb3IoKHRoaXMuZ2V0TW9udGgoKSArIDMpIC8gMyksXG4gICAgXCJTK1wiOiB0aGlzLmdldE1pbGxpc2Vjb25kcygpLFxuICB9O1xuICBsZXQgcmVzID0gZm9ybWF0O1xuICBpZiAoLyh5KykvaS50ZXN0KGZvcm1hdCkpIHtcbiAgICByZXMgPSBmb3JtYXQucmVwbGFjZShcbiAgICAgIFJlZ0V4cC4kMSxcbiAgICAgIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCksXG4gICAgKTtcbiAgfVxuICBmb3IgKGxldCBrIGluIGRhdGUpIHtcbiAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChyZXMpKSB7XG4gICAgICByZXMgPSByZXMucmVwbGFjZShcbiAgICAgICAgUmVnRXhwLiQxLFxuICAgICAgICBSZWdFeHAuJDEubGVuZ3RoID09PSAxXG4gICAgICAgICAgPyBkYXRlW2tdXG4gICAgICAgICAgOiAoXCIwMFwiICsgZGF0ZVtrXSkuc3Vic3RyKFN0cmluZyhkYXRlW2tdKS5sZW5ndGgpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCJpbXBvcnQgXCIuLi9jc3MvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9nbG9iYWxcIjtcbmltcG9ydCB7IFRhbmdZYW4gfSBmcm9tIFwiLi90YW5neWFuXCI7XG5pbXBvcnQgXCIuL3Rhbmd5YW4uanNcIjtcbmltcG9ydCB7IFF1b3RlU2VhcmNoIH0gZnJvbSBcIi4vcXVvdGVTZWFyY2hcIjtcbmltcG9ydCB7IEF1dG9TdWdnZXN0aW9uIH0gZnJvbSBcIi4vYXV0b1N1Z2dlc3Rpb25cIjtcblxuJCgoKSA9PiB7XG4gIGxldCBzZWFyY2hCYXIgPSAkKFwiI3NlYXJjaFwiKTtcbiAgbGV0IHRpbWVUZXh0ID0gJChcIiN0aW1lXCIpO1xuICBsZXQgc3VnZ2VzdGlvbnNXcmFwID0gJChcIiNzdWdnZXN0aW9uc1wiKTtcblxuICBmdW5jdGlvbiBVcGRhdGVUaW1lKCkge1xuICAgIHRpbWVUZXh0Lmh0bWwobmV3IERhdGUoKS5mb3JtYXQoXCJoaDptbVwiKSk7XG4gIH1cblxuICBVcGRhdGVUaW1lKCk7XG4gIHNldEludGVydmFsKFVwZGF0ZVRpbWUsIDEwMDApO1xuICBsZXQgXyA9IG5ldyBUYW5nWWFuKCk7XG4gIGxldCBfXyA9IG5ldyBRdW90ZVNlYXJjaChzZWFyY2hCYXIsIG5ldyBBdXRvU3VnZ2VzdGlvbihzdWdnZXN0aW9uc1dyYXApKTtcblxuICAkKGRvY3VtZW50KS5vbihcImtleWRvd25cIiwgKGV2OiBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgIWV2LmN0cmxLZXkgJiZcbiAgICAgICFldi5hbHRLZXkgJiZcbiAgICAgICFldi5tZXRhS2V5ICYmXG4gICAgICBldi5rZXkgIT09IFwiRW50ZXJcIiAmJlxuICAgICAgZXYua2V5ICE9PSBcIkVzY2FwZVwiXG4gICAgKSB7XG4gICAgICBzZWFyY2hCYXIuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoXCIpO1xuICAgICAgc2VhcmNoQmFyLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHNlYXJjaEJhclswXS5mb2N1cygpO1xuICAgICAgaWYgKGV2LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgc2VhcmNoQmFyLnZhbChcIlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IEF1dG9TdWdnZXN0aW9uIH0gZnJvbSBcIi4vYXV0b1N1Z2dlc3Rpb25cIjtcblxuLy8g5bCGIGtleXdvcmQg5YiG5Li6IGBxdW90ZVByZWZpeD9gIOWSjCBgb3RoZXJzYCDkuKTpg6jliIZcbmV4cG9ydCBmdW5jdGlvbiBTcGxpdEtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gIGxldCBzcGxpdGVkS3cgPSBrZXl3b3JkLnNwbGl0KFwiIFwiKTtcbiAgbGV0IGZpcnN0V29yZCA9IHNwbGl0ZWRLd1swXS50b0xvd2VyQ2FzZSgpOyAvLyDlv73nlaXlpKflsI/lhplcbiAgLy8g5LulIGAnYCDlvIDlpLRcbiAgaWYgKGZpcnN0V29yZFswXSAhPT0gXCInXCIpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IG51bGwsIG90aGVyczoga2V5d29yZCB9O1xuICB9IGVsc2Uge1xuICAgIHNwbGl0ZWRLdy5zaGlmdCgpO1xuICAgIGxldCBlbHNlV29yZHMgPSBzcGxpdGVkS3cuam9pbihcIiBcIik7XG4gICAgLy8g5bCG5byA5aS055qEIGAnYCDliKDpmaRcbiAgICByZXR1cm4geyBwcmVmaXg6IGZpcnN0V29yZC5zdWJzdHIoMSksIG90aGVyczogZWxzZVdvcmRzIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1b3RlU2VhcmNoIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBzb3VyY2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiYmluZ1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImJcIiwgXCJiaW5nXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmJpbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJhaWR1XCIsXG4gICAgICBwcmVmaXhlczogW1wiYmRcIiwgXCJiYWlkdVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5iYWlkdS5jb20vcz9pZT11dGYtOCZ3ZD0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5iYWlkdSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ29vZ2xlXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ1wiLCBcImdnXCIsIFwiZ29vZ2xlXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JXNcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMuZ29vZ2xlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsdW9ndVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImxnXCIsIFwibHVvZ3VcIl0sXG4gICAgICB1cmw6XG4gICAgICAgIFwiaHR0cHM6Ly93d3cubHVvZ3UuY29tLmNuL3Byb2JsZW0vbGlzdD9jb250ZW50PXRydWUmcGFnZT0xJmtleXdvcmQ9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwib2Vpc1wiLFxuICAgICAgcHJlZml4ZXM6IFtcIm9laXNcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9vZWlzLm9yZy9zZWFyY2g/cT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJnb29nbGUgdHJhbnNsYXRlXCIsXG4gICAgICBwcmVmaXhlczogW1widHJcIiwgXCJndHJcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNuLz9zb3VyY2U9b3NkZCNhdXRvfGF1dG98JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidHJhbnNsYXRlIGVuIHRvIHpoLUNOXCIsXG4gICAgICBwcmVmaXhlczogW1wiZW4yemhcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNuLz9zb3VyY2U9b3NkZCNlbnx6aC1DTnwlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0cmFuc2xhdGUgemgtQ04gdG8gZW5cIixcbiAgICAgIHByZWZpeGVzOiBbXCJ6aDJlblwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3RyYW5zbGF0ZS5nb29nbGUuY24vP3NvdXJjZT1vc2RkI3poLUNOfGVufCVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJhaWR1IHRyYW5zbGF0ZVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImJ0clwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2ZhbnlpLmJhaWR1LmNvbSNlbi96aC8lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkdWNrZHVja2dvXCIsXG4gICAgICBwcmVmaXhlczogW1wiZGRnXCIsIFwiZHVja2R1Y2tnb1wiXSxcbiAgICAgIHVybDogXCJodHRwczovL2R1Y2tkdWNrZ28uY29tLz9xPSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmdvb2dsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibWlqaSBzZWFyY2hcIixcbiAgICAgIHByZWZpeGVzOiBbXCJtalwiLCBcIm1qc291XCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vbWlqaXNvdS5jb20vP3E9JXNcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMuYmFpZHUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImxvb2thb1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImxrXCIsIFwibG9va2FvXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vbG9va2FvLmNvbS9zZWFyY2g/cT0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5iYWlkdSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiamluZ2RvbmdcIixcbiAgICAgIHByZWZpeGVzOiBbXCJqZFwiLCBcImppbmdkb25nXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vc2VhcmNoLmpkLmNvbS9TZWFyY2g/a2V5d29yZD0lcyZlbmM9dXRmLThcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMudGFvYmFvLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ3aWtpcGVkaWFcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ3aWtpXCIsIFwid2lraXBlZGlhXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlNlYXJjaD9zZWFyY2g9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwid2lraXBlZGlhIChjaGluZXNlKVwiLFxuICAgICAgcHJlZml4ZXM6IFtcIndpa2l6aFwiLCBcIndpa2lwZWRpYXpoXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpL1NwZWNpYWw6U2VhcmNoP3NlYXJjaD0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ5YW5kZXhcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ5YVwiLCBcInlhbmRleFwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3lhbmRleC5jb20vc2VhcmNoLz90ZXh0PSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmJpbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm9pd2tpXCIsXG4gICAgICBwcmVmaXhlczogW1wib2l3aWtpXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vY24uYmluZy5jb20vc2VhcmNoP3E9c2l0ZTpvaS13aWtpLm9yZyslc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ6aGlodVwiLFxuICAgICAgcHJlZml4ZXM6IFtcInpoXCIsIFwiemhpaHVcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3NlYXJjaD90eXBlPWNvbnRlbnQmcT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJydW5vb2JcIixcbiAgICAgIHByZWZpeGVzOiBbXCJydW5vb2JcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cucnVub29iLmNvbS8/cz0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJncmVhc3lmb3JrXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ2ZvcmtcIiwgXCJncmVhc3lmb3JrXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vZ3JlYXN5Zm9yay5vcmcvc2NyaXB0cy9zZWFyY2gvP3E9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ2l0aHViXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ2hcIiwgXCJnaXRodWJcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdpdGVlXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ2l0ZWVcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zZWFyY2guZ2l0ZWUuY29tLz90eXBlPXJlcG9zaXRvcnkmcT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJseW9pXCIsXG4gICAgICBwcmVmaXhlczogW1wibHlvaVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2x5b2kuY2MvcHJvYmxlbXMvc2VhcmNoP2tleXdvcmQ9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29kZWZvcmNlc1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImNmXCIsIFwiY29kZWZvcmNlc1wiXSxcbiAgICAgIHVybDogXCJodHRwOi8vY29kZWZvcmNlcy5jb20vc2VhcmNoP2J5PSZxdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb2RlZm9yY2VzLm1sXCIsXG4gICAgICBwcmVmaXhlczogW1wiY2ZtbFwiLCBcImNvZGVmb3JjZXNtbFwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2NvZGVmb3JjZXMubWwvc2VhcmNoP2J5PSZxdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb2RlZm9yYy5lc1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImNmZXNcIiwgXCJjb2RlZm9yY2VzZXNcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlZm9yYy5lcy9zZWFyY2g/Ynk9JnF1ZXJ5PSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1hY3drXCIsXG4gICAgICBwcmVmaXhlczogW1wibWFjd2tcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9tYWN3ay5jb20vc29mdC9hbGwvcy0lcy9wMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXG4gICAgICBwcmVmaXhlczogW1widHdpdFwiLCBcInR3ZWV0XCIsIFwidHdpdHRlclwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdhb2RlIG1hcFwiLFxuICAgICAgcHJlZml4ZXM6IFtcImdkbWFwXCIsIFwiZ2FvZGVtYXBcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9kaXR1LmFtYXAuY29tL3NlYXJjaD9xdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ3b2xmcmFtYWxwaGFcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ3YVwiLCBcIndvbGZyYW1cIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJiaWxpYmlsaVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImJpbGlcIiwgXCJiaWxpYmlsaVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3NlYXJjaC5iaWxpYmlsaS5jb20vYWxsP2tleXdvcmQ9JXNcIixcbiAgICB9LFxuICBdO1xuXG4gIHByaXZhdGUgc2VhcmNoQmFyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICBwcml2YXRlIHN1Z2dlc3Rpb246IEF1dG9TdWdnZXN0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBzZWFyY2hCYXI6IEpRdWVyeTxIVE1MRWxlbWVudD4sXG4gICAgc3VnZ2VzdGlvbjogQXV0b1N1Z2dlc3Rpb24sXG4gICkge1xuICAgIHRoaXMuc2VhcmNoQmFyID0gc2VhcmNoQmFyO1xuICAgIHRoaXMuc3VnZ2VzdGlvbiA9IHN1Z2dlc3Rpb247XG4gICAgc2VhcmNoQmFyLm9uKFwia2V5ZG93blwiLCAoZXYpID0+IHtcbiAgICAgIHN3aXRjaCAoZXYua2V5KSB7XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIC8vIFNoaWZ0ICsgRW50ZXIg5Zyo5paw5qCH562+6aG15omT5byA5pCc57Si57uT5p6cXG4gICAgICAgICAgdGhpcy5TZWFyY2goZXYuc2hpZnRLZXkpO1xuICAgICAgICAgIGlmICghZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2hpbmcuLi5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlYXJjaEJhci52YWwoXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgdGhpcy5zdWdnZXN0aW9uLlNlbGVjdFVwKCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5TZWxlY3REb3duKCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hCYXIub24oXCJrZXl1cFwiLCAoZXYpID0+IHtcbiAgICAgIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgc2VhcmNoQmFyWzBdLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hCYXIub24oXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoQmFyLnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5HZXQodGhpcy5zZWFyY2hCYXIudmFsKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5CbHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgU2VhcmNoKG5ld3RhYiA9IGZhbHNlKSB7XG4gICAgLy8g5omT5byA5pCc57Si57uT5p6cXG4gICAgbGV0IG9wZW5SZXN1bHQgPSAodXJsOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZykgPT5cbiAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwucmVwbGFjZShcbiAgICAgICAgICBcIiVzXCIsXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3VnZ2VzdGlvbi5HZXRPYmpPclNlbGVjdGVkKGtleXdvcmQpKSxcbiAgICAgICAgKSxcbiAgICAgICAgbmV3dGFiID8gXCJfYmxhbmtcIiA6IFwiX3NlbGZcIixcbiAgICAgICk7XG4gICAgbGV0IHMgPSBTcGxpdEtleXdvcmQodGhpcy5zZWFyY2hCYXIudmFsKCkudG9TdHJpbmcoKSk7XG4gICAgY29uc29sZS5sb2cocyk7XG4gICAgLy8g6YGN5Y6G5q+P5Liq5pCc57Si5byV5pOOXG4gICAgLy8g5aaC5p6c5YmN57yA5Yy56YWNLCDlsLHkvb/nlKjlroNcbiAgICAocy5wcmVmaXggIT09IG51bGwgJiZcbiAgICAgIFF1b3RlU2VhcmNoLnNvdXJjZXMuc29tZSgoc291cmNlKSA9PlxuICAgICAgICBzb3VyY2UucHJlZml4ZXMuc29tZShcbiAgICAgICAgICAocHIpID0+IHByID09PSBzLnByZWZpeCAmJiBvcGVuUmVzdWx0KHNvdXJjZS51cmwsIHMub3RoZXJzKSxcbiAgICAgICAgKSxcbiAgICAgICkpIHx8XG4gICAgICBvcGVuUmVzdWx0KFF1b3RlU2VhcmNoLnNvdXJjZXNbMF0udXJsLCBzLm90aGVycyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRhbmdZYW4gfSBmcm9tIFwiLi90YW5neWFuXCI7XG53aW5kb3cuVGFuZ1lhbiA9IFRhbmdZYW47XG4iLCJleHBvcnQgY2xhc3MgVGFuZ1lhbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc291cmNlID0ge1xuICAgIHVybDogXCJodHRwczovL2FwaS5seW9pLmNjL3Rhbmdva290bz90eXBlPWpzb25wXCIsXG4gICAganNvbnA6IFwiX2NhbGxiYWNrXCIsXG4gICAgY2FsbGJhY2s6IFRhbmdZYW4uV3JpdGUsXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBXcml0ZShvYmo6IHsgaGl0b2tvdG86IHN0cmluZzsgZnJvbTogc3RyaW5nIH0pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwidGFuZy15YW5cIixcbiAgICApLmlubmVySFRNTCA9IGAke29iai5oaXRva290b30mZW1zcDvigJTigJQke29iai5mcm9tfWA7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogVGFuZ1lhbi5zb3VyY2UudXJsLFxuICAgICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICAgIGpzb25wOiBUYW5nWWFuLnNvdXJjZS5qc29ucCxcbiAgICAgIHN1Y2Nlc3M6IFRhbmdZYW4uc291cmNlLmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9