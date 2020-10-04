/* exported GetTangYan WriteTangYan */

"use strict";

const tangYanUrl =
  "https://api.lyoi.cc/tangokoto?type=jsonp&_callback=WriteTangYan";

function GetTangYan() {
  let obj = document.createElement("script");
  obj.src = tangYanUrl;
  document.body.appendChild(obj);
}

function WriteTangYan(obj) {
  document.getElementById(
    "tang-yan"
  ).innerText = `${obj.hitokoto} ——${obj.from}`;
}
