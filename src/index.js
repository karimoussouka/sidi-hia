import React from "react";
import ReactDOM from "react-dom";
import "./Assets/boxicons-2.0.9/css/boxicons.min.css";
import rootReducer from "./Redux/Reducers/index";
import "./Assets/css/grid.css";
import "./Assets/css/theme.css";

import "./Assets/css/index.css";
import Layout from "./Components/Layout/Layout";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
document.title = "Tua CRM";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>{" "}
  </Provider>,
  document.getElementById("root")
);
