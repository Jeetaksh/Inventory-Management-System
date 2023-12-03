import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./navbar";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem("user");
  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  console.log(user);

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Component />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}
