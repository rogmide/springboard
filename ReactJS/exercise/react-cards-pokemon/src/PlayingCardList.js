import React, { useState, useEffect } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const data = useAxios(null);

  const addCard = async (clearData = false) => {
    const newData = await data.getNewData(
      `https://deckofcardsapi.com/api/deck/new/draw/`,
      clearData
    );
    setCards(newData);
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
        <button onClick={() => addCard(true)}>Remove Card</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
