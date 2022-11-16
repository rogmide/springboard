import React from "react";
import "./dogs.css";
import { v4 as uuidv4 } from "uuid";

const DogDetails = ({ dog }) => {
  return (
    <div className="dogs-holder">
      <div className="Dog">
        <h3>{dog.name}</h3>
        <h3>Age: {dog.age}</h3>
        <img src={dog.src} alt={`Dog: ${dog.name}`} />
        {dog.facts.map((f) => (
          <p key={uuidv4()}>{f}</p>
        ))}
      </div>
    </div>
  );
};

export default DogDetails;
