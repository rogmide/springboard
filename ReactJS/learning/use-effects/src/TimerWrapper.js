import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const TimeWrapper = () => {
  const [timerVisible, setTimerVisible] = useState(true);

  const toggleTimer = () => {
    // i am sooooo dumb LoL next line will save me time in the future lol lol lol
    setTimerVisible(!timerVisible);
  };

  return (
    <div>
      <button onClick={toggleTimer}>Toggle Timer</button>
      {timerVisible && <Timer />}
    </div>
  );
};

export default TimeWrapper;
