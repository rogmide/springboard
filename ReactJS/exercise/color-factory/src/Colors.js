import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";
import ColorDB from "./ColorDB";

const Colors = () => {
  const [colors, setColors] = useState(ColorDB);
  const location = useLocation();

  useEffect(() => {
    if (!location.state) return;
    addColor();
  }, [location.state]);

  const addColor = () => {
    ColorDB.push({
      colorName: location.state.colorName,
      color: location.state.color,
    });
    setColors(ColorDB);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "#262626", color: "White", padding: "20px" }}
      >
        <h1>Welcome to the color factory</h1>
        {/* Working in trying to pass the function down to the FORM */}
        <Link to="/colors/new">Add Color</Link>
      </div>
      {colors.map((c) => (
        <Link
          key={uuidv4()}
          exact="true"
          to={`/colors/${c.colorName.toLowerCase()}`}
        >
          <h3>{c.colorName}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Colors;
