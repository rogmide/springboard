import React, { useState, useRef, useEffect } from "react";
import "./Card.css";

const Card = () => {
  const src =
    "https://images.unsplash.com/photo-1618304925090-b68a8c744cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

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
