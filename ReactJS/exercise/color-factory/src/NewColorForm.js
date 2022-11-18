import React, { useState } from "react";
import "./NewColorForm.css";
import { Link } from "react-router-dom";

const NewColorForm = () => {
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

  return (
    <div className="div-form">
      <form className="form-holder">
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
        <Link
          to="/colors"
          state={{ colorName: formData.colorName, color: formData.color }}
        >
          Add color
        </Link>
      </form>
    </div>
  );
};

export default NewColorForm;
