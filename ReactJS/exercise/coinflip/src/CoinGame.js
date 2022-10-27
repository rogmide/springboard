import React, { useState } from "react";
import "./CoinGame.css";
import coin_Front from "./coin-Front.png";
import coin_Back from "./coin-Back.png";

const CoinGame = () => {
  const [currentImg, setCurrentImg] = useState();
  const [numFlip, setNumFlip] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);

  const flip = () => {
    let zeroOne = Math.floor(Math.random() * 2);
    if (zeroOne === 0) {
      setCurrentImg(coin_Front);
      setNumFlip(numFlip + 1);
      setFront(front + 1);
    } else {
      setCurrentImg(coin_Back);
      setNumFlip(numFlip + 1);
      setBack(back + 1);
    }
  };

  return (
    <>
      <div>
        <h1>Let's flip a coin!</h1>
        <img src={currentImg} alt="" />
      </div>
      <br></br>
      <button onClick={() => flip()}>flip</button>
      <p>
        Out of {numFlip}, there has been {front} heads and {back} tails{" "}
      </p>
    </>
  );
};

export default CoinGame;
