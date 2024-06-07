import { formatCurrency } from "../formatCurrency";

describe("formatCurrency", () => {
  it("deve formatar corretamente um número inteiro", () => {
    const value = 100;

    const resultado = formatCurrency(value);

    expect(resultado).toBe("100,00");
  });

  it("deve formatar corretamente um número decimal", () => {
    const value = 123.45;

    const resultado = formatCurrency(value);

    expect(resultado).toBe("123,45");
  });

  it("deve formatar corretamente uma string numérica inteira", () => {
    const value = "500";

    const resultado = formatCurrency(value);

    expect(resultado).toBe("500,00");
  });

  it("deve formatar corretamente uma string numérica decimal", () => {
    const value = "123.45";

    const resultado = formatCurrency(value);

    expect(resultado).toBe("123,45");
  });

  it("deve formatar corretamente uma string numérica com ponto", () => {
    const value = "1000.00";

    const resultado = formatCurrency(value);

    expect(resultado).toBe("1.000,00");
  });

  it("deve formatar corretamente uma string numérica com vírgula como separador decimal", () => {
    const value = "99,99";

    const resultado = formatCurrency(value);

    expect(resultado).toBe("99,99");
  });
});
