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

describe("Totalizador - Cantidad de items", () => {
  it("deberia convertir la cantidad ingresada a entero", () => {
    expect(parseCantidadItems("20")).toEqual(20);
  });
});

describe("Totalizador - Precio por item", () => {
  it("deberia convertir el precio ingresado a numero", () => {
    expect(parsePrecioItem("34")).toEqual(34);
  });
});

describe("Totalizador - Precio neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});

describe("Totalizador - Porcentaje de impuesto por estado", () => {
  it("deberia devolver 8.25 para el estado CA", () => {
    expect(obtenerPorcentajeImpuesto("CA")).toEqual(8.25);
  });

  it("deberia devolver 4 para el estado AL", () => {
    expect(obtenerPorcentajeImpuesto("AL")).toEqual(4);
  });

  it("deberia devolver 8 para el estado NV", () => {
    expect(obtenerPorcentajeImpuesto("NV")).toEqual(8);
  });

  it("deberia devolver 6.65 para el estado UT", () => {
    expect(obtenerPorcentajeImpuesto("UT")).toEqual(6.65);
  });

  it("deberia devolver 6.25 para el estado TX", () => {
    expect(obtenerPorcentajeImpuesto("TX")).toEqual(6.25);
  });
});

describe("Totalizador - Calculo de impuesto", () => {
  it("deberia calcular el valor del impuesto usando el precio neto y el porcentaje", () => {
    expect(calcularImpuesto(60, 8.25)).toEqual(4.95);
  });

  it("deberia calcular el valor del impuesto para TX", () => {
    expect(calcularImpuesto(60, 6.25)).toEqual(3.75);
  });
});

describe("Totalizador - Precio total con impuesto", () => {
  it("deberia calcular el precio total sumando precio neto mas impuesto", () => {
    expect(calcularTotalConImpuesto(60, 4.95)).toEqual(64.95);
  });

  it("deberia calcular el precio total con impuesto para TX", () => {
    expect(calcularTotalConImpuesto(60, 3.75)).toEqual(63.75);
  });
});

describe("Totalizador - Porcentaje de descuento", () => {
  it("deberia devolver 3 cuando el precio neto es 1000", () => {
    expect(obtenerPorcentajeDescuento(1000)).toEqual(3);
  });

  it("deberia devolver 5 cuando el precio neto es 3000", () => {
    expect(obtenerPorcentajeDescuento(3000)).toEqual(5);
  });

  it("deberia devolver 7 cuando el precio neto es 7000", () => {
    expect(obtenerPorcentajeDescuento(7000)).toEqual(7);
  });

  it("deberia devolver 10 cuando el precio neto es 10000", () => {
    expect(obtenerPorcentajeDescuento(10000)).toEqual(10);
  });

  it("deberia devolver 15 cuando el precio neto es 30000", () => {
    expect(obtenerPorcentajeDescuento(30000)).toEqual(15);
  });

  it("deberia devolver 0 cuando el precio neto es menor a 1000", () => {
    expect(obtenerPorcentajeDescuento(999)).toEqual(0);
  });
});

describe("Totalizador - Calculo de descuento", () => {
  it("deberia calcular el valor del descuento usando el precio neto y el porcentaje", () => {
    expect(calcularDescuento(1000, 3)).toEqual(30);
  });

  it("deberia calcular el valor del descuento para 3000 con 5%", () => {
    expect(calcularDescuento(3000, 5)).toEqual(150);
  });

  it("deberia calcular el valor del descuento para 7000 con 7%", () => {
    expect(calcularDescuento(7000, 7)).toEqual(490);
  });

  it("deberia calcular el valor del descuento para 10000 con 10%", () => {
    expect(calcularDescuento(10000, 10)).toEqual(1000);
  });

  it("deberia calcular el valor del descuento para 30000 con 15%", () => {
    expect(calcularDescuento(30000, 15)).toEqual(4500);
  });
});

describe("Totalizador - Precio total con descuento", () => {
  it("deberia calcular el precio total restando el descuento al precio neto", () => {
    expect(calcularTotalConDescuento(1000, 30)).toEqual(970);
  });

  it("deberia calcular el precio total con descuento para 3000", () => {
    expect(calcularTotalConDescuento(3000, 150)).toEqual(2850);
  });

  it("deberia calcular el precio total con descuento para 7000", () => {
    expect(calcularTotalConDescuento(7000, 490)).toEqual(6510);
  });

  it("deberia calcular el precio total con descuento para 10000", () => {
    expect(calcularTotalConDescuento(10000, 1000)).toEqual(9000);
  });

  it("deberia calcular el precio total con descuento para 30000", () => {
    expect(calcularTotalConDescuento(30000, 4500)).toEqual(25500);
  });
});