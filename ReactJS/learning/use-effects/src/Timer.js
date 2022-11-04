import React, { useEffect, useState, useRef } from "react";

const Time = () => {
  const [sec, setSec] = useState(0);
  // useRef variable will stay for future render
  // the variable will not be lost on render
  const timerID = useRef();
  // If we pass a Empty ARRAY is telling
  // that there is no other dependency
  // and run only one time
  useEffect(() => {
    timerID.current = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
    // passing a Empty Array
    // run this callback after first render
    // and dont run it anymore
    // it will run if the dependency changes
    // dependency are inside the array

    // Returning inside the useEffect is call
    // Clean up function and is use to clean up code
    // sample, open websocket close db connections etc...
    return () => {
      console.log("Cleanning Function: " + timerID.current);
      clearInterval(timerID.current);
    };
    // Empty Array Passing
  }, []);

  const stopTimer = () => {
    clearInterval(timerID.current);
  };

  return (
    <div>
      <h3>{sec}</h3>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Time;
