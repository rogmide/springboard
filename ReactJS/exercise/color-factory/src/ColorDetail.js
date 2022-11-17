import React from "react";
import { Link, useParams } from "react-router-dom";

const ColorDetail = () => {
  const { blue } = useParams();
  return (
    <div className="show-color" style={{ backgroundColor: `${blue}` }}>
      <h1>This is the Color: {blue}</h1>
      <Link exact="true" to={`/colors`}>
        <button>GO BACK!!!</button>
      </Link>
    </div>
  );
};

export default ColorDetail;
