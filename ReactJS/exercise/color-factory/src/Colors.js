import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";
import ColorDB from "./ColorDB";

const Colors = () => {
  const [colors, setColors] = useState(ColorDB);
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) return;
    addColor();
  }, [location]);

  const addColor = () => {
    setColors((c) => [
      ...c,
      { colorName: location.state.colorName, color: location.state.color },
    ]);
    ColorDB.push({
      colorName: location.state.colorName,
      color: location.state.color,
    });
    location.state.colorName = "";
    location.state.color = "";
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
          state={{ bColor: c.color }}
        >
          <h3>{c.colorName}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Colors;
