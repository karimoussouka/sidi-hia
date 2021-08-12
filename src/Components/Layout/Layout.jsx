import React from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import Routes from "../Routes";
import { BrowserRouter, Route } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
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
