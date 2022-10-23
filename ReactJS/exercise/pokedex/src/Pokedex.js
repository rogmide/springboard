import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ data }) => {
  return (
    <div key="main-pokedex">
      <h1> Pokedex </h1>
      {data.map((p) => (
        <Pokecard pokemon={p} id={p.id} key={p.id} />
      ))}
    </div>
  );
};

export default Pokedex;
