"use client";

import { CardProduto } from "@/components/cardProduto/cardProduto";
import Header from "@/components/header/header";
import { useProductsList } from "src/domain/produtos/useCase/useProductsList";

// export const metadata = {
//   title: "MKS Sistemas",
// };

export default function Page() {
  const { products, isFetching, isLoading } = useProductsList({
    page: "1",
    rows: "8",
    sortBy: "id",
    orderBy: "DESC",
  });
  console.log(products);
  return (
    <>
      <Header />
      {/* criar um componente */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "22px",
        }}
      >
        {products?.map((produto, index) => {
          return <CardProduto produto={produto}/>;
        })}
      </div>
    </>
  );
}
