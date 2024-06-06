import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>MKS</h1>
          <h6>Sistemas</h6>
        </div>

        <button className={styles.buttonCar}>
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
