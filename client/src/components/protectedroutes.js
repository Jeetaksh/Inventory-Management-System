import React from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = false;

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Navigate to="/login" />}
    </Route>
  );
}
