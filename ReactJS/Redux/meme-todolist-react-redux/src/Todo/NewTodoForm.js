import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    text: "",
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
      text: formData.text,
      done: false,
      scrach: false,
    };
    dispatch({ type: "ADD_TODO", payload: payload });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Add New Todo</h1>
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="text1">Todo: </label>
        <input
          required
          id="text1"
          type="text"
          name="text"
          placeholder="Todo"
          value={formData.text}
          onChange={handleChange}
        ></input>

        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodoForm;
