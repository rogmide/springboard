import Counter from "./Counter";
import "./App.css";
import CounterTwo from "./CounterTwo";

function App() {
  return (
    <div className="App">
      <Counter number={10} color="blue" />
      <Counter number={10} />
      <CounterTwo />
    </div>
  );
}

export default App;
