import React, { useState } from "react";
import madlibsDB from "./data/madlibsDB";
import "./storysSelections.css";

const StorysSelections = () => {
  const [words, setWords] = useState([]);
  const [formData, setFormData] = useState("");

  console.log(formData);

  const handleChangeSelection = (event) => {
    if (event.target.value !== "") {
      setWords(event.target.value.split(","));
    } else {
      setWords([]);
    }
  };

  const handleChangeField = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit} className="form-group form-story">
      <label htmlFor="story">Select Story: </label>
      <select
        className="form-control"
        onChange={handleChangeSelection}
        name="story"
        id="story"
      >
        <option value=""> Select One </option>
        {madlibsDB.map((s) => (
          // Using title as a key they should be unique,
          // If we where using a real DB
          <option
            className="form-control form-title"
            key={s.title}
            value={s.words}
          >
            {s.title}
          </option>
        ))}
      </select>
      {words.map((w) => (
        <div key={w}>
          <label className="form-control" htmlFor={w}>
            {w}:{" "}
          </label>
          <input
            onChange={handleChangeField}
            className="form-control"
            id={w}
            type="text"
            name={w}
            placeholder={w}
            value={formData.word}
          ></input>
        </div>
      ))}
    </form>
  );
};

export default StorysSelections;
