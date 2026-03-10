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
export const categorias = {
  'Alimentos': { impuesto: 0, descuento: 2 },
  'Bebidas alcohólicas': { impuesto: 7, descuento: 0 },
  'Material de escritorio': { impuesto: 0, descuento: 1.5 },
  'Muebles': { impuesto: 3, descuento: 0 },
  'Electrónicos': { impuesto: 4, descuento: 1 },
  'Vestimenta': { impuesto: 2, descuento: 0 },
  'Varios': { impuesto: 0, descuento: 0 }
};

export function calcularDescuentoPorCategoria(categoria) {
  return categorias[categoria]?.descuento || 0;
}

export function calcularImpuestoPorCategoria(categoria) {
  return categorias[categoria]?.impuesto || 0;
}
export function obtenerCostoEnvio(peso) {
  if (peso > 200) return 9;
  if (peso > 100) return 8;
  if (peso > 80) return 6.5;
  if (peso > 40) return 6;
  if (peso > 20) return 5;
  if (peso > 10) return 3.5;
  return 0; 
}
export function obtenerDescuentoCliente(tipoCliente) {
  const descuentos = {
    "Normal": 0,
    /*"Recurrente": 0.5,
    "Antiguo Recurrente": 1,
    "Especial": 1.5*/
  };
  return descuentos[tipoCliente] || 0;
}