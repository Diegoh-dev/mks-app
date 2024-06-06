import styles from "./cardProduto.module.scss";
import { RiShoppingBag3Line } from "react-icons/ri";

export function CardProduto() {
  return (
    <div className={styles.card}>
      <div
        style={{
          width: "110px",
          height: "138px",
          backgroundColor: "#373737",
        }}
      ></div>

      <div className={styles.produtoPreco}>
        <span className={styles.nomeProduto}>Apple Watch Series 4 GPS</span>
        <div className={styles.preco}>R$399</div>
      </div>

      <p className={styles.descricao}>
        Redesigned from scratch and completely revised.
      </p>

      <button className={styles.buttonComprar}>
        <div>
          <RiShoppingBag3Line size={18} />
          COMPRAR
        </div>
      </button>
    </div>
  );
}
