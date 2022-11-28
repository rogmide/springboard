import React from "react";
import GreatGrandReadOnly from "./GreatGrandReadOnly";
// import GreatGrandReadWrite from "./GreatGrandReadWrite";

function Grandchild() {
  return (
    <div style={{ border: "4px solid green", margin: "1em" }}>
      <p>I'm the grandchild!</p>
      {/* <h3 style={{ margin: "1em" }}>{count}</h3> */}
      <GreatGrandReadOnly />
      {/* <GreatGrandReadWrite /> */}
    </div>
  );
}

export default Grandchild;
