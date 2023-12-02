import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Information from "./components/home";
import List from "./components/inventory-list";
import Update from "./components/modify-list";
import Create from "./components/create-item";
import Remove from "./components/remove-item";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedroutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" exact component={Information} />
      {/* <Route path="/" exact component={Information} /> */}
      <Route path="/list" exact component={List} />
      <Route path="/update/" component={Update} />
      <Route path="/create/" component={Create} />
      <Route path="/remove/" component={Remove} />
    </Router>
  );
}

export default App;
