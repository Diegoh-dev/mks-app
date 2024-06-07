"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ContextProdutoProvider } from "src/context/contextProduto";

interface Props {
    children: ReactNode ;
}

const ReactQueryProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ContextProdutoProvider>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
    </ContextProdutoProvider>
  );
}

export default ReactQueryProvider;
