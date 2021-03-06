import "../css/global.css";
import "../css/index.css";
import "./global";
import { TangYan } from "./tangyan";
import { QuoteSearch } from "./quoteSearch";
import { AutoSuggestion } from "./autoSuggestion";

$(() => {
  const searchBar = $("#search");
  const timeText = $("#time");
  const suggestionsWrap = $("#suggestions");

  function UpdateTime() {
    timeText.html(new Date().format("hh:mm"));
  }

  UpdateTime();
  setInterval(UpdateTime, 1000);
  const _ = new TangYan();
  const __ = new QuoteSearch(searchBar, new AutoSuggestion(suggestionsWrap));

  $(document).on("keydown", (ev: JQuery.KeyDownEvent) => {
    if (
      document.activeElement === document.body &&
      !ev.ctrlKey &&
      !ev.altKey &&
      !ev.metaKey &&
      ev.key !== "Enter" &&
      ev.key !== "Escape"
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
