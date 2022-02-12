import { mount, shallow } from "enzyme";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { MarketList } from "../../components/Market/MarketList";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockNavigate,
}));

describe("Pruebas en el componente <MarketList />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = mount(<MarketList />);
    expect(wrapper.find(".container").exists()).toBe(true);
  });

  test("debe de mostrar el componente redirect si no hay argumentos en el URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/market"]}>
        <MarketList />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un hero si el parámetro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/market/90"]}>
        <Route path="/market/:marketId" component={MarketList} />
      </MemoryRouter>
    );

    expect(wrapper.find("TableMarket").exists()).toBe(true);
  });
});
