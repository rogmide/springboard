import React, { useState } from "react";

const NewItemForm = ({ id, name, qty }) => {
  const INITIAL_STATE = {
    name: "",
    qty: "",
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
    <form>
      <label htmlFor="name">Product: </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="qty">Quantity: </label>
      <input
        id="qty"
        type="text"
        name="qty"
        placeholder="Quantity"
        value={formData.qty}
        onChange={handleChange}
      ></input>
      <p>{formData.name}</p>
      <p>{formData.qty}</p>
    </form>
  );
};

export default NewItemForm;
