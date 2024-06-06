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
          // border: "1px solid red",
          // height: "calc(100vh - 125px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "22px",
            alignItems: "center",
            justifyContent: "center",
            width:'1180px',
            padding:'4rem 0'
          }}
        >
          {products?.map((produto, index) => {
            return <CardProduto produto={produto} />;
          })}
        </div>
      </div>
    </>
  );
}
