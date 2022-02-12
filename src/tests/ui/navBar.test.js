import { mount, shallow } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../components/ui/NavBar";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  NavLink: () => mockNavigate,
}));

describe("Pruebas es en componente navBar", () => {
  const wrapper = shallow(<Navbar />);

  test("debe de mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
