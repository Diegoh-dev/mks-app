import { api } from "@/api/apiConfig";
import { ParamsApi, ProdutoAPI } from "./produtoType";

async function getListProducts(params: ParamsApi): Promise<ProdutoAPI> {
  const response = await api.get("v1/products", {
    params,
  });

  return response.data;
}


export const productsApi = {
  getListProducts,
};