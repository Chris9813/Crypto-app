import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { TableMarket } from "../../components/Market/TableMarket";

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
    const wrapper = mount(<TableMarket market={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
