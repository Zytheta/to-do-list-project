// Keeps track of the form for entering new To-Dos

import createElement from "../misc-functions/createElement.js";
import displayError from "../misc-functions/displayError.js";
import { saveToDoItem } from "../data/localStorage.js";
import ToDo from "./createToDo.js";

export function assembleToDoForm(newToDoBtn) {
  const toDoForm = createElement("form", {
    class: "to-do-form",
  });

  const entries = createToDoFormEntries();

  appendToDoFormEntries(toDoForm, entries);

  const buttons = createToDoFormButtons(toDoForm, newToDoBtn);

  appendToDoFormButtons(toDoForm, buttons);

  toDoForm.style.display = "flex";

  return {
    form: toDoForm,
    values: {
      title: entries[0].value,
      description: entries[1].value,
      dueDateMonth: entries[2].value,
      dueDateDay: entries[3].value,
      dueDateYear: entries[4].value,
      priority: entries[5].value,
    },
  };
}

function createToDoFormEntries() {
  const toDoTitle = createElement("input", {
    type: "text",
    placeholder: "To-do Title",
    id: "title",
    class: "entry-form",
    maxlength: 50,
  });

  const toDoDescription = createElement("input", {
    type: "text",
    placeholder: "Description of to-do, 240 character limit.",
    id: "description",
    class: "entry-form",
    maxlength: 240,
  });

  const dueDateMonth = createElement("input", {
    type: "number",
    placeholder: "Mo",
    id: "date-month",
    class: "entry-form",
    min: "1", // Minimum value for month
    max: "12", // Maximum value for month
  });

  const dueDateDay = createElement("input", {
    type: "number",
    placeholder: "Day",
    id: "date-day",
    class: "entry-form",
    min: "1", // Minimum value for day
    max: "31", // Maximum value for day
  });

  const dueDateYear = createElement("input", {
    type: "number",
    placeholder: "Year",
    id: "date-year",
    class: "entry-form",
    min: "1900", // Minimum value for year
    max: "2100", // Maximum value for year
  });

  const prioritySelector = createElement("select", {
    id: "priority",
    class: "entry-form",
  });

  const priorityOptions = [
    { value: "", text: "Select Priority" },
    { value: "anytime", text: "Anytime" },
    { value: "soon", text: "Soon" },
    { value: "urgent", text: "Urgent" },
  ];

  priorityOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    prioritySelector.appendChild(optionElement);
  });

  return [
    toDoTitle,
    toDoDescription,
    dueDateMonth,
    dueDateDay,
    dueDateYear,
    prioritySelector,
  ];
}

function appendToDoFormEntries(toDoForm, entries) {
  entries.forEach((entry) => {
    toDoForm.appendChild(entry);
  });
}

function createToDoFormButtons(toDoForm, newToDoBtn) {
  const saveBtn = createElement(
    "button",
    {
      type: "submit",
      class: "form-btn",
    },
    ["Save"]
  );

  saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const entries = toDoForm.querySelectorAll(".entry-form");

    const title = entries[0].value.trim();
    if (!title) {
      displayError("Please enter a title for the to-do.");
      return; // Exit early if validation fails
    }
    if (title.length > 50) {
      displayError("Titles can only have a maximum of 50 characters.");
      return;
    }

    const description = entries[1].value.trim();
    if (description.length > 240) {
      displayError("Descriptions can only hold a maximum of 240 characters.");
      return;
    }

    const dueDateMonth = entries[2].value;
    const month = parseInt(dueDateMonth);
    if (isNaN(month) || month < 1 || month > 12) {
      displayError("Please choose the month (1-12).");
      return;
    }

    const dueDateDay = entries[3].value;
    const day = parseInt(dueDateDay);
    if (isNaN(day) || day < 1 || day > 31) {
      displayError("Please choose a day (1-31).");
      return;
    }

    const dueDateYear = entries[4].value;
    const year = parseInt(dueDateYear);
    if (isNaN(year) || year < 1900 || year > 2500) {
      displayError("You can only make to-do's between 1900 and 2500.");
      return;
    }

    const priority = entries[5].value;
    if (
      priority !== "anytime" &&
      priority !== "soon" &&
      priority !== "urgent"
    ) {
      displayError("Please select a priority.");
      return;
    }

    const values = {
      title: title,
      description: description,
      dueDateMonth: dueDateMonth,
      dueDateDay: dueDateDay,
      dueDateYear: dueDateYear,
      priority: priority,
    };

    toDoForm.reset();
    // console.log("Current to-do values are: ", values);
    toDoForm.style.display = "none";
    newToDoBtn.style.display = "flex";

    // Create a new to-do item and add it to local storage
    const newToDoItem = new ToDo(
      values.title,
      values.description,
      ToDo.addDate(),
      `${values.dueDateMonth}/${values.dueDateDay}/${values.dueDateYear}`,
      values.priority
    );

    return saveToDoItem(newToDoItem);
  });

  const resetBtn = createElement(
    "button",
    {
      type: "reset",
      class: "form-btn",
    },
    ["Reset"]
  );

  resetBtn.addEventListener("click", function () {
    toDoForm.reset();
  });

  const cancelBtn = createElement(
    "button",
    {
      type: "button",
      class: "form-btn",
    },
    ["Cancel"]
  );

  cancelBtn.addEventListener("click", function () {
    toDoForm.reset();
    toDoForm.style.display = "none";
    newToDoBtn.style.display = "flex";
  });

  return [saveBtn, resetBtn, cancelBtn];
}

function appendToDoFormButtons(toDoForm, buttons) {
  buttons.forEach((button) => {
    toDoForm.appendChild(button);
  });
}
