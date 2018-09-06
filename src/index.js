import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Component1 from "./components/component1";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import Component2 from "./components/component2";

const initialState = {
  name: "Max"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {
        ...state,
        name: action.username
      };
      break;
  }
  return state;
};

const store = createStore(user);

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <App />
      <Component1 />
      <Component2 />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
