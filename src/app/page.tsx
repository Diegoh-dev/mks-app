"use client";

import { ListaProdutos } from "@/components/ListaProdutos/ListaProdutos";
import { CarrinhoCompra } from "@/components/carrinhoCompra/carrinhoCompra";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useState } from "react";
import { Produto } from "src/domain/produtos/produtoType";

export default function Page() {

  return (
    <>
     <CarrinhoCompra/>

      <Header />
      <ListaProdutos />
      <Footer />
    </>
  );
}
