import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Home from "./components/home";
import SignIn from "./components/signin";
import Layout from "./HOC/Layout";

const Routes = props => (
  <Layout>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Layout>
);

export default Routes;
