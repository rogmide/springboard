import React from "react";
import Pokedex from "./Pokedex";
import poke_data from "./pokemon_data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokedex data={poke_data} />
    </div>
  );
}

export default App;
