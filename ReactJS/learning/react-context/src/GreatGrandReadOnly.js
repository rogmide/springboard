import React, { useContext } from "react";
import CountContext from "./CountContext";

function GreatGrandReadOnly() {
  const num = useContext(CountContext);

  return (
    <div style={{ border: "4px solid yellow", margin: "1em" }}>
      <p>I'm a great-grandchild!</p>
      <h3 style={{ margin: "1em" }}>{num}</h3>
      <button style={{ margin: "1em" }}>Increment Count</button>
    </div>
  );
}

export default GreatGrandReadOnly;
