import React, { useContext } from "react";
// import CountContext from "./countContext";

function GreatGrandReadOnly() {
  // const num = useContext(CountContext);

  return (
    <div style={{ border: "4px solid yellow", margin: "1em" }}>
      <p>I'm a great-grandchild!</p>
      {/* <p>Here's the count: {num}.</p> */}
    </div>
  );
}

export default GreatGrandReadOnly;
