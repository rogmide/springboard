import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return (
    <ul className="NavBar">
      <Link exact="true" to="/">
        Home
      </Link>
      {dogs.map((d) => (
        <Link key={d.name} exact="true" to={`/${d.name}`}>
          {d.name}
        </Link>
      ))}
    </ul>
  );
}

export default Nav;
