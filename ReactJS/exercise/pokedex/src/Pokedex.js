import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ data }) => {
  return (
    <div className="pokedex" key="main-pokedex">
      <div>
        <h1 style={{ color: "#aaaaaa" }}> Pokedex </h1>
        <div className="pokedex-holder">
          {data.map((p) => (
            <Pokecard pokemon={p} id={p.id} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
