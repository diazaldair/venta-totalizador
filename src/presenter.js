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
  calcularDescuentoPorCategoria,
  calcularImpuestoPorCategoria,
} from "./totalizador.js";

const inputCantidad = document.querySelector("#cantidad-items");
const inputPrecio = document.querySelector("#precio-item");
const inputEstado = document.querySelector("#codigo-estado");
const inputCategoria = document.querySelector("#categoria-producto"); 
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = parseCantidadItems(inputCantidad.value);
  const precio = parsePrecioItem(inputPrecio.value);
  const estado = inputEstado.value.toUpperCase();
  const categoria = inputCategoria.value; 

  const precioNeto = calcularPrecioNeto(cantidad, precio);

  const porcentajeImpuestoBase = obtenerPorcentajeImpuesto(estado);
  const impuestoAdicional = calcularImpuestoPorCategoria(categoria);
  const porcentajeTotalImpuesto = porcentajeImpuestoBase + impuestoAdicional;
  const impuesto = calcularImpuesto(precioNeto, porcentajeTotalImpuesto);
  const totalConImpuesto = calcularTotalConImpuesto(precioNeto, impuesto);

  
  const porcentajeDescuentoBase = obtenerPorcentajeDescuento(precioNeto);
  const descuentoAdicional = calcularDescuentoPorCategoria(categoria);
  const porcentajeTotalDescuento = porcentajeDescuentoBase + descuentoAdicional;
  const descuento = calcularDescuento(precioNeto, porcentajeTotalDescuento);
  const totalConDescuento = calcularTotalConDescuento(precioNeto, descuento);

  const precioTotal = calcularPrecioTotal(precioNeto, impuesto, descuento);

  div.innerHTML = `
    <p><span class="destacado">Cantidad:</span> ${cantidad}</p>
    <p><span class="destacado">Precio:</span> $${precio}</p>
    <p><span class="destacado">Estado:</span> ${estado}</p>
    <p><span class="destacado">Categoría:</span> ${categoria}</p>
    <hr>
    <p><span class="destacado">Precio neto:</span> $${precioNeto}</p>
    <p><span class="destacado">Impuesto total (${porcentajeTotalImpuesto}%):</span> $${impuesto}</p>
    <p><span class="destacado">Descuento total (${porcentajeTotalDescuento}%):</span> $${descuento}</p>
    <hr>
    <p><span class="destacado">Precio total final:</span> $${precioTotal.toFixed(2)}</p>
  `;
});