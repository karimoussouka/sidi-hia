import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";
import Meetings from "../Pages/Meetings";
import Doctors from "../Pages/Doctors";
import Hospitals from "../Pages/Hospital";
import Archive from "./Archive/Archive";

const Routes = () => {
  return (
    <Switch>
      <Route path="/sidi-hia" exact component={Dashboard} />
      <Route path="/sidi-hia/Customers" component={Customers} />
      <Route path="/sidi-hia/Meetings" component={Meetings} />
      <Route path="/sidi-hia/doctors" component={Doctors} />
      <Route path="/sidi-hia/hospitals" component={Hospitals} />
      <Route path="/sidi-hia/archive" component={Archive} />
    </Switch>
  );
};

export default Routes;
