import React from "react";
import { useSelector, shallowEqual } from "react-redux";

const Math = () => {
  //   const { num1, num2 } = useSelector((state) => ({
  //     num1: state.num1,
  //     num2: state.num2,
  //   }));

  // Use this way to avoid re-render
  //   const num1 = useSelector((state) => state.num1);
  //   const num2 = useSelector((state) => state.num2);

  // Use this way to avoid re-render using shallowEqual funtion from react-redux
  const { num1, num2 } = useSelector(
    (state) => ({
      num1: state.num1,
      num2: state.num2,
    }),
    shallowEqual
  );

  return (
    <>
      <div>
        <h3>Math Facts!</h3>
        <ul>
          <li>Sum: {num1 + num2}</li>
          <li>Difference: {num1 - num2}</li>
          <li>Product: {num1 * num2}</li>
          <li>Quotient: {num1 / num2}</li>
        </ul>
      </div>
    </>
  );
};

export default Math;
