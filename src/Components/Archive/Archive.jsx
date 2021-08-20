import React from "react";
import { Switch } from "react-router";
import { Link } from "react-router-dom";
import StatusCard from "../Status-card/StatusCard";
import "./Archive.css";
export default function Archive() {

  document.title = "Archives";
  
  return (
    <div className="Archives">
      <h2 className="page-header">Archives</h2>
      <div className="archive-items">
          <div className="archive-card col-3">
            <Link to = "/archived-customers">
              <div className="archive-card_status">
                <h3>Archived Customers</h3>
              </div>
            </Link>
          </div>
        
            <div className="archive-card col-3">
              <Link to = "/archived-meetings">
                <div className="archive-card_status">
                  <h3>Archived Meetings</h3>
                </div>
              </Link>
            </div>

            <div className="archive-card col-3">
              <Link to = "/archived-doctors">
                <div className="archive-card_status">
                  <h3>Archived Doctors</h3>
                </div>
              </Link>
            </div>

            <div className="archive-card col-3">
              <Link to = "/archived-hospitals">
                <div className="archive-card_status">
                  <h3>Archived Hospitals</h3>
                </div>
              </Link>
            </div>

      </div>

      <Switch>
        <Link></Link>
      </Switch>
    </div>
  );
}
