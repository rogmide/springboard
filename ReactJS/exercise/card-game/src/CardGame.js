import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import "./CardGame.css";

const CardGame = () => {
  return (
    <div id="card_container" className="container">
      <button id="btn_gimme_card" className="btn btn-success">
        GIMME A CARD
      </button>
      <Card />
    </div>
  );
};

export default CardGame;
