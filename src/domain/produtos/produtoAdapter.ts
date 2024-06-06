import { DadosProduto, Produto, ProdutoAPI } from "./produtoType";

function toProdutos(productsApi: DadosProduto): Produto {
  return {
    id: productsApi.id,
    name: productsApi.name,
    description: productsApi.description,
    photo: productsApi.photo,
    price: productsApi.price,
  };
}

export const productsAdapter = {
  toProdutos,
};
