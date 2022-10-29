import React, { useState } from "react";
import "./Circle.css";
import { randomNumber } from "./healper";

const Circle = ({ color, idx }) => {
  const [pos, setPos] = useState({ x: randomNumber(), y: randomNumber() });
  return (
    <div
      className="Circle"
      onClick={() => setPos({ x: randomNumber(), y: randomNumber() })}
      style={{
        backgroundColor: color,
        position: "absolute",
        top: `${pos.y}vh`,
        left: `${pos.x}vw`,
      }}
    >
      {idx + 1}
    </div>
  );
};

export default Circle;
