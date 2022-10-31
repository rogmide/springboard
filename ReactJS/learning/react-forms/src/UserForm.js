import React, { useState } from "react";

const UserForm = () => {
  // use a initialState for reset and to star the form
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  // One handler for all
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((data) => ({
      // spread to keep all the other data the same
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { username, email, password } = formData;
    alert(`Created user ${username} W/ Email: ${email} Password: ${password}`);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Use htmlFor in read inted of for on a label */}

      <label htmlFor="username">Username: </label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      ></input>
      <label htmlFor="email">Email: </label>
      <input
        onChange={handleChange}
        id="email"
        name="email"
        type="email"
        value={formData.email}
        placeholder="Email"
      ></input>
      <label htmlFor="password">Password: </label>
      <input
        onChange={handleChange}
        id="password"
        name="password"
        type="password"
        value={formData.password}
        placeholder="password"
      ></input>
      <button>Add me to list!</button>
    </form>
  );
};

export default UserForm;
