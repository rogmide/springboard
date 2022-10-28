import React, { useState } from "react";
import Circle from "./Circle";
import { randomColor, randomNumber } from "./healper";

const ColorCircles = () => {
  const [cirlces, setCircles] = useState([]);
  const addCircle = () => {
    // We can make a copy and pass that to the useState and trigger a re-render
    setCircles((cirlces) => [
      ...cirlces,
      { color: randomColor(), x: randomNumber(), y: randomNumber() },
    ]);
  };

  //   const changePosition = (idx) => {
  //     setCircles((cirlces) => {
  //       const copy = [...cirlces];
  //       copy[idx].x = randomNumber();
  //       copy[idx].y = randomNumber();
  //       return copy;
  //     });
  //   };

  const changePosition = (idx) => {
    setCircles((cirlces) =>
      cirlces.map((c, i) =>
        i === idx ? { ...c, x: randomNumber(), y: randomNumber() } : c
      )
    );
  };

  return (
    <>
      <br></br>
      <button onClick={addCircle}>Add Circle</button>
      <br></br>
      <div>
        {cirlces.map((c, idx) => (
          <Circle
            key={idx}
            idx={idx}
            color={c.color}
            x={c.x}
            y={c.y}
            change={changePosition}
          />
        ))}
      </div>
    </>
  );
};

export default ColorCircles;
