import { useQuery } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";
import { useProductsList } from "../useProductsList";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("useProductsList", () => {
  it("deve retornar os dados dos produtos corretamente", async () => {
    const mockData = [
      {
        id: 8,
        name: "Headset Cloud Stinger",
        brand: "HyperX",
        description:
          "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
        price: "600.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
    ];
    const mockIsFetching = false;
    const mockIsLoading = false;

    (useQuery as jest.Mock).mockReturnValueOnce({
      data: mockData,
      isFetching: mockIsFetching,
      isLoading: mockIsLoading,
    });

    const { result } = renderHook(() =>
      useProductsList({ page: "1", rows: "8", sortBy: "id", orderBy: "DESC" })
    );

    expect(result.current.products).toEqual(mockData);
    expect(result.current.isFetching).toEqual(mockIsFetching);
    expect(result.current.isLoading).toEqual(mockIsLoading);
  });
});
