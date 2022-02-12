import { mount, shallow } from "enzyme";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { CoinsList } from "../../../components/Coins/CoinsList";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockNavigate,
}));

describe("Pruebas en el componente <MarketList />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = mount(<CoinsList />);
    expect(wrapper.find(".container").exists()).toBe(true);
  });

  test("debe de mostrar el componente redirect si no hay argumentos en el URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/coin"]}>
        <CoinsList />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
