import Image from "next/image";
import { MdCancel } from "react-icons/md";
import styles from "./CardItem.module.scss";
import { useContext } from "react";
import { CarrinhoItem, ContextProduto } from "src/context/contextProduto";
import { formatCurrency } from "../../functions/formatCurrency";

interface Props {
  produto: CarrinhoItem;
}
export function CardItem({ produto }: Props) {
  const { incrementarQuantidade, decrementarQuantidade, removerItem } =
    useContext(ContextProduto);

  return (
    <>
      <div
        style={{
          // width: "385px",
          height: "95px",
          backgroundColor: "#FFF",
          boxShadow: "-2px 2px 10px 0px #0000000D",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          // padding:'15px'
        }}
      >
        <button
          onClick={() => removerItem(produto.produto.id)}
          style={{
            position: "absolute",
            right: "-4px",
            top: "-7px",
            margin:'0',
            padding:'0',
            border:'none',
            background:'transparent',
            outline:'none',
            cursor:'pointer'
          }}
        >
          <MdCancel size={20} />
        </button>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={produto.produto.photo}
            height={50}
            width={45}
            alt={produto.produto.name}
          />
          <p style={{ fontSize: "13px", width: "113px" }}>
            {produto.produto.name}
          </p>
        </div>

        <div className={styles.container}>
          <span>Qtd: </span>
          <div className={styles.selector}>
            <button
              onClick={() => decrementarQuantidade(produto.produto.id)}
              className={styles.button}
            >
              -
            </button>
            <span className={styles.quantity}>{produto.quantidade}</span>
            <button
              onClick={() => incrementarQuantidade(produto.produto.id)}
              className={styles.button}
            >
              +
            </button>
          </div>
        </div>
        <span
          style={{ fontSize: "14px", fontWeight: 700, marginLeft: ".3rem" }}
        >
          R$ {formatCurrency(produto.quantidade * Number(produto.produto.price))}{" "}
        </span>
      </div>
    </>
  );
}
