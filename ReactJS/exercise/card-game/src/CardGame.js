import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import "./CardGame.css";
import { v4 as uuidv4 } from "uuid";

const CardGame = () => {
  const INITIAL_STATE = [];
  const deckId = useRef();
  const [currDeck, setCurrDeck] = useState(INITIAL_STATE);
  const [deckUrl, setDeckUrl] = useState(
    `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
  );

  const gimeCard = () => {
    async function getCard() {
      const res = await axios.get(deckUrl);

      if (res.data.remaining != 0) {
        setCurrDeck((cDeck) => [
          ...cDeck,
          { src: res.data.cards[0].image, id: uuidv4() },
        ]);
        deckId.current = res.data.deck_id;
        setDeckUrl(
          `https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`
        );
        console.log(deckId.current);
        console.log(res.data.remaining);
      } else {
        setCurrDeck(INITIAL_STATE);
        deckId.current = "new";
        setDeckUrl(
          `https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`
        );
        alert("Error: no cards remaining!");
      }
    }
    getCard();
  };

  const getShuffleDeck = () => {
    async function getDeck() {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId.current}/shuffle/?remaining=true`
      );
      alert(`Only ${res.data.remaining - 1} card left on the deck!`);
      setCurrDeck([]);
    }
    getDeck();
  };

  return (
    <div id="card_container" className="container">
      <button
        onClick={gimeCard}
        id="btn_gimme_card"
        className="btn btn-success"
      >
        GIMME A CARD
      </button>

      <button
        onClick={getShuffleDeck}
        id="btn_gimme_card"
        className="btn btn-success"
      >
        Shuffle A DECK
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
