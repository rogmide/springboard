import React, { useState } from "react";
import Grandchild from "./Grandchild";

function Child() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div style={{ border: "4px solid blue", margin: "1em", width: "500" }}>
      <p>I'm the child!</p>
      <Grandchild count={count} addCount={addCount}/>
    </div>
  );
}

export default Child;
