import React, { useState, useContext } from "react";
import Grandchild from "./Grandchild";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";

function Child() {
  const [count, setCount] = useState(0);
  const color = useContext(ThemeContext);

  const addCount = () => {
    setCount((count) => count + 1);
  };
  return (
    // value can hold a Obj or a Array :)
    <CountContext.Provider value={{ count, addCount }}>
      <div style={{ border: "4px solid blue", margin: "1em", width: "500" }}>
        <p>I'm the child!</p>
        <Grandchild />
        <button style={{ color }} onClick={addCount}>
          Add Count
        </button>
      </div>
    </CountContext.Provider>
  );
}

export default Child;
