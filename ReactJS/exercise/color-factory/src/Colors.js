import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import ColorDB from "./ColorDB";

const Colors = () => {
  const [colors, setColors] = useState(ColorDB);

  return (
    <div>
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
