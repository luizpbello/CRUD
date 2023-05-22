import { elements } from "./elements.js";
 import { getData, sendData } from "./functions.js";

elements.form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  sendData();
});



const button = document.getElementById("data");

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  getData();
});
