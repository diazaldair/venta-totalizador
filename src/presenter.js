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
  calcularPrecioTotal,
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
  const estado = inputEstado.value.toUpperCase();

  const precioNeto = calcularPrecioNeto(cantidad, precio);

  const porcentajeImpuesto = obtenerPorcentajeImpuesto(estado);
  const impuesto = calcularImpuesto(precioNeto, porcentajeImpuesto);
  const totalConImpuesto = calcularTotalConImpuesto(precioNeto, impuesto);

  const porcentajeDescuento = obtenerPorcentajeDescuento(precioNeto);
  const descuento = calcularDescuento(precioNeto, porcentajeDescuento);
  const totalConDescuento = calcularTotalConDescuento(precioNeto, descuento);

  const precioTotal = calcularPrecioTotal(precioNeto, impuesto, descuento);

  div.innerHTML = `
    <p><span class="destacado">Cantidad de item ingresada:</span> ${cantidad}</p>
    <p><span class="destacado">Precio por item ingresado:</span> $${precio}</p>
    <p><span class="destacado">Código de estado ingresado:</span> ${estado}</p>
    <hr>
    <p><span class="destacado">Precio neto:</span> (${cantidad} * ${precio}) = $${precioNeto}</p>
    <p><span class="destacado">Impuesto para ${estado}:</span> ${porcentajeImpuesto}% = $${impuesto}</p>
    <p><span class="destacado">Precio total con impuesto:</span> $${totalConImpuesto}</p>
    <p><span class="destacado">Descuento aplicado:</span> ${porcentajeDescuento}% = $${descuento}</p>
    <p><span class="destacado">Precio total con descuento:</span> $${totalConDescuento}</p>
    <hr>
    <p><span class="destacado">Precio total final:</span> ${precioNeto} + ${impuesto} - ${descuento} = $${precioTotal}</p>
  `;
});