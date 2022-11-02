import React, { useState } from "react";
import "./NewTodoForm.css";

// id: uuidv4(), text: "Walk the Dog", done: false, scrach: false
const EditTodoForm = ({ todo, editTodo }) => {
  const INITIAL_STATE = {
    id: todo.id,
    done: todo.todo,
    scrach: todo.scrach,
    text: todo.text,
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
    editTodo({ ...formData });
    setFormData("");
  };

  return (
    <>
      <form className="EditTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="edit_text1">Edit Todo: </label>
        <input
          id="edit_text1"
          type="text"
          name="text"
          placeholder="Todo"
          value={formData.text}
          onChange={handleChange}
        ></input>

        <button>Edit Todo</button>
      </form>
    </>
  );
};

export default EditTodoForm;
