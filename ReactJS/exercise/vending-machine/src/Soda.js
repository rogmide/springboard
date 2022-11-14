import React from "react";
import "./Soda.css";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div className="img-holder">
      <br></br>
      <h1>Nice Cool Soda</h1>
      <Link exact="true" to="/">
        Home
      </Link>
    </div>
  );
};

export default Soda;
