import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact="true" to="/">
        Home
      </NavLink>
      <NavLink exact="true" to="/eat">
        Eat
      </NavLink>
      <NavLink exact="true" to="/drink">
        Drink
      </NavLink>
    </nav>
  );
}

export default NavBar;
