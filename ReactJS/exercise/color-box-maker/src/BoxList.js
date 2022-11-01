import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import { v4 as uuidv4 } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    // default box to work with app
    { id: uuidv4(), width: "100", height: "100", backgroundColor: "green" },
  ];

  const [box, setBox] = useState(INITIAL_STATE);

  // Add box to the Array
  const addBox = (newBox) => {
    setBox((box) => [...box, { ...newBox, id: uuidv4() }]);
  };

  // Remove box from the Array
  const removeBox = (id) => {
    setBox(box.filter((b) => b.id !== id));
  };

  return (
    <>
      {" "}
      <div className="BoxList">
        <h1>Box List</h1>
        {box.map(({ id, width, height, backgroundColor }) => (
          <Box
            removeBox={removeBox}
            id={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            key={id}
          />
        ))}
      </div>
      <NewBoxForm addBox={addBox} />
    </>
  );
};

export default BoxList;
