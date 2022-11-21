import React, { useEffect } from "react";
import { Link, useParams, Navigate, useLocation } from "react-router-dom";
import ColorDB from "./ColorDB";
import "./ColorDetail.css";

const ColorDetail = () => {
  const { color } = useParams();
  const location = useLocation();

  const CheckForColor = () => {
    return ColorDB.findIndex((c) => c.colorName.toLowerCase() === color) === -1;
  };

  return (
    <div
      className="show-color"
      style={{ backgroundColor: `${location.state.bColor}` }}
    >
      {CheckForColor() ? (
        <Navigate exact="true" to="/colors" />
      ) : (
        <>
          <h1>THIS IS {color.toUpperCase()}</h1>
          <h1>ISN'T IT BEAUTIFUL?</h1>
          <Link exact="true" to={`/colors`}>
            <button>GO BACK!!!</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ColorDetail;
