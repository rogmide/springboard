import React, { useState } from "react";
import "./SimpleCounter.css";

function SimpleCounter() {
  const [num, setNum] = useState(0);

  // For updating State use a callback funtion () =>
  const clickUp = () => {
    setNum((n) => n + 1);
  };
  const clickUp2 = () => {
    // This way will att only one time + 1 bcz it keeps going
    // we have to user a callback to fix this problem
    // setNum(num + 1);
    // setNum(num + 1);
    // This way is waiting to finish before keep going
    setNum((n) => n + 1);
    setNum((n) => n + 1);
  };

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={clickUp}>Up</button>
      <button onClick={clickUp2}>Up</button>
    </div>
  );
}

export default SimpleCounter;
