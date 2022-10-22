import logo from "./logo.svg";
import "./App.css";
import { add, multiply } from "./helpers.js";
import data, { meow } from "./cats";

function App() {
  console.log(add(4, 9));
  console.log(multiply(4, 9));
  console.log(data);
  console.log(meow())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
