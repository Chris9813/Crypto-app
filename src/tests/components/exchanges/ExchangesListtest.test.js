import { mount, shallow } from "enzyme";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { ExchangesList } from "../../../components/Exchanges/ExchangesList";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockNavigate,
}));

describe("Pruebas en el componente <ExchangesList />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = mount(<ExchangesList />);
    expect(wrapper.find(".container").exists()).toBe(true);
  });

  test("debe de mostrar el componente redirect si no hay argumentos en el URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/exchanges"]}>
        <ExchangesList />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
