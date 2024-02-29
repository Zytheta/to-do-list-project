// header information

import createElement from "../misc-functions/createElement.js";

function populateHeader(headerInfo) {
  const homeBtn = createElement(
    "button",
    {
      class: "header-button",
      id: "home-button",
    },
    ["Home"]
  );

  const importantBtn = createElement(
    "button",
    {
      class: "header-button",
      id: "important-button",
    },
    ["Important Tasks"]
  );

  const historyBtn = createElement(
    "button",
    {
      class: "header-button",
      id: "history-button",
    },
    ["Archived Tasks"]
  );

  const headerBanner = createElement(
    "div",
    {
      id: "header-banner",
    },
    ["Chris's To-Do List"]
  );

  headerInfo.appendChild(homeBtn);
  headerInfo.appendChild(importantBtn);
  headerInfo.appendChild(historyBtn);
  headerInfo.appendChild(headerBanner);
}

export default populateHeader;
