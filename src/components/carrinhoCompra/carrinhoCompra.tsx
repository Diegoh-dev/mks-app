import { useContext, useState } from "react";
import { MdCancel } from "react-icons/md";
import styles from "./carrinhoCompra.module.scss";
import { ContextProduto } from "src/context/contextProduto";
import Image from "next/image";
import { CardItem } from "./components/CardItem/CardItem";
import { somaTotal } from "./functions/somaTotalCarrinho";
export function CarrinhoCompra() {
  const { setListaItens, listaItens } = useContext(ContextProduto);
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

        <div>
          <MdCancel size={38} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          marginTop: "20px",
        }}
      >
        {/* card produto */}
        {listaItens?.map((produto, index) => {
          return (
            <CardItem
              key={index}
              decrement={decrement}
              increment={increment}
              produto={produto}
              quantity={quantity}
            />
            //   <div
            //     key={index}
            //     style={{
            //       // width: "385px",
            //       height: "95px",
            //       backgroundColor: "#FFF",
            //       boxShadow: "-2px 2px 10px 0px #0000000D",
            //       borderRadius: "8px",
            //       display: "flex",
            //       alignItems: "center",
            //       justifyContent: "center",
            //       position: "relative",
            //       // padding:'15px'
            //     }}
            //   >
            //     <div
            //       style={{
            //         position: "absolute",
            //         right: "-4px",
            //         top: "-7px",
            //       }}
            //     >
            //       <MdCancel size={20} />
            //     </div>

            //  <div style={{display:'flex',alignItems:'center'}}>
            //  <Image src={produto.photo} height={50} width={45} alt={produto.name} />
            //  <p style={{fontSize:'13px',width:'113px'}}>{produto.name}</p>
            //  </div>

            //     <div className={styles.container}>
            //       <span>Qtd: </span>
            //       <div className={styles.selector}>
            //         <button onClick={decrement} className={styles.button}>
            //           -
            //         </button>
            //         <span className={styles.quantity}>{quantity}</span>
            //         <button onClick={increment} className={styles.button}>
            //           +
            //         </button>
            //       </div>
            //     </div>
            //     <span style={{fontSize:'14px',fontWeight:700,marginLeft:'.3rem'}}>R$ {quantity * Number(produto.price)} </span>
            //   </div>
          );
        })}
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
