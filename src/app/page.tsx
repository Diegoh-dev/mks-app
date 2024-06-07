"use client";

import { ListaProdutos } from "@/components/ListaProdutos/ListaProdutos";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Page() {
  return (
    <>
      <Header />
      <ListaProdutos />
      <Footer />
    </>
  );
}
