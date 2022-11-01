import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import { v4 as uuidv4 } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    // { id: uuidv4(), width: "50", height: "50", backgroundColor: "red" },
  ];

  const [box, setBox] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBox((box) => [...box, { ...newBox, id: uuidv4() }]);
  };

  const removeBox = (id) => {};

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
