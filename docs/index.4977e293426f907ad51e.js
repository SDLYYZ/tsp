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
            ev.key !== "Enter") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hdXRvU3VnZ2VzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcXVvdGVTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Rhbmd5YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Rhbmd5YW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBMEQ7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RSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUc7WUFDdkIsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSztZQUMzQixPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFiYSxhQUFLLEdBQW5CLFVBQW9CLEdBQXVDO1FBQ3pELFFBQVEsQ0FBQyxjQUFjLENBQ3JCLFVBQVUsQ0FDWCxDQUFDLFNBQVMsR0FBTSxHQUFHLENBQUMsUUFBUSwwQkFBVyxHQUFHLENBQUMsSUFBTSxDQUFDO0lBQ3JELENBQUM7SUFWc0IsY0FBTSxHQUFHO1FBQzlCLEdBQUcsRUFBRSwwQ0FBMEM7UUFDL0MsS0FBSyxFQUFFLFdBQVc7UUFDbEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLO0tBQ3hCLENBQUM7SUFnQkosY0FBQztDQUFBO0FBckJtQiIsImZpbGUiOiJpbmRleC40OTc3ZTI5MzQyNmY5MDdhZDUxZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2luZGV4LnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgUXVvdGVTZWFyY2gsIFNwbGl0S2V5d29yZCB9IGZyb20gXCIuL3F1b3RlU2VhcmNoXCI7XG5leHBvcnQgY2xhc3MgQXV0b1N1Z2dlc3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIHNvdXJjZXMgPSB7XG4gICAgYmluZzoge1xuICAgICAgdXJsOlxuICAgICAgICBcImh0dHBzOi8vYXBpLmJpbmcuY29tL3Fzb25ocy5hc3B4P1wiICtcbiAgICAgICAgXCJ0eXBlPWNiJnE9JXMmY291bnQ9MTAmc2FmZXNlYXJjaD1TdHJpY3RcIixcbiAgICAgIGpzb25wOiBcImNiXCIsXG4gICAgICBjYWxsYmFjazogQXV0b1N1Z2dlc3Rpb24uV3JpdGVCaW5nLFxuICAgIH0sXG4gICAgYmFpZHU6IHtcbiAgICAgIHVybDogXCJodHRwczovL3N1Z2dlc3Rpb24uYmFpZHUuY29tL3N1P3dkPSVzXCIsXG4gICAgICBqc29ucDogXCJjYlwiLFxuICAgICAgY2FsbGJhY2s6IEF1dG9TdWdnZXN0aW9uLldyaXRlQmFpZHUsXG4gICAgfSxcbiAgICBnb29nbGU6IHtcbiAgICAgIHVybDpcbiAgICAgICAgXCJodHRwczovL3N1Z2dlc3RxdWVyaWVzLmdvb2dsZS5jb20vY29tcGxldGUvc2VhcmNoP2NsaWVudD15b3V0dWJlJnE9JXNcIixcbiAgICAgIGpzb25wOiBcImpzb25wXCIsXG4gICAgICBjYWxsYmFjazogQXV0b1N1Z2dlc3Rpb24uV3JpdGVHb29nbGUsXG4gICAgfSxcbiAgICB0YW9iYW86IHtcbiAgICAgIHVybDogXCJodHRwczovL3N1Z2dlc3QudGFvYmFvLmNvbS9zdWc/Y29kZT11dGYtOCZxPSVzXCIsXG4gICAgICBqc29ucDogXCJjYWxsYmFja1wiLFxuICAgICAgY2FsbGJhY2s6IEF1dG9TdWdnZXN0aW9uLldyaXRlVGFvYmFvLFxuICAgIH0sXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBXcml0ZUJpbmcoXG4gICAgd3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50PixcbiAgICBkYXRhOiB7XG4gICAgICBBUzogeyBSZXN1bHRzOiB7IFN1Z2dlc3RzOiB7IFR4dDogYW55IH1bXSB9W10gfTtcbiAgICB9LFxuICApIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHNsaWNlZERhdGEgPSBbXTtcbiAgICB0cnkge1xuICAgICAgc2xpY2VkRGF0YSA9IEF1dG9TdWdnZXN0aW9uLlNsaWNlKGRhdGEuQVMuUmVzdWx0c1swXS5TdWdnZXN0cyk7XG4gICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICB3cmFwLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNsaWNlZERhdGEuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICB0ZXh0ICs9IGA8ZGl2PiR7cmVzLlR4dH08L2Rpdj5gO1xuICAgIH0pO1xuICAgIHdyYXAuaHRtbCh0ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgV3JpdGVCYWlkdSh3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBkYXRhOiB7IHM6IGFueVtdIH0pIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IHNsaWNlZERhdGEgPSBbXTtcbiAgICB0cnkge1xuICAgICAgc2xpY2VkRGF0YSA9IEF1dG9TdWdnZXN0aW9uLlNsaWNlKGRhdGEucyk7XG4gICAgfSBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICB3cmFwLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNsaWNlZERhdGEuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICB0ZXh0ICs9IGA8ZGl2PiR7cmVzfTwvZGl2PmA7XG4gICAgfSk7XG4gICAgd3JhcC5odG1sKHRleHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBXcml0ZUdvb2dsZSh3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBkYXRhOiBhbnlbXVtdKSB7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBzbGljZWREYXRhID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHNsaWNlZERhdGEgPSBBdXRvU3VnZ2VzdGlvbi5TbGljZShkYXRhWzFdKTtcbiAgICB9IGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgIHdyYXAuaHRtbChcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2xpY2VkRGF0YS5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIHRleHQgKz0gYDxkaXY+JHtyZXNbMF19PC9kaXY+YDtcbiAgICB9KTtcbiAgICB3cmFwLmh0bWwodGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFdyaXRlVGFvYmFvKFxuICAgIHdyYXA6IEpRdWVyeTxIVE1MRWxlbWVudD4sXG4gICAgZGF0YTogeyByZXN1bHQ6IGFueVtdIH0sXG4gICkge1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgc2xpY2VkRGF0YSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBzbGljZWREYXRhID0gQXV0b1N1Z2dlc3Rpb24uU2xpY2UoZGF0YS5yZXN1bHQpO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgd3JhcC5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzbGljZWREYXRhLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgdGV4dCArPSBgPGRpdj4ke3Jlc1swXX08L2Rpdj5gO1xuICAgIH0pO1xuICAgIHdyYXAuaHRtbCh0ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIFNsaWNlKGl0ZW1zOiBhbnlbXSkge1xuICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1zID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGxldCB3aW5IZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgaWYgKHdpbkhlaWdodCA8PSA3MDApIHtcbiAgICAgIHJldHVybiBpdGVtcy5zbGljZSgwLCA2KTtcbiAgICB9IGVsc2UgaWYgKHdpbkhlaWdodCA8PSA4MDApIHtcbiAgICAgIHJldHVybiBpdGVtcy5zbGljZSgwLCA4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW1zLnNsaWNlKDAsIDEwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdyYXA6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cbiAgLy8g5b2T5YmN6YCJ5Lit55qEIHN1Z2dlc3Rpb24g55qEIGluZGV4LCAtMSDooajnpLrmnKrpgInkuK1cbiAgcHJpdmF0ZSBzZWxlY3RlZCA9IC0xO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3cmFwOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy53cmFwID0gd3JhcDtcbiAgfVxuXG4gIHB1YmxpYyBCbHVyKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAtMTtcbiAgICB0aGlzLlVwZGF0ZUNzcygpO1xuICB9XG5cbiAgcHVibGljIFNlbGVjdFVwKCkge1xuICAgIC0tdGhpcy5zZWxlY3RlZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA8IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5VcGRhdGVDc3MoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3REb3duKCkge1xuICAgICsrdGhpcy5zZWxlY3RlZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA+PSB0aGlzLndyYXAuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLndyYXAuY2hpbGRyZW4oKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB0aGlzLlVwZGF0ZUNzcygpO1xuICB9XG5cbiAgLy8g6L+U5ZueIGBvYmpgIOaIluiAheW9k+WJjemAieaLqeeahOW7uuiuruWAmemAiemhueaWh+Wtl1xuICBwdWJsaWMgR2V0T2JqT3JTZWxlY3RlZChvYmo6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkID49IDBcbiAgICAgID8gdGhpcy53cmFwLmNoaWxkcmVuKCkuZXEodGhpcy5zZWxlY3RlZCkudGV4dCgpXG4gICAgICA6IG9iajtcbiAgfVxuXG4gIHB1YmxpYyBHZXQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgbGV0IHNlbmRBamF4ID0gKFxuICAgICAgdG86IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICAgIGpzb25wOiBzdHJpbmc7XG4gICAgICAgIGNhbGxiYWNrOiAod3JhcDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgZGF0YTogYW55KSA9PiB2b2lkO1xuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IHN0cmluZyxcbiAgICApID0+IHtcbiAgICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICB1cmw6IHRvLnVybC5yZXBsYWNlKFwiJXNcIiwgZW5jb2RlVVJJQ29tcG9uZW50KGtleXdvcmQpKSxcbiAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICAgICAganNvbnA6IHRvLmpzb25wLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRvLmNhbGxiYWNrKHRoaXMud3JhcCwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBzID0gU3BsaXRLZXl3b3JkKGtleXdvcmQpO1xuICAgIGlmIChzLm90aGVycyA9PT0gXCJcIiB8fCBzLm90aGVycyA9PT0gbnVsbCB8fCBzLm90aGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndyYXAuaHRtbChcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g6YGN5Y6G5q+P5Liq5pCc57Si5byV5pOOXG4gICAgLy8g5aaC5p6c5YmN57yA5Yy56YWNLCDlsLHkvb/nlKjlroNcbiAgICAocy5wcmVmaXggIT09IG51bGwgJiZcbiAgICAgIFF1b3RlU2VhcmNoLnNvdXJjZXMuc29tZSgoc291cmNlKSA9PlxuICAgICAgICBzb3VyY2UucHJlZml4ZXMuc29tZShcbiAgICAgICAgICAocHJlZml4KSA9PlxuICAgICAgICAgICAgcHJlZml4ID09PSBzLnByZWZpeCAmJlxuICAgICAgICAgICAgc291cmNlLnN1Z2dlc3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VuZEFqYXgoc291cmNlLnN1Z2dlc3QsIHMub3RoZXJzKSxcbiAgICAgICAgKSxcbiAgICAgICkpIHx8XG4gICAgICBzZW5kQWpheChRdW90ZVNlYXJjaC5zb3VyY2VzWzBdLnN1Z2dlc3QsIHMub3RoZXJzKTtcbiAgfVxuXG4gIHByaXZhdGUgVXBkYXRlQ3NzKCkge1xuICAgIHRoaXMud3JhcC5jaGlsZHJlbigpLmNzcyhcImJhY2tncm91bmRcIiwgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXCIpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkID49IDApIHtcbiAgICAgIHRoaXMud3JhcFxuICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAuZXEodGhpcy5zZWxlY3RlZClcbiAgICAgICAgLmNzcyhcImJhY2tncm91bmRcIiwgXCJyZ2JhKDAsIDAsIDAsIDAuMilcIik7XG4gICAgfVxuICB9XG59XG4iLCIvKiBlc2xpbnQgbm8tZXh0ZW5kLW5hdGl2ZTogW1wiZXJyb3JcIiwgeyBcImV4Y2VwdGlvbnNcIjogW1wiRGF0ZVwiXSB9XSAqL1xuXG5EYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gIGNvbnN0IGRhdGUgPSB7XG4gICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLFxuICAgIFwiZCtcIjogdGhpcy5nZXREYXRlKCksXG4gICAgXCJoK1wiOiB0aGlzLmdldEhvdXJzKCksXG4gICAgXCJtK1wiOiB0aGlzLmdldE1pbnV0ZXMoKSxcbiAgICBcInMrXCI6IHRoaXMuZ2V0U2Vjb25kcygpLFxuICAgIFwicStcIjogTWF0aC5mbG9vcigodGhpcy5nZXRNb250aCgpICsgMykgLyAzKSxcbiAgICBcIlMrXCI6IHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCksXG4gIH07XG4gIGxldCByZXMgPSBmb3JtYXQ7XG4gIGlmICgvKHkrKS9pLnRlc3QoZm9ybWF0KSkge1xuICAgIHJlcyA9IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgUmVnRXhwLiQxLFxuICAgICAgU3RyaW5nKHRoaXMuZ2V0RnVsbFllYXIoKSkuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSxcbiAgICApO1xuICB9XG4gIGZvciAobGV0IGsgaW4gZGF0ZSkge1xuICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KHJlcykpIHtcbiAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKFxuICAgICAgICBSZWdFeHAuJDEsXG4gICAgICAgIFJlZ0V4cC4kMS5sZW5ndGggPT09IDFcbiAgICAgICAgICA/IGRhdGVba11cbiAgICAgICAgICA6IChcIjAwXCIgKyBkYXRlW2tdKS5zdWJzdHIoU3RyaW5nKGRhdGVba10pLmxlbmd0aCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsImltcG9ydCBcIi4uL2Nzcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2dsb2JhbFwiO1xuaW1wb3J0IHsgVGFuZ1lhbiB9IGZyb20gXCIuL3Rhbmd5YW5cIjtcbmltcG9ydCBcIi4vdGFuZ3lhbi5qc1wiO1xuaW1wb3J0IHsgUXVvdGVTZWFyY2ggfSBmcm9tIFwiLi9xdW90ZVNlYXJjaFwiO1xuaW1wb3J0IHsgQXV0b1N1Z2dlc3Rpb24gfSBmcm9tIFwiLi9hdXRvU3VnZ2VzdGlvblwiO1xuXG4kKCgpID0+IHtcbiAgbGV0IHNlYXJjaEJhciA9ICQoXCIjc2VhcmNoXCIpO1xuICBsZXQgdGltZVRleHQgPSAkKFwiI3RpbWVcIik7XG4gIGxldCBzdWdnZXN0aW9uc1dyYXAgPSAkKFwiI3N1Z2dlc3Rpb25zXCIpO1xuXG4gIGZ1bmN0aW9uIFVwZGF0ZVRpbWUoKSB7XG4gICAgdGltZVRleHQuaHRtbChuZXcgRGF0ZSgpLmZvcm1hdChcImhoOm1tXCIpKTtcbiAgfVxuXG4gIFVwZGF0ZVRpbWUoKTtcbiAgc2V0SW50ZXJ2YWwoVXBkYXRlVGltZSwgMTAwMCk7XG4gIGxldCBfID0gbmV3IFRhbmdZYW4oKTtcbiAgbGV0IF9fID0gbmV3IFF1b3RlU2VhcmNoKHNlYXJjaEJhciwgbmV3IEF1dG9TdWdnZXN0aW9uKHN1Z2dlc3Rpb25zV3JhcCkpO1xuXG4gICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCAoZXY6IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAhZXYuY3RybEtleSAmJlxuICAgICAgIWV2LmFsdEtleSAmJlxuICAgICAgIWV2Lm1ldGFLZXkgJiZcbiAgICAgIGV2LmtleSAhPT0gXCJFbnRlclwiXG4gICAgKSB7XG4gICAgICBzZWFyY2hCYXIuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoXCIpO1xuICAgICAgc2VhcmNoQmFyLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHNlYXJjaEJhclswXS5mb2N1cygpO1xuICAgICAgaWYgKGV2LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgc2VhcmNoQmFyLnZhbChcIlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IEF1dG9TdWdnZXN0aW9uIH0gZnJvbSBcIi4vYXV0b1N1Z2dlc3Rpb25cIjtcblxuLy8g5bCGIGtleXdvcmQg5YiG5Li6IGBxdW90ZVByZWZpeD9gIOWSjCBgb3RoZXJzYCDkuKTpg6jliIZcbmV4cG9ydCBmdW5jdGlvbiBTcGxpdEtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gIGxldCBzcGxpdGVkS3cgPSBrZXl3b3JkLnNwbGl0KFwiIFwiKTtcbiAgbGV0IGZpcnN0V29yZCA9IHNwbGl0ZWRLd1swXS50b0xvd2VyQ2FzZSgpOyAvLyDlv73nlaXlpKflsI/lhplcbiAgLy8g5LulIGAnYCDlvIDlpLRcbiAgaWYgKGZpcnN0V29yZFswXSAhPT0gXCInXCIpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IG51bGwsIG90aGVyczoga2V5d29yZCB9O1xuICB9IGVsc2Uge1xuICAgIHNwbGl0ZWRLdy5zaGlmdCgpO1xuICAgIGxldCBlbHNlV29yZHMgPSBzcGxpdGVkS3cuam9pbihcIiBcIik7XG4gICAgLy8g5bCG5byA5aS055qEIGAnYCDliKDpmaRcbiAgICByZXR1cm4geyBwcmVmaXg6IGZpcnN0V29yZC5zdWJzdHIoMSksIG90aGVyczogZWxzZVdvcmRzIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1b3RlU2VhcmNoIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBzb3VyY2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiYmluZ1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImJcIiwgXCJiaW5nXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmJpbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJhaWR1XCIsXG4gICAgICBwcmVmaXhlczogW1wiYmRcIiwgXCJiYWlkdVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5iYWlkdS5jb20vcz9pZT11dGYtOCZ3ZD0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5iYWlkdSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ29vZ2xlXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ1wiLCBcImdnXCIsIFwiZ29vZ2xlXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JXNcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMuZ29vZ2xlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsdW9ndVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImxnXCIsIFwibHVvZ3VcIl0sXG4gICAgICB1cmw6XG4gICAgICAgIFwiaHR0cHM6Ly93d3cubHVvZ3UuY29tLmNuL3Byb2JsZW0vbGlzdD9jb250ZW50PXRydWUmcGFnZT0xJmtleXdvcmQ9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwib2Vpc1wiLFxuICAgICAgcHJlZml4ZXM6IFtcIm9laXNcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9vZWlzLm9yZy9zZWFyY2g/cT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJnb29nbGUgdHJhbnNsYXRlXCIsXG4gICAgICBwcmVmaXhlczogW1widHJcIiwgXCJndHJcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNuLz9zb3VyY2U9b3NkZCNhdXRvfGF1dG98JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidHJhbnNsYXRlIGVuIHRvIHpoLUNOXCIsXG4gICAgICBwcmVmaXhlczogW1wiZW4yemhcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNuLz9zb3VyY2U9b3NkZCNlbnx6aC1DTnwlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0cmFuc2xhdGUgemgtQ04gdG8gZW5cIixcbiAgICAgIHByZWZpeGVzOiBbXCJ6aDJlblwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3RyYW5zbGF0ZS5nb29nbGUuY24vP3NvdXJjZT1vc2RkI3poLUNOfGVufCVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJhaWR1IHRyYW5zbGF0ZVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImJ0clwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2ZhbnlpLmJhaWR1LmNvbSNlbi96aC8lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkdWNrZHVja2dvXCIsXG4gICAgICBwcmVmaXhlczogW1wiZGRnXCIsIFwiZHVja2R1Y2tnb1wiXSxcbiAgICAgIHVybDogXCJodHRwczovL2R1Y2tkdWNrZ28uY29tLz9xPSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmdvb2dsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibWlqaSBzZWFyY2hcIixcbiAgICAgIHByZWZpeGVzOiBbXCJtalwiLCBcIm1qc291XCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vbWlqaXNvdS5jb20vP3E9JXNcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMuYmFpZHUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImxvb2thb1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImxrXCIsIFwibG9va2FvXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vbG9va2FvLmNvbS9zZWFyY2g/cT0lc1wiLFxuICAgICAgc3VnZ2VzdDogQXV0b1N1Z2dlc3Rpb24uc291cmNlcy5iYWlkdSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiamluZ2RvbmdcIixcbiAgICAgIHByZWZpeGVzOiBbXCJqZFwiLCBcImppbmdkb25nXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vc2VhcmNoLmpkLmNvbS9TZWFyY2g/a2V5d29yZD0lcyZlbmM9dXRmLThcIixcbiAgICAgIHN1Z2dlc3Q6IEF1dG9TdWdnZXN0aW9uLnNvdXJjZXMudGFvYmFvLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ3aWtpcGVkaWFcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ3aWtpXCIsIFwid2lraXBlZGlhXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlNlYXJjaD9zZWFyY2g9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwid2lraXBlZGlhIChjaGluZXNlKVwiLFxuICAgICAgcHJlZml4ZXM6IFtcIndpa2l6aFwiLCBcIndpa2lwZWRpYXpoXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpL1NwZWNpYWw6U2VhcmNoP3NlYXJjaD0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ5YW5kZXhcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ5YVwiLCBcInlhbmRleFwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3lhbmRleC5jb20vc2VhcmNoLz90ZXh0PSVzXCIsXG4gICAgICBzdWdnZXN0OiBBdXRvU3VnZ2VzdGlvbi5zb3VyY2VzLmJpbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm9pd2tpXCIsXG4gICAgICBwcmVmaXhlczogW1wib2l3aWtpXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vY24uYmluZy5jb20vc2VhcmNoP3E9c2l0ZTpvaS13aWtpLm9yZyslc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ6aGlodVwiLFxuICAgICAgcHJlZml4ZXM6IFtcInpoXCIsIFwiemhpaHVcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3NlYXJjaD90eXBlPWNvbnRlbnQmcT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJydW5vb2JcIixcbiAgICAgIHByZWZpeGVzOiBbXCJydW5vb2JcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cucnVub29iLmNvbS8/cz0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJncmVhc3lmb3JrXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ2ZvcmtcIiwgXCJncmVhc3lmb3JrXCJdLFxuICAgICAgdXJsOiBcImh0dHBzOi8vZ3JlYXN5Zm9yay5vcmcvc2NyaXB0cy9zZWFyY2gvP3E9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ2l0aHViXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ2hcIiwgXCJnaXRodWJcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdpdGVlXCIsXG4gICAgICBwcmVmaXhlczogW1wiZ2l0ZWVcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zZWFyY2guZ2l0ZWUuY29tLz90eXBlPXJlcG9zaXRvcnkmcT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJseW9pXCIsXG4gICAgICBwcmVmaXhlczogW1wibHlvaVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2x5b2kuY2MvcHJvYmxlbXMvc2VhcmNoP2tleXdvcmQ9JXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29kZWZvcmNlc1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImNmXCIsIFwiY29kZWZvcmNlc1wiXSxcbiAgICAgIHVybDogXCJodHRwOi8vY29kZWZvcmNlcy5jb20vc2VhcmNoP2J5PSZxdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb2RlZm9yY2VzLm1sXCIsXG4gICAgICBwcmVmaXhlczogW1wiY2ZtbFwiLCBcImNvZGVmb3JjZXNtbFwiXSxcbiAgICAgIHVybDogXCJodHRwczovL2NvZGVmb3JjZXMubWwvc2VhcmNoP2J5PSZxdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb2RlZm9yYy5lc1wiLFxuICAgICAgcHJlZml4ZXM6IFtcImNmZXNcIiwgXCJjb2RlZm9yY2VzZXNcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlZm9yYy5lcy9zZWFyY2g/Ynk9JnF1ZXJ5PSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1hY3drXCIsXG4gICAgICBwcmVmaXhlczogW1wibWFjd2tcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9tYWN3ay5jb20vc29mdC9hbGwvcy0lcy9wMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXG4gICAgICBwcmVmaXhlczogW1widHdpdFwiLCBcInR3ZWV0XCIsIFwidHdpdHRlclwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL3NlYXJjaD9xPSVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdhb2RlIG1hcFwiLFxuICAgICAgcHJlZml4ZXM6IFtcImdkbWFwXCIsIFwiZ2FvZGVtYXBcIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9kaXR1LmFtYXAuY29tL3NlYXJjaD9xdWVyeT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ3b2xmcmFtYWxwaGFcIixcbiAgICAgIHByZWZpeGVzOiBbXCJ3YVwiLCBcIndvbGZyYW1cIl0sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT0lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJiaWxpYmlsaVwiLFxuICAgICAgcHJlZml4ZXM6IFtcImJpbGlcIiwgXCJiaWxpYmlsaVwiXSxcbiAgICAgIHVybDogXCJodHRwczovL3NlYXJjaC5iaWxpYmlsaS5jb20vYWxsP2tleXdvcmQ9JXNcIixcbiAgICB9LFxuICBdO1xuXG4gIHByaXZhdGUgc2VhcmNoQmFyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICBwcml2YXRlIHN1Z2dlc3Rpb246IEF1dG9TdWdnZXN0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBzZWFyY2hCYXI6IEpRdWVyeTxIVE1MRWxlbWVudD4sXG4gICAgc3VnZ2VzdGlvbjogQXV0b1N1Z2dlc3Rpb24sXG4gICkge1xuICAgIHRoaXMuc2VhcmNoQmFyID0gc2VhcmNoQmFyO1xuICAgIHRoaXMuc3VnZ2VzdGlvbiA9IHN1Z2dlc3Rpb247XG4gICAgc2VhcmNoQmFyLm9uKFwia2V5ZG93blwiLCAoZXYpID0+IHtcbiAgICAgIHN3aXRjaCAoZXYua2V5KSB7XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIC8vIFNoaWZ0ICsgRW50ZXIg5Zyo5paw5qCH562+6aG15omT5byA5pCc57Si57uT5p6cXG4gICAgICAgICAgdGhpcy5TZWFyY2goZXYuc2hpZnRLZXkpO1xuICAgICAgICAgIGlmICghZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2hpbmcuLi5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlYXJjaEJhci52YWwoXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgdGhpcy5zdWdnZXN0aW9uLlNlbGVjdFVwKCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5TZWxlY3REb3duKCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hCYXIub24oXCJrZXl1cFwiLCAoZXYpID0+IHtcbiAgICAgIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgc2VhcmNoQmFyWzBdLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hCYXIub24oXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoQmFyLnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5HZXQodGhpcy5zZWFyY2hCYXIudmFsKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5CbHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgU2VhcmNoKG5ld3RhYiA9IGZhbHNlKSB7XG4gICAgLy8g5omT5byA5pCc57Si57uT5p6cXG4gICAgbGV0IG9wZW5SZXN1bHQgPSAodXJsOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZykgPT5cbiAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwucmVwbGFjZShcbiAgICAgICAgICBcIiVzXCIsXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3VnZ2VzdGlvbi5HZXRPYmpPclNlbGVjdGVkKGtleXdvcmQpKSxcbiAgICAgICAgKSxcbiAgICAgICAgbmV3dGFiID8gXCJfYmxhbmtcIiA6IFwiX3NlbGZcIixcbiAgICAgICk7XG4gICAgbGV0IHMgPSBTcGxpdEtleXdvcmQodGhpcy5zZWFyY2hCYXIudmFsKCkudG9TdHJpbmcoKSk7XG4gICAgY29uc29sZS5sb2cocyk7XG4gICAgLy8g6YGN5Y6G5q+P5Liq5pCc57Si5byV5pOOXG4gICAgLy8g5aaC5p6c5YmN57yA5Yy56YWNLCDlsLHkvb/nlKjlroNcbiAgICAocy5wcmVmaXggIT09IG51bGwgJiZcbiAgICAgIFF1b3RlU2VhcmNoLnNvdXJjZXMuc29tZSgoc291cmNlKSA9PlxuICAgICAgICBzb3VyY2UucHJlZml4ZXMuc29tZShcbiAgICAgICAgICAocHIpID0+IHByID09PSBzLnByZWZpeCAmJiBvcGVuUmVzdWx0KHNvdXJjZS51cmwsIHMub3RoZXJzKSxcbiAgICAgICAgKSxcbiAgICAgICkpIHx8XG4gICAgICBvcGVuUmVzdWx0KFF1b3RlU2VhcmNoLnNvdXJjZXNbMF0udXJsLCBzLm90aGVycyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRhbmdZYW4gfSBmcm9tIFwiLi90YW5neWFuXCI7XG53aW5kb3cuVGFuZ1lhbiA9IFRhbmdZYW47XG4iLCJleHBvcnQgY2xhc3MgVGFuZ1lhbiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc291cmNlID0ge1xuICAgIHVybDogXCJodHRwczovL2FwaS5seW9pLmNjL3Rhbmdva290bz90eXBlPWpzb25wXCIsXG4gICAganNvbnA6IFwiX2NhbGxiYWNrXCIsXG4gICAgY2FsbGJhY2s6IFRhbmdZYW4uV3JpdGUsXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBXcml0ZShvYmo6IHsgaGl0b2tvdG86IHN0cmluZzsgZnJvbTogc3RyaW5nIH0pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwidGFuZy15YW5cIixcbiAgICApLmlubmVySFRNTCA9IGAke29iai5oaXRva290b30mZW1zcDvigJTigJQke29iai5mcm9tfWA7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogVGFuZ1lhbi5zb3VyY2UudXJsLFxuICAgICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICAgIGpzb25wOiBUYW5nWWFuLnNvdXJjZS5qc29ucCxcbiAgICAgIHN1Y2Nlc3M6IFRhbmdZYW4uc291cmNlLmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9