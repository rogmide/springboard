import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("ChickenLady");

  // every input of our form has to be in state
    const handleChange = (evt) => {
      console.log(evt.target.value);
      setUsername(evt.target.value);
    };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Created user ${username}`);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Add me to list!</button>
    </form>
  );
};

export default UserForm;
