import React from "react";
import useFields from "./hooks/useField";

const SignupForm = () => {
  const [formData, handleChange, resetForm] = useFields({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button>Reset</button>
    </form>
  );
};

export default SignupForm;
