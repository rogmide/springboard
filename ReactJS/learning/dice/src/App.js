import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} />
      <Dice numDice={6} maxVal={10} title="6x10" />
    </div>
  );
}

export default App;
