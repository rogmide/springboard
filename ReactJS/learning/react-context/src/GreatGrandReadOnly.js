import React, { useContext } from "react";
import CountContext from "./CountContext";

function GreatGrandReadOnly() {
  const { count, addCount } = useContext(CountContext);

  return (
    <div style={{ border: "4px solid yellow", margin: "1em" }}>
      <p>I'm a great-grandchild!</p>
      <h3 style={{ margin: "1em" }}>{count}</h3>
      <button style={{ margin: "1em" }} onClick={addCount}>
        Increment Count
      </button>
    </div>
  );
}

export default GreatGrandReadOnly;
