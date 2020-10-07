export class TangYan {
  public static readonly source = {
    url: "https://api.lyoi.cc/tangokoto?type=jsonp",
    jsonp: "_callback",
    callback: TangYan.Write,
  };

  public static Write(obj: { hitokoto: string; from: string }) {
    document.getElementById(
      "tang-yan",
    ).innerHTML = `${obj.hitokoto}&emsp;——${obj.from}`;
  }

  public constructor() {
    $.ajax({
      url: TangYan.source.url,
      dataType: "jsonp",
      jsonp: TangYan.source.jsonp,
      success: TangYan.source.callback,
    });
  }
}
