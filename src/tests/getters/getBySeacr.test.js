import { fill } from "../../getters/getBySearch";

describe("Pruebas en getterbySearch", () => {
  const target = [
    {
      name: "BTC",
      symbol: "BTC",
    },
    {
      name: "ETH",
      symbol: "ETH",
    },
  ];

  test("debe filtrar por busqueda", () => {
    const args = { target: target, search: "BTC" };
    const data = fill(args);

    expect(data).toEqual([{ name: "BTC", symbol: "BTC" }]);
  });
});
