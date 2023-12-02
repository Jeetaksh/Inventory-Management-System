import React from "react";
import { Route } from "react-router-dom";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem("user");
  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  console.log(user);

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}
