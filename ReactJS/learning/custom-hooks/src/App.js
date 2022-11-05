import "./App.css";
import MoodClicker from "./MoodClicker";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <MoodClicker />
      </header>
    </div>
  );
}

export default App;
