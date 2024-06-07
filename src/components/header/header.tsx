import Image from "next/image";
import styles from "./header.module.scss";
import { Dispatch, SetStateAction } from "react";
interface Props{
  setOpenCarrinho: Dispatch<SetStateAction<boolean>>
}
export default function Header({setOpenCarrinho}:Props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>MKS</h1>
          <h6>Sistemas</h6>
        </div>

        <button className={styles.buttonCar} onClick={() => setOpenCarrinho(true)}>
          <Image
            src="/carrinho.png"
            width={18}
            height={18}
            alt="carrinho de compra"
          />
          <span>0</span>
        </button>
      </nav>
    </header>
  );
}
