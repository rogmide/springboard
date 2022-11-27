import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter number={10} color="blue" />
      <Counter number={10} />
    </div>
  );
}

export default App;
