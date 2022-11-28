import React, { useState } from "react";
import Child from "./Child";
import "./App.css";
// import CounterReadOnly from "./CounterReadOnly";
// import CounterReadWrite from "./CounterReadWrite";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

function App() {
  const [ThemeColor, setThemeColor] = useState("green");

  const toggleTheme = () => {
    setThemeColor((color) => (color === "green" ? "red" : "green"));
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={ThemeColor}>
        <Navbar />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
