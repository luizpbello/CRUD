import { url } from "./elements.js";
import { elements, clear } from "./elements.js";

export async function handleEdit(id) {
  try {
    const response = await axios.get(`${url}/${id}`);
    const personToEdit = response.data;
    elements.name.value = personToEdit.name;
    elements.lastName.value = personToEdit.lastName;

    elements.send.addEventListener("click", async (e) => {
      e.preventDefault();

      const updatedPerson = {
        name: elements.name.value,
        lastName: elements.lastName.value,
      };

      cuteAlert({
        type: "question",
        title: "Confirmação",
        message: "Deseja mesmo excluir?",
        confirmText: "Confirmar",
        cancelText: "Cancelar",
      }).then(async (e) => {
        if (e) {
          await axios
            .put(`${url}/${id}`, updatedPerson)
            .then((res) => alert(res.data.message));
          clear();
          location.reload();
        } else {
          clear();
          return;
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

export function handleDelete(id) {
  cuteAlert({
    type: "question",
    title: "Confirmação",
    message: "Deseja mesmo excluir?",
    confirmText: "Confirmar",
    cancelText: "Cancelar",
  }).then(async (e) => {
    if (e) {
      await axios.delete(`${url}/${id}`).then((res) => alert(res.data.message));
      location.reload();
    } else {
      return;
    }
  });
}
