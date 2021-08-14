import React,{useEffect} from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import Routes from "../Routes";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import ThemeAction from '../../Redux/Actions/ThemeAction'


const Layout = () => {

  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() =>{
    const themeClass = localStorage.getItem('themeMode' , 'theme-mode-light');
    const colorClass = localStorage.getItem('colorMode' , 'color-mode-light');

    dispatch(ThemeAction.setMode(themeClass))

    dispatch(ThemeAction.setColor(colorClass))

    console.log('====================================');
    console.log(themeReducer.mode);
    console.log('====================================');
    console.log('====================================');
    console.log(themeReducer.color);
    console.log('====================================');
  },[dispatch])

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode}`}>
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
