import React from "react";
import { Link } from "react-router-dom";

function Nav2() {
  return (
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <Link exact to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link exact to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link exact to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link exact to="/blargh">
          Broken Link
        </Link>
      </li>
    </ul>
  );
}

export default Nav2;
