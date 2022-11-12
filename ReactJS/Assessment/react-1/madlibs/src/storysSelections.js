import React, { useState, useRef } from "react";
import madlibsDB from "./data/madlibsDB";
import "./storysSelections.css";

const StorysSelections = ({ renderStory }) => {
  // StorysSelections is a component to handle the form
  // Variables
  // words: Store the word that are going to be use on the story
  // formData: Store the words enter by te user to create de story
  // title: Is the title of the Story that is chosen
  // text: Is the text of the Story that is chosen
  const [words, setWords] = useState([]);
  const [formData, setFormData] = useState("");
  const title = useRef("");
  const text = useRef("");

  // Handle the selection, setWords with the words that are going to be use on the story
  // And set title.current and text.current with the title/text of the story
  const handleChangeSelection = (event) => {
    if (event.target.value !== "") {
      const wordsArray = event.target.value.split("/")[0].split(",");
      title.current = event.target.value.split("/")[1];
      text.current = event.target.value.split("/")[2];
      setWords(wordsArray);
    } else {
      renderStory();
      setWords([]);
    }
  };

  // Normal handlechange for the fields on the form
  const handleChangeField = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // Handle Submit send back to the parent component using the parent
  // Function the title, text, and words that we going to use to build the story
  const handleSubmit = (event) => {
    event.preventDefault();
    renderStory(title.current, text.current, formData);
    setWords([]);
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
      <h5 className="note"> - Select First Element to Reset - </h5>
      <br></br>
      {words.map((w) => (
        <div key={w}>
          <label htmlFor={w}>{w}: </label>
          <input
            required
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
