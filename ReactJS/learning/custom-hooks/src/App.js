import "./App.css";
import MoodClicker from "./MoodClicker";
import Counter from "./Counter";
import ColorPiker from "./ColorPiker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorPiker />
        <Counter />
        <MoodClicker />
      </header>
    </div>
  );
}

export default App;
