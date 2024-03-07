// Creates a new to-do item

import createElement from "../misc-functions/createElement.js";
import {
  assembleToDoForm,
  createToDoFormEntries,
  appendToDoFormEntries,
  createToDoFormButtons,
  appendToDoFormButtons,
} from "./toDoForm.js";
import { getToDoItems, saveToDoItem } from "../data/localStorage.js";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

// Making a new class for to-dos

export default class ToDo {
  static mainInfo = document.getElementById("main-content");

  constructor(toDoTitle, todaysDate, dueDate, priority) {
    this.toDoTitle = toDoTitle;
    this.todaysDate = todaysDate;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = uuidv4();
  }

  static addDate() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MMMM dd, yyyy");
    return formattedDate;
  }

  static makeNewToDo() {
    const toDoHolder = createElement("div", {
      class: "to-do-holder",
      id: "to-do-holder-" + ToDo.nextId,
    });

    const { form: toDoForm } = assembleToDoForm();

    toDoHolder.appendChild(toDoForm);
    ToDo.mainInfo.appendChild(toDoHolder);
  }

  static makeNewToDoEntry(toDoValue, formId) {
    const toDoEntry = createElement("div", {
      class: "to-do-text",
      id: "to-do-entry-" + formId,
    });

    const todaysDate = ToDo.addDate();
    toDoEntry.textContent = todaysDate + " - " + toDoValue;

    const editBtn = createElement(
      "button",
      {
        type: "button",
        class: "form-btn",
        id: "edit-btn-for-entry-" + formId,
      },
      ["Edit"]
    );

    editBtn.addEventListener("click", function () {
      const form = document.getElementById("to-do-form-" + formId);
      const content = document.getElementById("to-do-entry-" + formId);
      const toDoList = getToDoItems();
      const index = toDoList.findIndex((item) => item.id === formId);

      toDoList[index].toDo = form.querySelector("input").value;

      saveToDoItem(toDoList);

      content.textContent =
        todaysDate + " - " + form.querySelector("input").value;
      form.style.display = "flex";
    });

    toDoEntry.appendChild(editBtn);
    return toDoEntry;
  }
}
