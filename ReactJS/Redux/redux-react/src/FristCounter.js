import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FristCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default FristCounter;
