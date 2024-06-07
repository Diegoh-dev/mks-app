import { formatCurrency } from "../formatCurrency";
import { somaTotal } from "../somaTotalCarrinho";


describe("somaTotal", () => {
  it("deve retornar o total da soma formatada em moeda correta", () => {
    const listaItens = [
      { produto: { price: "10" }, quantidade: 2 },
      { produto: { price: "5.5" }, quantidade: 3 },
      { produto: { price: "20" }, quantidade: 1 }
    ];

    const resultado = somaTotal(listaItens);

    const somaEsperada = 10 * 2 + 5.5 * 3 + 20 * 1; // 51
    const somaFormatada = formatCurrency(somaEsperada); 
    expect(resultado).toBe(somaFormatada);
  });

  it("deve retornar 0 se a lista de itens estiver vazia", () => {
    const listaItens = [];

    const resultado = somaTotal(listaItens);

    expect(resultado).toBe(formatCurrency(0));
  });
});
