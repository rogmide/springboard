import React, { useState } from "react";
import Shot from "./Shot";

const Coffee = () => {
  const [shots, setShots] = useState([]);

  const addCoffee = () => {
    setShots((shots) => [...shots, <Shot />]);
  };

  return (
    <div>
      <div>
        <h1 style={{ backgroundColor: "#2f8587" }}>Get Some Coffee Shot</h1>
        <button onClick={addCoffee}>Get Coffee!!!</button>
      </div>
      <div>
        {shots.map((s, idx) => (
          <Shot key={idx} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
