import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";
import Meetings from "../Pages/Meetings";
import Doctors from "../Pages/Doctors";
import Hospitals from "../Pages/Hospital";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Customers" component={Customers} />
      <Route path="/Meetings" component={Meetings} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/hospitals" component={Hospitals} />
    </Switch>
  );
};

export default Routes;
