import { Dispatch, SetStateAction, useContext, useState } from "react";
import { MdCancel } from "react-icons/md";
import styles from "./carrinhoCompra.module.scss";
import { ContextProduto } from "src/context/contextProduto";
import Image from "next/image";
import { CardItem } from "./components/CardItem/CardItem";
import { somaTotal } from "./functions/somaTotalCarrinho";
import { motion } from 'framer-motion';

interface Props {
  setOpenCarrinho: Dispatch<SetStateAction<boolean>>;
  
}
export function CarrinhoCompra({setOpenCarrinho}:Props) {
  const {  listaItens } = useContext(ContextProduto);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  console.log('soam:',somaTotal(listaItens))

  return (
    <div className={styles.containerCarrinho}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              width: "180px",
              fontSize: "27px",
              fontWeight: "700",
              lineHeight: "32.91px",
              color: "#FFF",
            }}
          >
            Carrinho de compras
          </p>
        </div>

        <button onClick={() => setOpenCarrinho(false)}>
          <MdCancel size={38} />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          marginTop: "20px",
        }}
      >
        
        {listaItens?.map((produto, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CardItem
              decrement={decrement}
              increment={increment}
              produto={produto}
              quantity={quantity}
            />
          </motion.div>
        );
      })}

        {/* card produto */}
        {/* {listaItens?.map((produto, index) => {
          return (
            <CardItem
              key={index}
              decrement={decrement}
              increment={increment}
              produto={produto}
              quantity={quantity}
            />
           
          );
        })} */}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          marginLeft: "-47px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "28px",
            color: "#fff",
            padding: "0 47px",
          }}
        >
          <p style={{}}>Total:</p>
          <p>{somaTotal(listaItens)}</p>
        </div>
        <div style={{ width: "100%", height: "97px" }}>
          <button
            style={{
              width: "100%",
              height: "97px",
              backgroundColor: "#000000",
              color: "#fff",
              fontSize: "28px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
      
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
