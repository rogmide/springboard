import React, { useState } from "react";

const Time = () => {
  const [sec, setSec] = useState(0);
  //   setInterval(() => {
  //     console.log(`Sec: ${sec}`);
  //     setSec((sec) => sec + 1);
  //   }, 1000);
  return (
    <div>
      <h3>{sec}</h3>
    </div>
  );
};

export default Time;
