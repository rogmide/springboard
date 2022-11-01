import React from "react";
import "./Box.css";

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  return (
    <div
      className="Box"
      key={id}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <h3>X</h3>
    </div>
  );
};

export default Box;
