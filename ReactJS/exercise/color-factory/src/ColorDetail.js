import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ColorDB from "./ColorDB";

const ColorDetail = () => {
  const { color } = useParams();

  const CheckForColor = () => {
    return ColorDB.findIndex((c) => c.colorName.toLowerCase() === color) === -1;
  };

  return (
    <div className="show-color" style={{ backgroundColor: `${color}` }}>
      {CheckForColor() ? (
        <Navigate exact="true" to="/colors" />
      ) : (
        <>
          <h1>This is the Color: {color}</h1>
          <Link exact="true" to={`/colors`}>
            <button>GO BACK!!!</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ColorDetail;
