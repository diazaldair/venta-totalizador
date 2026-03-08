import {
  parseCantidadItems,
  parsePrecioItem,
  calcularPrecioNeto,
  obtenerPorcentajeImpuesto,
  calcularImpuesto,
  calcularTotalConImpuesto,
  obtenerPorcentajeDescuento,
  calcularDescuento,
  calcularTotalConDescuento,
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

  const porcentajeDescuento = obtenerPorcentajeDescuento(precioNeto);
  const descuento = calcularDescuento(precioNeto, porcentajeDescuento);
  const totalConDescuento = calcularTotalConDescuento(precioNeto, descuento);

  div.innerHTML = `
    <p>Cantidad de item ingresada: ${cantidad}</p>
    <p>Precio por item ingresado: ${precio}</p>
    <p>Codigo de estado ingresado: ${estado}</p>
    <p>Precio neto (${cantidad}*${precio}): $${precioNeto}</p>
    <p>Impuesto para ${estado} (${porcentajeImpuesto}%): $${impuesto}</p>
    <p>Precio total (+impuesto): $${totalConImpuesto}</p>
    <p>Descuento (${porcentajeDescuento}%): $${descuento}</p>
    <p>Precio total (-descuento): $${totalConDescuento}</p>
  `;
});