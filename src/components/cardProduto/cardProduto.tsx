import { Produto } from "src/domain/produtos/produtoType";
import styles from "./cardProduto.module.scss";
import { RiShoppingBag3Line } from "react-icons/ri";
import Image from "next/image";

interface Props {
  produto: Produto;
}
export function CardProduto({ produto }: Props) {
  return (
    <div className={styles.card}>
      <Image src={produto.photo} height={138} width={100} alt={produto.name} />
      {/* <div
        style={{
          width: "110px",
          height: "138px",
          backgroundColor: "#373737",
        }}
      ></div> */}

      <div className={styles.produtoPreco}>
        <span className={styles.nomeProduto}>{produto.name}</span>
        <div className={styles.preco}>R${produto.price}</div>
      </div>

      <p className={styles.descricao}>{produto.description}</p>

      <button className={styles.buttonComprar}>
        <div>
          <RiShoppingBag3Line size={18} />
          COMPRAR
        </div>
      </button>
    </div>
  );
}
