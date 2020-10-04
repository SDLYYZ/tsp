/* global QuoteSearch */

"use strict";

let searchBar;
let timeText;

function UpdateTime() {
  timeText.innerHTML = new Date().format("hh:mm");
}

window.onload = () => {
  searchBar = document.getElementById("search");
  timeText = document.getElementById("time");
  UpdateTime();
  setInterval(UpdateTime, 1000);
  document.onkeypress = (ev) => {
    if (
      document.activeElement == document.body &&
      !ev.ctrlKey &&
      ev.key != "Enter"
    ) {
      searchBar.placeholder = "Search...";
      searchBar.disabled = false;
      searchBar.focus();
      if (ev.key == " ") {
        searchBar.value = "";
        return false;
      }
    }
  };
  searchBar.onkeypress = (ev) => {
    if (ev.key == "Enter") {
      QuoteSearch(searchBar.value);
      searchBar.disabled = true;
      searchBar.placeholder = "Searching...";
      searchBar.value = "";
    }
  };
};
