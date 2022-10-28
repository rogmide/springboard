import React, { useState } from "react";
import Circle from "./Circle";

const ColorCircles = () => {
  const [cirlces, setCircles] = useState([
    "cornflowerblue",
    "peachpuff",
    "green",
  ]);
  const addCircle = () => {
    // We can make a copy and pass that to the useState and trigger a re-render
    setCircles((cirlces) => [...cirlces, "magenta"]);
  };
  return (
    <div>
      {cirlces.map((c, idx) => (
        <Circle key={idx} idx={idx} color={c} />
      ))}
      <button onClick={addCircle}>ADD</button>
    </div>
  );
};

export default ColorCircles;
