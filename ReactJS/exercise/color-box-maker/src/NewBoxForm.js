import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Pass the Data Up to the Parent
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Box Form</h1>
      <form className="NewBoxForm" onSubmit={handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input
          id="width"
          type="number"
          min="20"
          max="500"
          name="width"
          placeholder="width"
          value={formData.width}
          onChange={handleChange}
        ></input>
        <label htmlFor="height">Height: </label>

        <input
          id="height"
          type="number"
          min="20"
          max="500"
          name="height"
          placeholder="height"
          value={formData.height}
          onChange={handleChange}
        ></input>
        <label htmlFor="backgroundColor">Background Color: </label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        ></input>
        <br></br>

        <button>Add Box</button>
      </form>
    </>
  );
};

export default NewBoxForm;
