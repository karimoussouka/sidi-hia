import React, {useState , useEffect,useContext } from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import Routes from "../Routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../Redux/Actions/ThemeAction";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"; 



import {Providers,DataContext} from '../../Context/ContextApi';
import Login from '../../Login/Login';


const Layout = () => {

  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  const [loading , setLoading] = useState(false);

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));

    setLoading(true);

    setTimeout(() => {
      setLoading(false);  
    },2000)
  }, [dispatch]); 

  const {token}  = useContext(DataContext);

  

  
  return (

     
      <Router> 
       {
        loading ? 
         <div className = "Loading">
          <ClimbingBoxLoader size = {30} color = {"#000000"} loading = {loading}  /> 
         </div>
         :

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
           }
      </Router>

  );
};

export default Layout;
