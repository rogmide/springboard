import React from "react";

const NumberItem = (props) => {
  return (
    <li>
      <button onClick={() => props.remove(props.number)}>{props.number}</button>
    </li>
  );
};

export default NumberItem;
