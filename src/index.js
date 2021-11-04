import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

render(<Index />, document.getElementById("app"));
