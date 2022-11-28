import React, { useContext } from "react";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";

function GreatGrandReadOnly() {
  const { count, addCount } = useContext(CountContext);
  const { color, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ border: "4px solid yellow", margin: "1em" }}>
      <p>I'm a great-grandchild!</p>
      <h3 style={{ margin: "1em" }}>{count}</h3>
      <button style={{ margin: "1em", color: color }} onClick={addCount}>
        Increment Count
      </button>
    </div>
  );
}

export default GreatGrandReadOnly;
