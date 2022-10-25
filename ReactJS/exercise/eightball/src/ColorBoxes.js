import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

const ColorBoxes = ({ amt }) => {
  let numBox = [];
  for (let i = 0; i < amt; i++) {
    numBox.push(i);
  }
  return (
    <>
      <div className="ColorBoxes">
        {numBox.map((id) => (
          <ColorBox id={id} key={id} />
        ))}
      </div>
    </>
  );
};

export default ColorBoxes;
