import React from "react";
import useLocalStoreState from "./hooks/useLocalStoreState";

const ColorPiker = () => {
  const [color, setColor] = useLocalStoreState("color", 0);
  return (
    <>
      <h4 style={{ color: `#${color}` }}>Your Color is: {color}</h4>
    </>
  );
};

export default ColorPiker;
