import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { TableExchanges } from "../../../components/Exchanges/TableExchanges";

describe("prueba en el componente TableMarket", () => {
  const data = [
    {
      name: "asdas",
      base: "asda",
      price_usd: 123123,
      volume_usd: 123123,
    },
  ];

  test("debe de mostrarse correctamente", () => {
    const wrapper = mount(<TableExchanges market={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
