import React, { useState } from "react";
import "./FormAdd.css";
import $ from "jquery";

const NewFoodDrinkForm = ({ addItem }) => {
  const INITIAL_STATE = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
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
    addItem({ ...formData });
    // This is the easy way that i find to reset the select to INITIAL_STATE
    $("select").val("");
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Add New Food/Drink</h1>
      <form className="NewFoodDrinkForm" onSubmit={handleSubmit}>
        <label htmlFor="foodType">Choose a Food/Drink:</label>
        <select required name="foodType" id="foodType" onChange={handleChange}>
          <option value=""></option>
          <option value={formData.foodType}>Food</option>
          <option value={formData.foodType}>Drink</option>
        </select>
        <label htmlFor="name">Name: </label>
        <input
          required
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="description">description: </label>
        <textarea
          required
          id="description"
          type="text"
          rows="2"
          cols="30"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="recipe">Recipe: </label>
        <textarea
          required
          id="recipe"
          type="text"
          rows="2"
          cols="30"
          name="recipe"
          placeholder="Recipe"
          value={formData.recipe}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="serve">Serve: </label>
        <textarea
          required
          id="serve"
          type="text"
          rows="2"
          cols="30"
          name="serve"
          placeholder="Serve"
          value={formData.serve}
          onChange={handleChange}
        ></textarea>
        <br></br>
        <button>Add</button>
      </form>
    </>
  );
};

export default NewFoodDrinkForm;
