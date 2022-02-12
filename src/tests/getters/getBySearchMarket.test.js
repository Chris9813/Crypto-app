import { fillMarket } from "../../getters/getterBySearchMarket";

describe("Pruebas en getterbySearch", () => {
  const target = [
    {
      name: "BTC",
    },
    {
      name: "ETH",
    },
  ];

  test("debe filtrar por busqueda", () => {
    const args = { target: target, search: "BTC" };
    const data = fillMarket(args);

    expect(data).toEqual([{ name: "BTC" }]);
  });
});
