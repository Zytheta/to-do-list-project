// Creates a new to-do item

import createElement from "../misc-functions/createElement.js";
import { format } from "date-fns";

// Making a new class for to-dos

export default class ToDo {
  static nextId = 1;

  constructor(_toDo, _date) {
    (this.toDo = _toDo), (this.date = _date), (this.id = ToDo.nextId++);
  }

  makeNewToDo() {}
}
// }

// // Counter variable to generate unique IDs
// let formCounter = 0;

// function makeNewToDo() {
//   const mainInfo = document.getElementById("main-content");

//   // Increments the Ids for each to-do item
//   formCounter++;

//   const formId = "to-do-form-" + formCounter;

//   const form = createElement("form", {
//     class: "to-do-form",
//     id: formId,
//   });

//   const toDoInput = createElement("input", {
//     type: "text",
//     placeholder: "Enter text here",
//     id: "to-do-input",
//   });

//   // Show the form
//   form.style.display = "flex";

//   // Create submit button for the form
//   const submitBtn = createElement(
//     "button",
//     {
//       type: "submit",
//       class: "form-btn",
//     },
//     ["Submit"]
//   );

//   // Create a reset button for the form
//   const resetBtn = createElement(
//     "button",
//     {
//       type: "reset",
//       class: "form-btn",
//     },
//     ["Reset"]
//   );

//   // Create a cancel button for the form
//   const cancelBtn = createElement(
//     "button",
//     {
//       type: "button",
//       class: "form-btn",
//     },
//     ["Cancel"]
//   );

//   // Add event listeners to form buttons
//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // To-do: add data collection functionality
//     const inputValue = toDoInput.value;
//     console.log("Current values: ", inputValue);
//     const newToDo = new ToDo(inputValue, addDate());
//     appendMain(newToDo);
//     form.style.display = "none";
//   });

//   // Add click event listener to the cancel button
//   cancelBtn.addEventListener("click", function () {
//     form.reset();
//     form.style.display = "none";
//   });

//   appendForm(form, toDoInput, submitBtn, resetBtn, cancelBtn, mainInfo);
// }

// function appendForm(form, toDoInput, submitBtn, resetBtn, cancelBtn, mainInfo) {
//   form.appendChild(toDoInput);
//   form.appendChild(submitBtn);
//   form.appendChild(resetBtn);
//   form.appendChild(cancelBtn);

//   mainInfo.appendChild(form);
// }

// function addDate() {
//   const currentDate = new Date();
//   const formattedDate = format(currentDate, "MMMM dd, yyyy");
//   return formattedDate;
// }

// function appendMain(newToDo) {
//   const mainInfo = document.getElementById("main-content");

//   // Generate a unique ID for the new to-do item's div
//   const itemId = formCounter;
//   console.log("Item Id is: ", itemId);

//   const newToDoDiv = createElement(
//     "div",
//     {
//       class: "to-do-item",
//       id: itemId,
//     },
//     [newToDo.item + " - " + newToDo.date]
//   );

//   const editBtn = createElement(
//     "button",
//     {
//       class: "item-btn",
//       id: "edit-btn",
//     },
//     ["Edit"]
//   );

//   editBtn.addEventListener("click", function () {
//     const editDiv = document.getElementById(itemId);
//     const editForm = document.getElementById("to-do-form-" + itemId);

//     // Hide the regular to-do
//     editDiv.style.display = "none";

//     // Remove the old div
//     editDiv.textContent = "";

//     // Unhide the to-do form
//     editForm.style.display = "flex";
//   });

//   newToDoDiv.appendChild(editBtn);
//   mainInfo.appendChild(newToDoDiv);
// }

// export default makeNewToDo;
