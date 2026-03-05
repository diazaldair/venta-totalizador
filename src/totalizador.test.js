import { parseCantidadItems, parsePrecioItem } from "./totalizador.js";

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