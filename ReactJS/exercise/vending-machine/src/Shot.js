import React, { useState } from "react";
import "./Shot.css";
import background from "./coffe-shot.png";

const Shot = ({ idx }) => {
  const randomNumber = () => {
    return Math.random() * 100 + 1;
  };
  const [pos, setPos] = useState({ x: randomNumber(), y: randomNumber() });
  return (
    <div
      className="Shot"
      onClick={() => setPos({ x: randomNumber(), y: randomNumber() })}
      style={{
        backgroundImage: `url(${background})`,
        position: "absolute",
        top: `${pos.y}vh`,
        left: `${pos.x}vw`,
      }}
    >
      {/* {idx + 1} */}
    </div>
  );
};

export default Shot;
