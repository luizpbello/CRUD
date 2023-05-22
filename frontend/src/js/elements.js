export const elements = {
  form: document.getElementById("form"),
  tableBody: document.getElementById("tableBody"),
  tableRow: document.getElementById("tableRow"),
  name: document.getElementById("name").value,
  lastName: document.getElementById("lastName").value,
};


export const personToCreate = {
    name: elements.name,
    lastName: elements.lastName,
  };

export const url = "http://localhost:3000/person";
