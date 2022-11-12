import React, { useState, useRef } from "react";
import madlibsDB from "./data/madlibsDB";
import "./storysSelections.css";

const StorysSelections = ({ renderStory }) => {
  const [words, setWords] = useState([]);
  const [formData, setFormData] = useState("");
  const title = useRef("");
  const text = useRef("");

  const handleChangeSelection = (event) => {
    if (event.target.value !== "") {
      const wordsArray = event.target.value.split("/")[0].split(",");
      title.current = event.target.value.split("/")[1];
      text.current = event.target.value.split("/")[2];
      setWords(wordsArray);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    renderStory(title.current, text.current, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group form-story">
      <label htmlFor="story">Select Story: </label>
      <select
        className="form-control input-group-text"
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
            value={`${s.words}/${s.title}/${s.text}`}
          >
            {s.title}
          </option>
        ))}
      </select>
      <br></br>
      {words.map((w) => (
        <div key={w}>
          <label htmlFor={w}>{w}: </label>
          <input
            onChange={handleChangeField}
            className="form-control input-group-text"
            id={w}
            type="text"
            name={w}
            placeholder={w}
            value={formData.word}
          ></input>
          {words[words.length - 1] === w && (
            <button className="btn-getmad btn btn-secondary">Get Mad!!!</button>
          )}
        </div>
      ))}
    </form>
  );
};

export default StorysSelections;
