import React, { useState, useEffect } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((num) => num + 1);
  };

  // This is running after the component is render
  useEffect(() => {
    console.log("RUNNING CALLBACK");
    document.title = `Hi${"!".repeat(num)}`;
  });

  return (
    <div>
      {console.log("RENDERING!!!!")}
      Let's get excited.
      <button onClick={increment}> Add Count </button>
      <p>Counter: {num}</p>
    </div>
  );
};

export default Counter;
