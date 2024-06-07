"use client";

import { ListaProdutos } from "@/components/ListaProdutos/ListaProdutos";
import { CarrinhoCompra } from "@/components/carrinhoCompra/carrinhoCompra";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
export default function Page() {

  const [openCarrinho,setOpenCarrinho] = useState(false);

  return (
    <>
   <AnimatePresence>
      {openCarrinho && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          key="carrinho"
        >
          <CarrinhoCompra setOpenCarrinho={setOpenCarrinho} />
        </motion.div>
      )}
    </AnimatePresence>

      <Header setOpenCarrinho={setOpenCarrinho}/>
      <ListaProdutos />
      <Footer />
    </>
  );
}
