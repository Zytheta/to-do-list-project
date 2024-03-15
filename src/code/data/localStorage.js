import displayError from "../misc-functions/displayError.js";

// This module controls the local storage in the web page

const localStorageKey = "toDoItem";

function serializeJSONString(toDoItem) {
  const toDoObject_serialized = JSON.stringify(toDoItem);
  return toDoObject_serialized;
}

export function saveToDoItem(newToDoItem) {
  console.log("New to-do item:", newToDoItem);
  let existingToDoItems = [];

  const storedData = localStorage.getItem(localStorageKey);

  // Parse existing data if available
  if (storedData) {
    try {
      existingToDoItems = JSON.parse(storedData);
    } catch (error) {
      displayError(error);
    }
  }

  // Add the new to-do item to the existing items
  existingToDoItems.push(newToDoItem);

  // Serialize the updated array and store it back in local storage
  localStorage.setItem(localStorageKey, JSON.stringify(existingToDoItems));
}
