import React from "react";

const ButtonGroup = () => {
  const printColor = (color) => {
    console.log(`You Click Color: ${color}`);
  };
  return (
    <div>
      {/* Passing Arguments use a inline arrow function so is not invoke right away */}
      <button onClick={() => printColor("Red")}>Red</button>
      <button onClick={() => printColor("Green")}>Green</button>
      <button onClick={() => printColor("Yellow")}>Yellow</button>
    </div>
  );
};

export default ButtonGroup;
