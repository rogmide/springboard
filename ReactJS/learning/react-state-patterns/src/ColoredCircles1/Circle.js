import React from "react";
import "./Circle.css";

const Circle = ({ color, x, y, idx, change }) => {
  return (
    <div
      className="Circle"
      onClick={() => change(idx)}
      style={{
        backgroundColor: color,
        position: "absolute",
        top: `${y}vh`,
        left: `${x}vw`,
      }}
    >
      {idx + 1}
    </div>
  );
};

export default Circle;
