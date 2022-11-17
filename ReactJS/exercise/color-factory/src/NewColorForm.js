import React, { useState } from "react";

const NewItemForm = ({ addColor }) => {
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

    // addItem({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
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
    </div>
  );
};

export default NewItemForm;
