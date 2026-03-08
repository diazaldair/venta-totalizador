import {
  parseCantidadItems,
  parsePrecioItem,
  calcularPrecioNeto,
  obtenerPorcentajeImpuesto,
  calcularImpuesto,
  calcularTotalConImpuesto,
} from "./totalizador.js";

const inputCantidad = document.querySelector("#cantidad-items");
const inputPrecio = document.querySelector("#precio-item");
const inputEstado = document.querySelector("#codigo-estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = parseCantidadItems(inputCantidad.value);
  const precio = parsePrecioItem(inputPrecio.value);
  const estado = inputEstado.value;

  const precioNeto = calcularPrecioNeto(cantidad, precio);
  const porcentajeImpuesto = obtenerPorcentajeImpuesto(estado);
  const impuesto = calcularImpuesto(precioNeto, porcentajeImpuesto);
  const totalConImpuesto = calcularTotalConImpuesto(precioNeto, impuesto);

  div.innerHTML = `
    <p>Cantidad de item ingresada: ${cantidad}</p>
    <p>Precio por item ingresado: ${precio}</p>
    <p>Codigo de estado ingresado: ${estado}</p>
    <p>Precio neto (${cantidad}*${precio}): $${precioNeto}</p>
    <p>Impuesto para ${estado} (${porcentajeImpuesto}%): $${impuesto}</p>
    <p>Precio total (+impuesto): $${totalConImpuesto}</p>
  `;
});