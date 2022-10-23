import React from "react";
import Pokegame from "./Pokegame";
import poke_data from "./pokemon_data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokegame data={poke_data} />
    </div>
  );
}

export default App;
