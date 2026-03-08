import {
  parseCantidadItems,
  parsePrecioItem,
  calcularPrecioNeto,
  obtenerPorcentajeImpuesto,
  calcularImpuesto,
  calcularTotalConImpuesto,
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
});

describe("Totalizador - Calculo de impuesto", () => {
  it("deberia calcular el valor del impuesto usando el precio neto y el porcentaje", () => {
    expect(calcularImpuesto(60, 8.25)).toEqual(4.95);
  });
});

describe("Totalizador - Precio total con impuesto", () => {
  it("deberia calcular el precio total sumando precio neto mas impuesto", () => {
    expect(calcularTotalConImpuesto(60, 4.95)).toEqual(64.95);
  });
});