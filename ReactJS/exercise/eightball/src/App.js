import "./App.css";
import EightBall from "./EightBall";
import ColorBoxes from "./ColorBoxes";
import { useState } from "react";

function App() {
  const [numBox, setNumBox] = useState(Math.floor(Math.random() * 16));
  return (
    <div className="App">
      <header className="App-header">
        <EightBall />
        <ColorBoxes amt={numBox} />
      </header>
    </div>
  );
}

export default App;
