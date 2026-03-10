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
  obtenerCostoEnvio 
} from "./totalizador.js";

const inputCantidad = document.querySelector("#cantidad-items");
const inputPrecio = document.querySelector("#precio-item");
const inputEstado = document.querySelector("#codigo-estado");
const inputCategoria = document.querySelector("#categoria-producto");
const inputPeso = document.querySelector("#peso-volumetrico"); 
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = parseCantidadItems(inputCantidad.value);
  const precio = parsePrecioItem(inputPrecio.value);
  const estado = inputEstado.value.toUpperCase();
  const categoria = inputCategoria.value;
  const peso = parseFloat(inputPeso.value) || 0; 

  const precioNeto = calcularPrecioNeto(cantidad, precio);

  
  const porcentajeImpuestoBase = obtenerPorcentajeImpuesto(estado);
  const impuestoAdicional = calcularImpuestoPorCategoria(categoria);
  const porcentajeTotalImpuesto = porcentajeImpuestoBase + impuestoAdicional;
  const impuesto = calcularImpuesto(precioNeto, porcentajeTotalImpuesto);

  
  const porcentajeDescuentoBase = obtenerPorcentajeDescuento(precioNeto);
  const descuentoAdicional = calcularDescuentoPorCategoria(categoria);
  const porcentajeTotalDescuento = porcentajeDescuentoBase + descuentoAdicional;
  const descuento = calcularDescuento(precioNeto, porcentajeTotalDescuento);

  
  const costoEnvioUnitario = obtenerCostoEnvio(peso);
  const costoEnvioTotal = costoEnvioUnitario * cantidad;


  const precioTotal = calcularPrecioTotal(precioNeto, impuesto, descuento) + costoEnvioTotal;

  div.innerHTML = `
    <p><span class="destacado">Cantidad:</span> ${cantidad}</p>
    <p><span class="destacado">Precio:</span> $${precio}</p>
    <p><span class="destacado">Estado:</span> ${estado}</p>
    <p><span class="destacado">Categoría:</span> ${categoria}</p>
    <p><span class="destacado">Peso volumétrico:</span> ${peso} kg</p>
    <hr>
    <p><span class="destacado">Precio neto:</span> $${precioNeto}</p>
    <p><span class="destacado">Impuesto total:</span> $${impuesto}</p>
    <p><span class="destacado">Descuento total:</span> $${descuento}</p>
    <p><span class="destacado">Costo de envío:</span> $${costoEnvioTotal.toFixed(2)}</p>
    <hr>
    <p><span class="destacado">Precio total final:</span> $${precioTotal.toFixed(2)}</p>
  `;
});