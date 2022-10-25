import "./App.css";
import EightBall from "./EightBall";
import ColorBoxes from "./ColorBoxes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <EightBall /> */}
        <ColorBoxes amt={6} />
      </header>
    </div>
  );
}

export default App;
