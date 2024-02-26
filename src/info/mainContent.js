// Keeps track of the main content within the main-content div

import createElement from "./createElement.js";
import makeNewToDo from "./createToDo.js";

function loadMainContent(mainInfo) {
  const newToDoBtn = createElement(
    "button",
    {
      id: "new-to-do-btn",
    },
    ["Add New To-Do"]
  );

  newToDoBtn.addEventListener("click", function () {
    // Show the form when the button is clicked
    makeNewToDo();
  });

  mainInfo.appendChild(newToDoBtn);
}

export default loadMainContent;
