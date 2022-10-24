import React, { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
  const genRandom = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
  // guess and target variable are unchange until a event happen
  const [guess, setGuess] = useState(genRandom());
  const [target, setTarget] = useState(genRandom());
  const [count, setCount] = useState(0);
  const isWinner = target === guess;
  return (
    <div className="NumberGame">
      <h1>Target Num: {target}</h1>
      <h1 className={isWinner ? "winner" : "loser"}>Your Guess: {guess}</h1>
      {/* Nice way to hide something */}
      {!isWinner && (
        <button
          onClick={() => {
            setGuess(genRandom());
            setCount(count + 1);
          }}
        >
          Generate Num
        </button>
      )}
      <h1>Guess Times: {count}</h1>

      {isWinner && (
        <button
          onClick={() => {
            setTarget(genRandom());
            setGuess(0);
            setCount(0);
          }}
        >
          New Game
        </button>
      )}
    </div>
  );
};

export default NumberGame;
