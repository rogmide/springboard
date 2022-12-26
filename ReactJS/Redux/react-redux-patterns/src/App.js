import "./App.css";
import Math from "./Math/Math";
import NumberInput from "./Math/NumberInput";
import Counter from "./Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Math />
        <NumberInput />
        <Counter />
      </header>
    </div>
  );
}

export default App;
