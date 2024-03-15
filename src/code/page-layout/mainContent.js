import createElement from "../misc-functions/createElement.js";
import ToDo from "../to-do/createToDo.js";
import { assembleToDoForm } from "../to-do/toDoForm.js"; // Import assembleToDoForm

function loadMainContent(mainInfo) {
  const newToDoBtn = createElement(
    "button",
    {
      id: "new-to-do-btn",
    },
    ["Add New To-Do"]
  );

  const clearAllToDosBtn = createElement(
    "button",
    {
      id: "clear-all-to-dos-btn",
    },
    ["Clear all To-Do's"]
  );

  newToDoBtn.addEventListener("click", function () {
    // Hide the button
    newToDoBtn.style.display = "none";
    // Show the form when the button is clicked
    const { form } = assembleToDoForm(newToDoBtn); // Pass newToDoBtn to assembleToDoForm
    mainInfo.appendChild(form);
  });

  clearAllToDosBtn.addEventListener("click", function () {
    const confirmation = window.confirm(
      "Are you sure you would like to delete all your to-do's?"
    );

    if (confirmation) {
      localStorage.removeItem("toDoItem");
    }
  });

  mainInfo.appendChild(newToDoBtn);
  mainInfo.appendChild(clearAllToDosBtn);
}

export default loadMainContent;
