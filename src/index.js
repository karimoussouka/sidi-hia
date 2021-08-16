import React,{useContext} from "react";
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

import Login from "./Login/Login";
import { Redirect } from "react-router-dom";

import {Providers,DataContext} from './Context/ContextApi';
import axios from 'axios';



axios.defaults.baseURL= "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {

    const tokens =localStorage.getItem('auth_token');
    config.headers.Authorization = tokens ? `Bearer ${tokens}` : '';
    return config;

})




const store = createStore(rootReducer);
document.title = "Skill Team";
ReactDOM.render(
  <Providers>
    <Provider store={store}>
      <React.StrictMode>
          {localStorage.getItem('auth_token')? <Layout /> : <Login />}
      </React.StrictMode>{" "}
    </Provider>
  </Providers>,
  document.getElementById("root")
);
