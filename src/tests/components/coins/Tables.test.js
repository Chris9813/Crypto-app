import { mount } from "enzyme";
import { Tables } from "../../../components/Coins/Tables";

describe("prueba en el componente TableMarket", () => {
  const data = [
    {
      name: "asdas",
      price_usd: 123123,
      percent_change_24h: 0,
      volume24: 123123,
    },
  ];

  test("debe de mostrarse correctamente", () => {
    const wrapper = mount(<Tables market={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
