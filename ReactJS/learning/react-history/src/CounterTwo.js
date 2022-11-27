import React from "react";
import useCounter from "./useCounter";

const CounterTwo = () => {
  const [numCount, inc, dec] = useCounter();

  return (
    <div>
      <h3>Count is: {numCount}</h3>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default CounterTwo;
