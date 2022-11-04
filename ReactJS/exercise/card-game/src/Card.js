import React, { useState, useRef, useEffect } from "react";
import "./Card.css";

const Card = ({ src }) => {
  return (
    <div id="card_holder" className="card_holder">
      <img
        src={src}
        alt="Card Img"
        style={{ transform: `rotate(${Math.random() * 360}deg)` }}
      ></img>
    </div>
  );
};

export default Card;
