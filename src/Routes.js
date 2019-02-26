import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";
import AddEditMatch from "./components/admin/matches/AddEditMatch";
import AdminPlayers from "./components/admin/players";
import AddEditPlayers from "./components/admin/players/AddEditPlayers";
import PrivateRoute from "./components/authRoutes/PrivateRoutes";
import PublicRoute from "./components/authRoutes/PublicRoutes";
import Home from "./components/home";
import SignIn from "./components/signin";
import TheMatches from "./components/theMatches";
import TheTeam from "./components/theTeam";
import Layout from "./HOC/Layout";

const Routes = props => (
  <Layout>
    <Switch>
      <PrivateRoute
        exact
        path="/admin_players/add_players"
        {...props}
        component={AddEditPlayers}
      />
      <PrivateRoute
        exact
        path="/admin_players/add_players/:id"
        {...props}
        component={AddEditPlayers}
      />
      <PrivateRoute
        exact
        path="/admin_players"
        {...props}
        component={AdminPlayers}
      />
      <PrivateRoute
        exact
        path="/admin_matches/edit_match"
        {...props}
        component={AddEditMatch}
      />
      <PrivateRoute
        exact
        path="/admin_matches/edit_match/:id"
        {...props}
        component={AddEditMatch}
      />
      <PrivateRoute
        exact
        path="/admin_matches/add_match"
        {...props}
        component={AddEditMatch}
      />
      <PrivateRoute
        exact
        path="/admin_matches"
        {...props}
        component={AdminMatches}
      />
      <PrivateRoute exact path="/dashboard" {...props} component={Dashboard} />
      <PublicRoute
        exact
        path="/signin"
        restricted={true}
        {...props}
        component={SignIn}
      />
      <PublicRoute
        exact
        path="/the_team"
        restricted={false}
        {...props}
        component={TheTeam}
      />
      <PublicRoute
        exact
        path="/the_matches"
        restricted={false}
        {...props}
        component={TheMatches}
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
