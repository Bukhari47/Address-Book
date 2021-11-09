import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Users Card Should Be displayed", () => {
  it("Display user card", () => {
    const store = mockStore({
      startup: { complete: false },
    });
    const userCard = renderer.create(
      <Provider>
        <App store={store} />
      </Provider>
    );
    expect(userCard).toMatchSnapshot();
  });
});
