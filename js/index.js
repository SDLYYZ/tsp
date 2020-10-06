/* global QuoteSearch TangYan */

$(() => {
  let searchBar = $("#search");
  let timeText = $("#time");
  let suggestionsWrap = $("#suggestions");

  function UpdateTime() {
    timeText.html(new Date().format("hh:mm"));
  }

  UpdateTime();
  setInterval(UpdateTime, 1000);
  TangYan.Get();
  QuoteSearch.Init(searchBar, suggestionsWrap);

  $(document).on("keydown", (ev) => {
    if (
      document.activeElement === document.body &&
      !ev.ctrlKey &&
      !ev.altKey &&
      !ev.metaKey &&
      ev.key !== "Enter"
    ) {
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
