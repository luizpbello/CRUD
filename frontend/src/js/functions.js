import { elements, url, personToCreate } from "./elements.js";

export class FormHandler {
  constructor() {
    this.personData = [];
    this.tableBody = elements.tableBody;
  }

  async getData() {
    try {
      const response = await axios.get(url);
      this.personData = response.data;
      this.renderPerson();
    } catch (error) {
      console.log(error);
    }
  }

  renderPerson() {
    this.tableBody.innerHTML = "";
    this.personData.forEach((person) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = person.lastName;
      row.appendChild(lastNameCell);

      this.tableBody.appendChild(row);
    });
  }

  clear() {
    elements.name.value = "";
    elements.lastName.value = "";
  }

  async sendData() {
    try {
      personToCreate.name = elements.name.value;
      personToCreate.lastName = elements.lastName.value;
      const response = await axios.post(url, personToCreate);
      alert(response.data.message);
      this.clear();
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }
}
