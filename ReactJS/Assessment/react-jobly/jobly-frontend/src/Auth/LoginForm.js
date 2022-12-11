import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
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
    login({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <div className="container LoginForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              className="form-control"
              required
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            ></input>
          </div>
          <label htmlFor="password">Password: </label>
          <input
            className="form-control"
            required
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          ></input>
          <br></br>
          <button className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
