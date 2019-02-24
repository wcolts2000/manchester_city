import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoutes({ user, component: Comp, ...rest }) {
  return (
    <Route
      {...rest}
      to=""
      component={props =>
        user ? <Comp {...props} user={user} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default PrivateRoutes;
