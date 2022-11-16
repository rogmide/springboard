import React from "react";
import "./dogs.css";

const Dogs = ({ dogs }) => {
  return (
    <div className="dogs-holder">
      {dogs.map((d) => {
        return (
          <div key={d.name} className="Dog">
            <h3>{d.name}</h3>
            {/* <h3>{d.age}</h3> */}
            <img src={d.src} alt={`Dog: ${d.name}`} />
            {/* {d.facts.map((f) => (
              <p>{f}</p>
            ))} */}
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
