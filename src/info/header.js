// header information

import createElement from "./createElement.js";

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

  headerInfo.appendChild(homeBtn);
  headerInfo.appendChild(importantBtn);
  headerInfo.appendChild(historyBtn);
}

export default populateHeader;
