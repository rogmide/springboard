import React, { useState } from "react";
import "./EightBall.css";
import Answers from "./Answers";

const EightBall = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [goldenrod, setGoldenrod] = useState(0);
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const randAnswers = Answers.sort(() => 0.5 - Math.random());
  const display_msg = () => {
    setMsg(randAnswers[0].msg);
    setColor(randAnswers[0].color);
    if (randAnswers[0].color === "red") setRed(red + 1);
    if (randAnswers[0].color === "green") setGreen(green + 1);
    if (randAnswers[0].color === "goldenrod") setGoldenrod(goldenrod + 1);
  };
  return (
    <>
      <p>
        <div
          onMouseOver={() => {
            setRed(0);
          }}
          style={{ color: "red" }}
        >
          {red}
        </div>{" "}
        <div
          onMouseOver={() => {
            setGreen(0);
          }}
          style={{ color: "green" }}
        >
          {green}
        </div>{" "}
        <div
          onMouseOver={() => {
            setGoldenrod(0);
          }}
          style={{ color: "goldenrod" }}
        >
          {" "}
          {goldenrod}{" "}
        </div>
      </p>
      <div
        className="EightBall"
        style={{ backgroundColor: color }}
        onClick={() => display_msg()}
      >
        <p className="EightBall-msg">{msg}</p>
      </div>
      <button
        onClick={() => {
          setMsg("Think of a Question");
          setColor("black");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default EightBall;
