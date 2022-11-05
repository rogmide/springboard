import React from "react";
import useLocalStoreState from "./hooks/useLocalStoreState";

const Counter = () => {
  const [count, setCount] = useLocalStoreState("count", 0);

  const addToCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h4>{count}</h4>
      <button onClick={addToCount}>Add</button>
    </>
  );
};

export default Counter;
