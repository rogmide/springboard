import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import ColorDB from "./ColorDB";

const Colors = () => {
  const [colors, setColors] = useState(ColorDB);

  const addColor = (newColor) => {
    setColors((c) => [...c, newColor]);
  };

  //   const addItem = (newItem) => {
  //     setItem((item) => [...item, { ...newItem, id: uuidv4() }]);
  //   };

  return (
    <div>
      <div
        style={{ backgroundColor: "#262626", color: "White", padding: "20px" }}
      >
        <h1>Welcome to the color factory</h1>
        <button onClick={addColor}>Add a color</button>
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
