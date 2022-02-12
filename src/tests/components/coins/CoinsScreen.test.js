import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { CoinsScreen } from "../../../components/Coins/CoinsScreen";

describe("pruebas en <CoinsScreen />", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("Debe mostrar los dato correctamente", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/coins/Bitcoin"]}>
        <Route path="/coins/:coinsId" component={CoinsScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find(".d-flex").exists()).toBe(true);
  });

  test("debe de regresar a la pantalla anterior con PUSH", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/coins/Bitcoin"]}>
        <Route
          path="/coins/:coinsId"
          component={() => <CoinsScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.push).toHaveBeenCalledWith("/");
    expect(history.goBack).not.toHaveBeenCalled();
  });
});
