import React, { useEffect,useContext } from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import Routes from "../Routes";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../Redux/Actions/ThemeAction";

import {Providers,DataContext} from '../../Context/ContextApi';
import Login from '../../Login/Login';

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  const {token}  = useContext(DataContext);

  

  
  return (
     
      <BrowserRouter> 
      {localStorage.getItem('auth_token')===token.auth_token ?
        <Route
          render={(props) => (
            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
              <SideBar {...props} />
              <div className="layout_content">
                <TopNav />
                <div className="layout_content-main">
                  <Routes />
                </div>
              </div>
            </div>
          )}
        />
      :<Login />}
      </BrowserRouter>

  );
};

export default Layout;
