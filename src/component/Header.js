import React from "react";
import {NavLink} from "react-router-dom"

export const Header= ()=>(
  <nav className="navbar navbar-dark navbar-expand-lg ">
    <div className="navbar-brand">
      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt=""/>
    </div>
    <ul className="navbar-nav nav">
      <li className="nav-item li-size">
        <NavLink
          className="nav-link"
          to="/" exact
        >
          Home
        </NavLink>

      </li>
      <li className="nav-item li-size">
        <NavLink
          className="nav-link"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item li-size">
        <NavLink
          className="nav-link"
          to="/info"
        >
          Info
        </NavLink>
      </li>
    </ul>
  </nav>
);
