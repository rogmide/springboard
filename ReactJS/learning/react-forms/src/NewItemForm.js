import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {
  const INITIAL_STATE = {
    name: "",
    qty: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  // FORM WILL HACE HIS INTERNAL STATE
  // WILL HACE handleChange TO MANAGE THE CHANGE ON THE FORM
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addItem is a function that is pass down from parent
    // and basaclly we pass back data to that parent to work with
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product: </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="qty">Quantity: {formData.qty}</label>
      <input
        onChange={handleChange}
        value={formData.qty}
        id="qty"
        name="qty"
        type="range"
        min="1"
        max="10"
      ></input>
      <button>Add Items</button>
    </form>
  );
};

export default NewItemForm;
