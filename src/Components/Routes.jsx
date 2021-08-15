import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";
import Meetings from "../Pages/Meetings";
import Doctors from "../Pages/Doctors";
import Hospitals from "../Pages/Hospital";
import AddCustomer from '../Pages/Add-Customer'
import Edit_Customer from "../Pages/Edit_Customer";
import Grid from "./Table/Grid";
import AddMeeting from "../Pages/Add-Meeting";

const Routes = () => {
  return (
    <Switch>
      <Route path="/sidi-hia" exact component={Dashboard} />
      <Route path="/sidi-hia/Customers" component={Customers} />
      <Route path="/sidi-hia/Meetings" component={Meetings} />
      <Route path="/sidi-hia/doctors" component={Doctors} />
      <Route path="/sidi-hia/hospitals" component={Hospitals} />
      <Route path="/add-customer" component={AddCustomer} />
      <Route path="/add-meeting" component={AddMeeting} />
      <Route path = "/edit-customer/:cin" component = {Edit_Customer} />
      <Route path = "/grid" component = {Grid} />
    </Switch>
  );
};

export default Routes;
