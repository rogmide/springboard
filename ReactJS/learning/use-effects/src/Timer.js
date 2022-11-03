import React, { useEffect, useState } from "react";

const Time = () => {
  const [sec, setSec] = useState(0);

  // If we pass a Empty ARRAY is telling
  // that there is no other dependency
  // and run only one time
  useEffect(() => {
    setInterval(() => {
      setSec((sec) => sec + 0.5);
    }, 1000);
    // passing a Empty Array
    // run this callback after first render
    // and dont run it anymore
    // it will run if the dependency changes
    // dependency are inside the array
  }, []);

  return (
    <div>
      <h3>{sec}</h3>
    </div>
  );
};

export default Time;
