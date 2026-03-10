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
  const tasas = {
    "CA": 8.25,
    "AL": 4,
    "NV": 8,
    "UT": 6.65,
    "TX": 6.25
  };
  
  return tasas[estado] || 0;
}
 

export function calcularImpuesto(precioNeto, porcentaje) {
  return (precioNeto * porcentaje) / 100;
}

export function calcularTotalConImpuesto(precioNeto, impuesto) {
  return precioNeto + impuesto;
}

export function obtenerPorcentajeDescuento(precioNeto) {
  if (precioNeto >= 30000) {
    return 15;
  }

  if (precioNeto >= 10000) {
    return 10;
  }

  if (precioNeto >= 7000) {
    return 7;
  }

  if (precioNeto >= 3000) {
    return 5;
  }

  if (precioNeto >= 1000) {
    return 3;
  }

  return 0;
}

export function calcularDescuento(precioNeto, porcentajeDescuento) {
  return (precioNeto * porcentajeDescuento) / 100;
}

export function calcularTotalConDescuento(precioNeto, descuento) {
  return precioNeto - descuento;
}

export function calcularPrecioTotal(precioNeto, impuesto, descuento) {
  return precioNeto + impuesto - descuento;
}