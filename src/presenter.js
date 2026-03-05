import { parseCantidadItems, parsePrecioItem } from "./totalizador.js";

const inputCantidad = document.querySelector("#cantidad-items");
const inputPrecio = document.querySelector("#precio-item");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = parseCantidadItems(inputCantidad.value);
  const precio = parsePrecioItem(inputPrecio.value);

  div.innerHTML = `
    <p>Cantidad de item ingresada: ${cantidad}</p>
    <p>Precio por item ingresado: ${precio}</p>
  `;
});