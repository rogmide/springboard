import React from "react";
import GreatGrandReadOnly from "./GreatGrandReadOnly";
// import GreatGrandReadWrite from "./GreatGrandReadWrite";

function Grandchild({ count, addCount }) {
  return (
    <div style={{ border: "4px solid green", margin: "1em" }}>
      <p>I'm the grandchild!</p>
      {/* <h3 style={{ margin: "1em" }}>{count}</h3> */}
      <GreatGrandReadOnly count={count} addCount={addCount} />
      {/* <GreatGrandReadWrite /> */}
    </div>
  );
}

export default Grandchild;
