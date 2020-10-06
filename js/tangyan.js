let TangYan = window.TangYan || {
  url: "https://api.lyoi.cc/tangokoto?type=jsonp&_callback=TangYan.Write",

  Get: function () {
    let obj = document.createElement("script");
    obj.src = TangYan.url;
    document.body.appendChild(obj);
    obj.remove();
  },

  Write: function (obj) {
    document.getElementById(
      "tang-yan",
    ).innerText = `${obj.hitokoto} ——${obj.from}`;
  },
};
