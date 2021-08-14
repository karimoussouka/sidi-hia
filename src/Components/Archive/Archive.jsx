import React from "react";
import { Switch } from "react-router";
import { Link } from "react-router-dom";
import StatusCard from "../Status-card/StatusCard";
import "./Archive.css";
export default function Archive() {
  return (
    <div className="Archives">
      <h2 className="page-header">Archives</h2>
      <div className="archive-items">
        <div className="archive-card col-3">
          <div className="archive-card_status">
            <h1>Archived Customers</h1>
          </div>
        </div>
        <div className="archive-card col-3">
          <div className="archive-card_status">
            <h1>Archived Meetings</h1>
          </div>
        </div>
        <div className="archive-card col-3">
          <div className="archive-card_status">
            <h1>Archived Doctors</h1>
          </div>
        </div>
        <div className="archive-card col-3">
          <div className="archive-card_status">
            <h1>Archived Hospitals</h1>
          </div>
        </div>
      </div>

      <Switch>
        <Link></Link>
      </Switch>
    </div>
  );
}
