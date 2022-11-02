import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
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
    //Pass the Data Up to the Parent
    addTodo({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Add New Todo</h1>
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="text">Todo: </label>
        <input
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
