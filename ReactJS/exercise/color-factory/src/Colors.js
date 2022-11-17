import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, Route } from "react-router-dom";
import ColorDB from "./ColorDB";

const Colors = () => {
  const [colors, setColors] = useState(ColorDB);

  const addColor = (e, newColor) => {
    setColors((c) => [...c, newColor]);
    alert();
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
        {/* Working in trying to pass the function down to the FORM */}
        <Route exact="true" to={`/colors/new`} state={{ add: addColor }}>
          Add Color
        </Route>
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
