import { handleDelete, handleEdit } from "../buttonFunctions.js";



export const tableView = ({ id, name, lastName }) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = name;
  row.appendChild(nameCell);

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = lastName;
  row.appendChild(lastNameCell);

  const actions = document.createElement("td");

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", () => {
    handleEdit(id);
  });
  actions.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete-button");
  actions.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    handleDelete(id);
  });
  row.appendChild(actions);

  return row;
};
