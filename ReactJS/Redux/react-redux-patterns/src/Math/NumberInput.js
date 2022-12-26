import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { CHANGE_NUM } from "../Actions/actionsType";
import { change } from "../Actions/actions";

const NumberInput = () => {
  const dispatch = useDispatch();

  // shallowEqual will compare the obj and if they are no different the component will not be re-render
  const { num1, num2 } = useSelector(
    (state) => ({
      num1: state.num1,
      num2: state.num2,
    }),
    shallowEqual
  );
  const [inputs, setInputs] = useState({ num1: num1, num2: num2 });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: +value }));
  };

  const changeNum = (num) => {
    dispatch(change(num, inputs[num]));
  };
  return (
    <>
      <div>
        <label htmlFor="num1">Frist Number:</label>
        <input
          id="num1"
          type="number"
          name="num1"
          value={inputs.num1}
          onChange={handleChange}
        ></input>
        <button onClick={() => changeNum("num1")}>Update</button>
      </div>
      <div>
        <label htmlFor="num2">Sec Number:</label>
        <input
          id="num2"
          type="number"
          value={inputs.num2}
          name="num2"
          onChange={handleChange}
        ></input>
        <button onClick={() => changeNum("num2")}>Update</button>
      </div>
    </>
  );
};

export default NumberInput;
