import React from "react";
import Grandchild from "./Grandchild";

function Child() {
  return (
    <div style={{ border: "4px solid blue", margin: "1em", width: "500" }}>
      <p>I'm the child!</p>
      <Grandchild />
    </div>
  );
}

export default Child;
