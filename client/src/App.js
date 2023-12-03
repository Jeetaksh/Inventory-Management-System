import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./components/navbar";
import Information from "./components/home";
import List from "./components/inventory-list";
import Update from "./components/modify-list";
import Create from "./components/create-item";
import Remove from "./components/remove-item";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedroutes";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      {/* {pathname !== "/login" && <Navbar />} */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute path="/" exact component={Information} />
      {/* <Route path="/" exact component={Information} /> */}
      <ProtectedRoute path="/list" exact component={List} />
      <ProtectedRoute path="/update/" component={Update} />
      <ProtectedRoute path="/create/" component={Create} />
      <ProtectedRoute path="/remove/" component={Remove} />
    </Router>
  );
}

export default App;
