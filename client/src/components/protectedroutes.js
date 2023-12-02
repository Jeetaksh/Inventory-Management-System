import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = false;

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}
