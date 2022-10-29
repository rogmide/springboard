import React, { useState } from "react";
import Circle from "./Circle";
import { randomColor, randomNumber } from "./healper";

const ColorCircles = () => {
  const [cirlces, setCircles] = useState([]);
  const addCircle = () => {
    // We can make a copy and pass that to the useState and trigger a re-render
    setCircles((cirlces) => [...cirlces, randomColor()]);
  };

  return (
    <>
      <br></br>
      <button onClick={addCircle}>Add Circle</button>
      <br></br>
      <div>
        {cirlces.map((c, idx) => (
          <Circle key={idx} idx={idx} color={c} />
        ))}
      </div>
    </>
  );
};

export default ColorCircles;
