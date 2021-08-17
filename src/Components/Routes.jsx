import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";
import Meetings from "../Pages/Meetings";
import Doctors from "../Pages/Doctors";
import Hospitals from "../Pages/Hospital";
import AddCustomer from "../Pages/Add-Customer";
import Edit_Customer from "../Pages/Edit_Customer";
import AddMeeting from "../Pages/Add-Meeting";
import Archive from "./Archive/Archive";
import Edit_Meeting from "../Pages/Edit_Meeting";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Customers" component={Customers} />
      <Route path="/Meetings" component={Meetings} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/hospitals" component={Hospitals} />
      <Route path="/add-customer" component={AddCustomer} />
      <Route path="/add-meeting" component={AddMeeting} />
      <Route path="/edit-customer/:cin" component={Edit_Customer} />
      <Route path="/edit-meeting/:customer" component={Edit_Meeting} />
      <Route path="/archive" component={Archive} />
    </Switch>
  );
};

export default Routes;
