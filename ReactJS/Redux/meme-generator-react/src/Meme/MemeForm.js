import React, { useState } from "react";
import "./MemeForm.css";

const MemeForm = () => {
  const INITIAL_STATE = {
    up: "",
    buttom: "",
    imgURL: "",
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
    alert();
    // //Pass the Data Up to the Parent
    // addTodo({ ...formData });
    // setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Add Meme</h1>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="up">Up Text: </label>
        <input
          id="up"
          type="text"
          name="up"
          placeholder="Up Text"
          value={formData.up}
          onChange={handleChange}
        ></input>
        <label htmlFor="buttom">Buttom Text: </label>
        <input
          id="buttom"
          type="text"
          name="buttom"
          placeholder="Buttom Text"
          value={formData.buttom}
          onChange={handleChange}
        ></input>
        <label htmlFor="imgURL">Imagen Url: </label>
        <input
          id="imgURL"
          type="text"
          name="imgURL"
          placeholder="Imagen Url"
          value={formData.imgURL}
          onChange={handleChange}
        ></input>

        <button>Add Todo</button>
      </form>
    </>
  );
};

export default MemeForm;
