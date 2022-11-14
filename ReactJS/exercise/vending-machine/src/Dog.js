import React from "react";
import { Link } from "react-router-dom";
import "./Dog.css";

const Dog = () => {
  return (
    <div>
      <div className="img-holder-dog">
        <br></br>
        <h1>Dogs Are So Nice</h1>
        <p>Not available in a vendor machine sorry.</p>
        <Link exact="true" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Dog;
