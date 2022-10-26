import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is: {count}</h1>
      <p>Count</p>
      <button onClick={() => setCount(count + 10)}>Add</button>
      <button onClick={() => setCount(count - 10)}>Subtract</button>
      {/* <input placeholder="username" /> */}
    </>
  );
};

export default Counter;
