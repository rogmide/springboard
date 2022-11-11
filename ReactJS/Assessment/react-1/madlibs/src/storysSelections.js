import React, { useState } from "react";
import madlibsDB from "./data/madlibsDB";

const StorysSelections = ({ renderForm }) => {
  const handleChange = (event) => {
    renderForm(event.target.value);
  };

  return (
    <>
      <label htmlFor="story">Select Story: </label>
      <select onChange={handleChange} name="story" id="story">
        <option value="Select One"> Select One </option>
        {madlibsDB.map((s) => (
          // Using title as a key they should be unique,
          // If we where using a real DB
          <option key={s.title} value={{ madlibsDB }}>
            {s.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default StorysSelections;
