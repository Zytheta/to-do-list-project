// index.js

import "./style.css";
import createElement from "./info/createElement.js";
import populateHeader from "./info/header.js";
import populateFooter from "./info/footer.js";
import loadMainContent from "./info/mainContent.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const toDoList = (function () {
  const headerInfo = document.getElementById("header-wrapper");
  const sidebarInfo = document.getElementById("sidebar");
  const mainInfo = document.getElementById("main-content");
  const footerInfo = document.getElementById("footer-wrapper");

  function init() {
    populateHeader(headerInfo);
    populateFooter(footerInfo);
    loadMainContent(mainInfo);
  }

  init();

  return {
    init: init,
  };
})();
