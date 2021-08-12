import React from "react";
import "./TopNav.css";
import DropDown from "../DropDown/DropDown";
import notifications from "../../Assets/JsonData/notification.json";
import { Link } from "react-router-dom";

import user_image from "../../Assets/images/tuat.jpg";

import user_menu from "../../Assets/JsonData/user_menus.json";

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
      <span> {item.content}</span>
    </div>
  </Link>
);
const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnavp__search">
        <input type="text" placeholder="Srearch here...." />
        <i className="bx bx-search"></i>
      </div>

      <div className="topnav__right">
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
          <DropDown />
          {/*  Theme setting */}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
