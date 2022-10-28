import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
import NumberItem from "./NumberItem";

const NumberList = (props) => {
  const [numbers, setNumbers] = useState([2, 5, 7, 11, 12, 18]);
  const remove = (num) => {
    setNumbers(numbers.filter((n) => n !== num));
  };
  return (
    <ul>
      {numbers.map((n) => (
        <NumberItem number={n} remove={remove} />
      ))}
    </ul>
  );
};

export default NumberList;
