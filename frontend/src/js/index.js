import { elements } from "./elements.js";
import { FormHandler } from "./formHandler.js";
const formHandler = new FormHandler()

elements.form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  formHandler.sendData();
});


formHandler.getData()
