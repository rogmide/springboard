import React, { useState } from "react";
import Child from "./Child";
import "./App.css";
// import CounterReadOnly from "./CounterReadOnly";
// import CounterReadWrite from "./CounterReadWrite";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
import ThemeProvider from "./ThemeProvider";

function App() {
  const [ThemeColor, setThemeColor] = useState("green");

  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Child />
      </ThemeProvider>
    </div>
  );
}

export default App;
