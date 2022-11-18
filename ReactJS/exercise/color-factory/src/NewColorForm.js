import React, { useState } from "react";
import "./NewColorForm.css";

import { useLocation } from "react-router-dom";

const NewColorForm = () => {
  const location = useLocation();
  console.log(location);
  const INITIAL_STATE = {
    colorName: "",
    color: "",
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
    alert(formData.colorName + formData.color);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="div-form">
      <form className="form-holder" onSubmit={handleSubmit}>
        <label htmlFor="name">Color name: </label>
        <input
          id="colorName"
          type="text"
          name="colorName"
          placeholder="Color name"
          value={formData.colorName}
          onChange={handleChange}
        ></input>
        <label htmlFor="qty">Color value: </label>
        <input
          onChange={handleChange}
          value={formData.color}
          id="color"
          name="color"
          type="color"
        ></input>
        <br></br>
        <button>Add color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
