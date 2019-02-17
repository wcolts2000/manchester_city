import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Layout from "./HOC/Layout";

const Routes = props => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Layout>
);

export default Routes;
