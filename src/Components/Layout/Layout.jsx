import React, { useEffect } from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import Routes from "../Routes";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../Redux/Actions/ThemeAction";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

<<<<<<< HEAD
  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() =>{
    const themeClass = localStorage.getItem('themeMode' , 'theme-mode-light');
    const colorClass = localStorage.getItem('colorMode' , 'theme-mode-light');
=======
  const dispatch = useDispatch();
>>>>>>> f5333be988029f2c406921b81fdcaeda67c1e55a

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Layout;
