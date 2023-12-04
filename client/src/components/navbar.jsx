import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../Logo.jpg";

const Navbar = () => {
  const history = useHistory();
  const signoutHandler = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{ marginBottom: "20px" }}
    >
      <a className="navbar-brand" href="https://shafiqimtiaz.github.io/">
        <img
          src={logo}
          width="50"
          height="50"
          alt="https://shafiqimtiaz.github.io/"
        />
      </a>
      <Link to="/" className="navbar-brand">
        LNMIIT
      </Link>

      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/list" className="nav-link">
              Inventory
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/update" className="nav-link">
              Restock/Use
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Items
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/remove" className="nav-link">
              Remove Items
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="text-white border border-gray-500 bg-blue-900 p-1 rounded"
          onClick={signoutHandler}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
