import React from "react";
import "./dogs.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Dogs = ({ dogs }) => {
  return (
    <div className="dogs-holder">
      {dogs.map((d) => {
        return (
          <div key={uuidv4()} className="Dog">
            <Link key={d.name} exact="true" to={`/${d.name.toLowerCase()}`}>
              <h3>{d.name}</h3>
              <img src={d.src} alt={`Dog: ${d.name}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
