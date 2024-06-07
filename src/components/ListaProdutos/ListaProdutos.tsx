import { useProductsList } from "src/domain/produtos/useCase/useProductsList";
import { SkeletonComponent } from "../Skeleton/Skeleton";
import { CardProduto } from "../cardProduto/cardProduto";
import styles from "./ListaProdutos.module.scss";

export function ListaProdutos() {
  const { products, isLoading } = useProductsList({
    page: "1",
    rows: "8",
    sortBy: "id",
    orderBy: "DESC",
  });
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {isLoading
          ? Array.from(new Array(8)).map((_, index) => (
              <SkeletonComponent key={index} />
            ))
          : products?.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
      </div>
    </div>
  );
}
