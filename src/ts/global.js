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
