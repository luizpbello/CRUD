import { url, personToCreate } from "./elements.js";


export async function getData() {
  const person = await axios.get(url);
  console.log(person.data);
}

export async function sendData() {
  try {
    await axios.post(url, personToCreate).then((res) => {
      alert(res.data.message);
    });
  } catch (error) {}
}

