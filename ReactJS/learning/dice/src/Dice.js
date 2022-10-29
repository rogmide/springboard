import React, { useState } from "react";
import Die from "./Die";
import "./Dice.css";

const Dice = ({ numDice = 6, title = "Main Game", maxVal = 20 }) => {
  // Array.from({ length: numDice }) makes a array with that lenght
  const [numbers, setNumber] = useState(Array.from({ length: numDice }));

  const rollDice = () =>
    setNumber((numbers) =>
      numbers.map((n) => Math.floor(Math.random() * maxVal + 1))
    );

  return (
    <div className="Dice">
      <h2>{title}</h2>
      <div>
        {numbers.map((num, i) => (
          <Die num={num} key={i} />
        ))}
      </div>
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};

export default Dice;
