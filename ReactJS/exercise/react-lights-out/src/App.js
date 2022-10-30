import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div>
      <Board nrows={5} ncols={5} />
      {/* <Board /> */}
    </div>
  );
}

export default App;
