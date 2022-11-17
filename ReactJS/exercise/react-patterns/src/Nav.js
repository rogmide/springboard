import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { v4 as uuidv4 } from "uuid";

function Nav({ dogs }) {
  return (
    <ul className="NavBar">
      <Link key={uuidv4()} exact="true" to="/">
        Dogs
      </Link>
      {dogs.map((d) => (
        <Link key={uuidv4()} exact="true" to={`/${d.name.toLowerCase()}`}>
          {d.name}
        </Link>
      ))}
    </ul>
  );
}

export default Nav;
