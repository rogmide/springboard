import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import "./MemeForm.css";

const MemeForm = () => {
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    top: "",
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
    const payload = {
      id: uuidv4(),
      top: formData.top,
      buttom: formData.buttom,
      imgURL: formData.imgURL,
    };
    dispatch({ type: "CREATE_MEME", payload: payload });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Add Meme</h1>
      <div className="formHolder">
        <form className="" onSubmit={handleSubmit}>
          <label htmlFor="top">Up Text: </label>
          <input
            id="top"
            type="text"
            name="top"
            placeholder="Up Text"
            value={formData.top}
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

          <button>Add Meme</button>
        </form>
      </div>
    </>
  );
};

export default MemeForm;
