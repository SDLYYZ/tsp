/* global QuoteSearch GetTangYan */

"use strict";

$(() => {
  let searchBar = $("#search");
  let timeText = $("#time");
  let suggestionsWrap = $("#suggestions");

  function UpdateTime() {
    timeText.html(new Date().format("hh:mm"));
  }

  UpdateTime();
  setInterval(UpdateTime, 1000);
  GetTangYan();
  QuoteSearch.Init(suggestionsWrap);

  $(document).on("keydown", (ev) => {
    if (
      document.activeElement == document.body &&
      !ev.ctrlKey &&
      ev.key != "Enter"
    ) {
      searchBar.attr("placeholder", "Search");
      searchBar.removeAttr("disabled");
      searchBar[0].focus();
      if (ev.key == " ") {
        searchBar.val("");
        return false;
      }
    }
  });

  searchBar.on("keydown", (ev) => {
    switch (ev.key) {
    case "Enter":
      QuoteSearch.Search(QuoteSearch.selectedSuggestion >= 0 ?
        QuoteSearch.wrap.children().eq( QuoteSearch.selectedSuggestion).text():
        searchBar.val(), ev.shiftKey);
      if (!ev.shiftKey) {
        searchBar.attr("disabled", "disabled");
        searchBar.attr("placeholder", "Searching...");
      }
      searchBar.val("");
      break;
    case "ArrowUp":
      QuoteSearch.SelectUp();
      ev.preventDefault();
      break;
    case "ArrowDown":
      QuoteSearch.SelectDown();
      ev.preventDefault();
      break;
    }
  });
  searchBar.on("keyup", (ev) => {
    if(ev.key ==  "Escape") {
      searchBar[0].blur();
    }
  });
  searchBar.on("input", () => {
    if (searchBar.val() != "") {
      QuoteSearch.GetSuggestion(searchBar.val());
      QuoteSearch.Blur();
    }
  });
});
