import React, { useState } from "react";

const SimpleForm = ({ addItem }) => {
  const INITIAL_STATE = {
    email: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  // FORM WILL HACE HIS INTERNAL STATE
  // WILL HACE handleChange TO MANAGE THE CHANGE ON THE FORM
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsTouched(true);
    if (value === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // addItem is a function that is pass down from parent
    // and basaclly we pass back data to that parent to work with
    const { email } = formData;
    if (!isInvalid) {
      alert(`Added you to mailing list, ${email}`);
      setFormData(INITIAL_STATE);
    }
  };

  return (
    <>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          id="email1"
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        {isInvalid && isTouched && (
          <span style={{ color: "red" }}>Email cannot be blank!</span>
        )}
        <button>Add Email</button>
      </form>
    </>
  );
};

export default SimpleForm;
