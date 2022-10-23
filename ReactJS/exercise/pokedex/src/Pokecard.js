import React from "react";
import "./Pokecard.css";

const Pokecard = ({ pokemon }) => {
  return (
    <div className="pokecard">
      <h3 className="pokecard-name">{pokemon.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  );
};

export default Pokecard;
