import React from "react";
import "./Box.css";

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  return (
    <div
      className="Box"
      data-testId="test-box"
      key={id}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <h3 onClick={() => removeBox(id)}>X</h3>
    </div>
  );
};

export default Box;
