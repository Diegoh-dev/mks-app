import { CardProduto } from "@/components/cardProduto/cardProduto";
import Header from "@/components/header/header";

export const metadata = {
  title: "MKS Sistemas",
};

export default function Page() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "22px",
        }}
      >
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </>
  );
}
