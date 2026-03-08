export function parseCantidadItems(valor) {
  return Number.parseInt(valor);
}

export function parsePrecioItem(valor) {
  return Number.parseFloat(valor);
}

export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

export function obtenerPorcentajeImpuesto(estado) {
  if (estado === "CA") {
    return 8.25;
  }
}