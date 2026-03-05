import { parseCantidadItems } from "./totalizador.js";

describe("Totalizador - Cantidad de items", () => {
  it("deberia convertir la cantidad ingresada a entero", () => {
    expect(parseCantidadItems("20")).toEqual(20);
  });
});