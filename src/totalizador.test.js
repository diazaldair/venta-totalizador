import {
  parseCantidadItems,
  parsePrecioItem,
  calcularPrecioNeto,
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