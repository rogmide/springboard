import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return (
    <ul className="NavBar">
      <Link key="home123123" exact="true" to="/">
        Dogs
      </Link>
      {dogs.map((d) => (
        <Link key={d.name} exact="true" to={`/${d.name.toLowerCase()}`}>
          {d.name}
        </Link>
      ))}
    </ul>
  );
}

export default Nav;
