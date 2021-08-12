import React from "react";
import StatusCard from "../Components/Status-card/StatusCard";
import statusCards from "../Assets/JsonData/status-card-data.json";
import { objectMethod } from "@babel/types";

const Dashboard = () => {
  return (
    <div>
      <h2 className="pag-header">Dahsboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
