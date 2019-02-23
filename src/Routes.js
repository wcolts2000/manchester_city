import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/signin";
import Layout from "./HOC/Layout";

const Routes = props => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  </Layout>
);

export default Routes;
