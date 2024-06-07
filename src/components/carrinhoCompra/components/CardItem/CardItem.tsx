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
      <div className={styles.containercardItem}>
        <button
          className={styles.buttonclose}
          onClick={() => removerItem(produto.produto.id)}
        >
          <MdCancel className={styles.closebutton} size={20} />
        </button>

        <div className={styles.containerImage} >
          <Image
          className={styles.image}
            src={produto.produto.photo}
            height={50}
            width={45}
            alt={produto.produto.name}
          />
          <p className={styles.nomeProduto}>
            {produto.produto.name}
          </p>
        </div>

      <div className={styles.containerIncrementaSoma}>
      <div className={styles.container}>
          <span className={styles.quantidade}>Qtd: </span>
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
        className={styles.totalPreco}
          style={{ fontSize: "14px", fontWeight: 700, marginLeft: ".3rem" }}
        >
          R${" "}
          {formatCurrency(produto.quantidade * Number(produto.produto.price))}{" "}
        </span>
      </div>
      </div>
    </>
  );
}
