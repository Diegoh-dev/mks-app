import { productsAdapter } from "./produtoAdapter";
import { productsApi } from "./produtoApi";
import { ParamsApi, Produto } from "./produtoType";

async function getListProducts(params: ParamsApi): Promise<Produto[]> {
  const response = await productsApi.getListProducts(params);
  return response.products.map(productsAdapter.toProdutos)
}

export const productsService = {
  getListProducts,
};
