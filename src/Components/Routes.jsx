import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard.jsx";
import Customers from "../Pages/Customers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Customers" component={Customers} />
    </Switch>
  );
};

export default Routes;
