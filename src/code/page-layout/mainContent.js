// Keeps track of the main content within the main-content div

import createElement from "../misc-functions/createElement.js";
import ToDo from "../to-do/createToDo.js";

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
    ToDo.makeNewToDo();
  });

  mainInfo.appendChild(newToDoBtn);
}

export default loadMainContent;
