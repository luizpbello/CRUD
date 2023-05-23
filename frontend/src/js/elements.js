export const elements = {
  form: document.getElementById("form"),
  tableBody: document.getElementById("tableBody"),
  tableRow: document.getElementById("tableRow"),
  name: document.getElementById("name"),
  lastName: document.getElementById("lastName"),
  send: document.getElementById("send"),
  none:document.getElementById("none")
};

export const personToCreate = {
  name: elements.name,
  lastName: elements.lastName,
};

export const url = "http://localhost:3000/person";


export function clear() {
  elements.name.value = "";
  elements.lastName.value = "";
}