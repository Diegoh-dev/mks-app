import { CarrinhoItem } from "src/context/contextProduto";
import { formatCurrency } from "./formatCurrency";

export function somaTotal(listaItens: CarrinhoItem[]) : number{
        const soma = listaItens.reduce((acc,item) => {
            acc += item.quantidade * Number(item.produto.price);

            return acc
        },0)

        return formatCurrency(soma)
}