import { parseCantidadItems } from "./totalizador.js";

const inputCantidad = document.querySelector("#cantidad-items");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = parseCantidadItems(inputCantidad.value);

  div.innerHTML = `<p>Cantidad de items ingresada: ${cantidad}</p>`;
});