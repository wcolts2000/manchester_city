import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";
import PrivateRoute from "./components/authRoutes/PrivateRoutes";
import PublicRoute from "./components/authRoutes/PublicRoutes";
import Home from "./components/home";
import SignIn from "./components/signin";
import Layout from "./HOC/Layout";

const Routes = props => (
  <Layout>
    <Switch>
      <PrivateRoute exact path="/dashboard" {...props} component={Dashboard} />
      <PrivateRoute
        exact
        path="/admin_matches"
        {...props}
        component={AdminMatches}
      />
      <PublicRoute
        exact
        path="/signin"
        restricted={true}
        {...props}
        component={SignIn}
      />
      <PublicRoute
        exact
        path="/"
        restricted={false}
        {...props}
        component={Home}
      />
    </Switch>
  </Layout>
);

export default Routes;
