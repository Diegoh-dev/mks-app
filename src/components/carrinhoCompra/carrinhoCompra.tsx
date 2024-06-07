import { Dispatch, SetStateAction, useContext } from "react";
import { MdCancel } from "react-icons/md";
import styles from "./carrinhoCompra.module.scss";
import { ContextProduto } from "src/context/contextProduto";
import { CardItem } from "./components/CardItem/CardItem";
import { somaTotal } from "./functions/somaTotalCarrinho";
import { motion } from "framer-motion";

interface Props {
  setOpenCarrinho: Dispatch<SetStateAction<boolean>>;
}
export function CarrinhoCompra({ setOpenCarrinho }: Props) {
  const { listaItens } = useContext(ContextProduto);

  return (
    <div className={styles.containerCarrinho}>
      <div className={styles.containerItens}>
        <div className={styles.containerTitle}>
          <p>Carrinho de compras</p>
        </div>

        <button onClick={() => setOpenCarrinho(false)}>
          <MdCancel size={38} />
        </button>
      </div>

      <div className={styles.produtosSelecionados}>
        {listaItens?.map((produto, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CardItem produto={produto} />
            </motion.div>
          );
        })}
      </div>

      <div className={styles.rodape}>
        <div className={styles.total}>
          <p style={{}}>Total:</p>
          <p>{somaTotal(listaItens)}</p>
        </div>

        <div className={styles.botao}>
          <button>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
