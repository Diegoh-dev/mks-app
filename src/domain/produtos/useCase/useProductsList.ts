import { useQueries, useQuery } from "@tanstack/react-query";
import { productsService } from "../produtoService";
import { ParamsApi } from "../produtoType";

export function useProductsList(params: ParamsApi) {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsService.getListProducts(params),
  });

  return {
    products: data,
    isFetching,
    isLoading,
  };
}
