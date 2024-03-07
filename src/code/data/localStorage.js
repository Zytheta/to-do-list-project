// This module controls the local storage in the web page

const localStorageKey = "toDoItems";

export function getToDoItems() {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : [];
}

export function saveToDoItem(toDoItem) {
  const storedData = getToDoItems();
  const newItem = { toDo: toDoItem };
  storedData.push(newItem);
  localStorage.setItem(localStorageKey, JSON.stringify(storedData));
}

export function deleteToDoItem(index) {
  const storedData = getToDoItems();
  storedData.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(storedData));
}

export function deleteToDoList() {
  localStorage.clear();
}
