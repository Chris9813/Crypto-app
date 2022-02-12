import { shallow } from "enzyme";
import { RouterApp } from "../../routers/RouterApp";

describe("pruebas en el <RouterApp />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(<RouterApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
