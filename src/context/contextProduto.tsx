import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Produto } from "src/domain/produtos/produtoType";

interface contextProdutoPros {
  setListaItens: Dispatch<SetStateAction<[] | CarrinhoItem[]>>;
  listaItens: [] | CarrinhoItem[];
  decrementarQuantidade: (produtoId: number) => void;
  incrementarQuantidade: (produtoId: number) => void;
  adicionarItem: (produto: Produto) => void;
  removerItem: (produtoId: number) => void;
}

export interface CarrinhoItem {
    produto: Produto;
    quantidade: number;
    // id: number;
    // photo:string;
    // price:string;
    // name:string;
  }

export const ContextProduto = createContext<contextProdutoPros>({
  setListaItens: () => {},
  listaItens: [],
  decrementarQuantidade: () => {},
  incrementarQuantidade:() => {},
  adicionarItem:() => {},
  removerItem:() => {}
});

interface contextProdutoProviderProps {
  children: ReactNode;
}
export function ContextProdutoProvider({
  children,
}: contextProdutoProviderProps) {
  const [listaItens, setListaItens] = useState<CarrinhoItem[]>([]);

  const adicionarItem = (produto: Produto) => {
    
    setListaItens(prevLista => {
      const itemExistente = prevLista.find(item => item.produto.id === produto.id);
      if (itemExistente) {
        return prevLista.map(item =>
          item.produto.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prevLista, { produto, quantidade: 1 }];
    });
  };

  const removerItem = (produtoId: number) => {
    setListaItens(prevLista => prevLista.filter(item => item.produto.id !== produtoId));
  };

  const incrementarQuantidade = (produtoId: number) => {
    setListaItens(prevLista =>
      prevLista.map(item =>
        item.produto.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decrementarQuantidade = (produtoId: number) => {
    setListaItens(prevLista =>
      prevLista.map(item =>
        item.produto.id === produtoId
          ? { ...item, quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1 }
          : item
      )
    );
  };
  return (
    <ContextProduto.Provider value={{listaItens,setListaItens,decrementarQuantidade,incrementarQuantidade,adicionarItem,removerItem}}>{children}</ContextProduto.Provider>
  );
}
