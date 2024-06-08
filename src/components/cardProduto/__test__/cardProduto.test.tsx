import { fireEvent, render } from "@testing-library/react";
import { CardProduto } from "../cardProduto";
import { ContextProduto } from "src/context/contextProduto";

describe("<CardProduto />", () => {
  it("chamando a função adicionarItem quando o botão é pressionado", () => {
    const mockData = {
      id: 8,
      name: "Headset Cloud Stinger",
      description:
        "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
      price: "600.00",
    };
  
    const adicionarItem = jest.fn();
  
    const { getByText } = render(
      <ContextProduto.Provider value={{ adicionarItem }}>
        <CardProduto produto={mockData} />
      </ContextProduto.Provider>
    );
  
    const comprarButton = getByText(/COMPRAR/i); 
  
    fireEvent.click(comprarButton);
  
    expect(adicionarItem).toHaveBeenCalledWith(mockData);
  });

  it("não chama a função onPress quando está desabilitada e pressionada", () => {
    const adicionarItem = jest.fn();
    const mockData = {
      id: 8,
      name: "Headset Cloud Stinger",
      description:
        "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
      price: "600.00",
    };
  
    const { getByText } = render(
      <ContextProduto.Provider value={{ adicionarItem }}>
        <CardProduto produto={mockData} disabled={true}/>
      </ContextProduto.Provider>
    );
  
    const comprarButton = getByText(/COMPRAR/i); 
  
    fireEvent.click(comprarButton);
    expect(adicionarItem).not.toHaveBeenCalled();
  });
});
