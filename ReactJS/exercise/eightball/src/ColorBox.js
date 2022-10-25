import React, { useState } from "react";
import randomColor from "./helpers";
import "./ColorBox.css";

const ColorBox = () => {
  const [bColor, setBColor] = useState(randomColor());
  const [isChange, setIsChange] = useState(false);
  return (
    <>
      <div className="ColorBox_Holder">
        <div className="ColorBox" style={{ backgroundColor: bColor }}>
          {!isChange ? null : <p>“changed!”</p>}
        </div>
        <button
          className="ColorBox_buttom"
          onClick={() => {
            setBColor(randomColor());
            setIsChange(true);
          }}
          onMouseLeave={() => {
            setIsChange(false);
          }}
        >
          Change
        </button>
      </div>
    </>
  );
};

export default ColorBox;
