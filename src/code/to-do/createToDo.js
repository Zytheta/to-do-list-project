// Creates a new to-do item

import createElement from "../misc-functions/createElement.js";
import { assembleToDoForm } from "./toDoForm.js";
import { saveToDoItem } from "../data/localStorage.js";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

// Making a new class for to-dos

export default class ToDo {
  static mainInfo = document.getElementById("main-content");

  constructor(toDoTitle, toDoDescription, todaysDate, dueDate, priority) {
    this.toDoTitle = toDoTitle;
    this.description = toDoDescription;
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
      id: "to-do-holder",
    });

    const { form: toDoForm, values } = assembleToDoForm();

    toDoHolder.appendChild(toDoForm);
    ToDo.mainInfo.appendChild(toDoHolder);
  }
}
