import React, { useState } from "react";

const NumberInput = () => {
  const [inputs, setInputs] = useState({ num1: 0, num2: 0 });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
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
        <button>Update</button>
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
        <button>Update</button>
      </div>
    </>
  );
};

export default NumberInput;
