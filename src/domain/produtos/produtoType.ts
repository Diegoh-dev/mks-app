export interface Produto {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}
export interface DadosProduto {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProdutoAPI {
  count:number;
  products:DadosProduto[]
}


export interface ParamsApi{
    page:string;
    rows:string;
    sortBy:string;
    orderBy:string;
}