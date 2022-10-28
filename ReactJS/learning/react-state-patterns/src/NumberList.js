import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";

const NumberList = (props) => {
  const [numbers, setNumbers] = useState([2, 5, 7, 11, 12, 18]);
  const remove = (num) => {
    setNumbers(numbers.filter((n) => n !== num));
  };
  return (
    <ul>
      {numbers.map((n) => (
        <li>
          <button onClick={() => remove(n)}>{n}</button>
        </li>
      ))}
    </ul>
  );
};

export default NumberList;
