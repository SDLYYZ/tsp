export let TangYan = (window.TangYan = {
  url: "https://api.lyoi.cc/tangokoto?type=jsonp&_callback=TangYan.Write",

  Get: () => {
    let obj = document.createElement("script");
    obj.src = TangYan.url;
    document.body.appendChild(obj);
    obj.remove();
  },

  // FIXME: 从外部调用 write
  Write: (obj) => {
    document.getElementById(
      "tang-yan",
    ).innerText = `${obj.hitokoto} ——${obj.from}`;
  },
});
