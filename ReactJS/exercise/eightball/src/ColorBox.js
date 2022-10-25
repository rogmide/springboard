import React, { useState } from "react";
import randomColor from "./helpers";
import "./ColorBox.css";

const ColorBox = () => {
  const [bColor, setBColor] = useState(randomColor());
  return (
    <>
      <div className="ColorBox_Holder">
        <div className="ColorBox" style={{ backgroundColor: bColor }}></div>
        <button
          className="ColorBox_buttom"
          onClick={() => {
            setBColor(randomColor());
          }}
        >
          Change
        </button>
      </div>
    </>
  );
};

export default ColorBox;
