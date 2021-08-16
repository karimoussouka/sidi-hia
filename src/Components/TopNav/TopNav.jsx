import React from "react";
import "./TopNav.css";
import DropDown from "../DropDown/DropDown";
import notifications from "../../Assets/JsonData/notification.json";
import { Link } from "react-router-dom";

import user_image from "../../Assets/images/tuat.jpg";

import user_menu from "../../Assets/JsonData/user_menus.json";
import Theme__menu from "../Themes_Menu/Theme__menu";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const renderNotiicationItem = (item, index) => (
  <div className="notifications-item" key={index}>
    {<i className={item.icon}></i>}
    <span>{item.content}</span>
  </div>
);

const curr_user = {
  display_name: "Tuat Tran",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav___right-user">
    <div className="topnav___right-user_image">
      <img src={user.image} alt="" />{" "}
    </div>
    <div className="topnav___right-user_name">{user.display_name}</div>
  </div>
);
const renderUserMenu = (item, index) => (
  <Link to="./" key={index}>
    <div className="notifications-item">
      {<i className={item.icon}></i>}
      <span>Logout</span>
    </div>
  </Link>
);



const TopNav = () => {

  const history = useHistory();
  const logoutSubmit = (e) => {
      e.preventDefault();
      
      axios.post('/api/logout').then(res =>{
          if(res.data.status === 200)
          {
              localStorage.removeItem('auth_token',res.data.token);
              localStorage.removeItem('auth_name',res.data.name);
              swal("Success",res.data.message,"success");
              history.push('/');
              document.location.reload();
          }
      })
  }


  return (
    <div className="topnav">
      <div className="topnavp__search">

      </div>

      <div className="topnav__right">
      <div className="topnav__right-item">
          <i onClick={logoutSubmit} className="bx bx-log-out-circle bx-rotate-180"></i>
      </div>
        <div className="topnav__right-item">
          <DropDown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />

          {/*  dropdown here */}
        </div>
        <div className="topnav__right-item">
          <DropDown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotiicationItem(item, index)}
            renderFooter={() => <Link to="./">View All</Link>}
          />
          {/*  dropdown here */}
        </div>
        <div className="topnav__right-item">
          <Theme__menu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
