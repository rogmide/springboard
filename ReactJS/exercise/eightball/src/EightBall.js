import React, { useState } from "react";
import "./EightBall.css";

const EightBall = () => {
  const [msg, setMsg] = useState("Think of a Question");
  return (
    <div className="EightBall">
      <p className="EightBall-msg">{msg}</p>
    </div>
  );
};

export default EightBall;
