import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import "./CardGame.css";
import { v4 as uuidv4 } from "uuid";

const CardGame = () => {
  const INITIAL_STATE = [
    // default box to work with app
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1588699219474-fce022b9f633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    },
  ];

  const [currDeck, setCurrDeck] = useState(INITIAL_STATE);
  const [deckUrl, setDeckUrl] = useState(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
  );

  //   useEffect(() => {
  //     async function loadDeck() {
  //       const res = await axios.get(deckUrl);
  //       setCurrDeck(res.data.cards[0].image);
  //     }
  //     loadDeck();
  //     // Clean function is basaclly returning a function
  //     // on the useEffect Scoope
  //     // return () => console.log("Cleanning Up");
  //   }, [deckUrl]);

  return (
    <div id="card_container" className="container">
      <button id="btn_gimme_card" className="btn btn-success">
        GIMME A CARD
      </button>

      {currDeck.map((cd) => (
        <div key={cd.id}>
          <Card src={cd.src} />
        </div>
      ))}
    </div>
  );
};

export default CardGame;
