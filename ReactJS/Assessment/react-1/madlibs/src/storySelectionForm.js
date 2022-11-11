import React, { useState } from "react";
import madlibsDB from "./data/madlibsDB";
import StorysSelections from "./storysSelections";

const StorySelectionForm = ({ renderStory = true }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderForm = (event) => {
    console.log(event);
    setFormData(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StorysSelections renderForm={renderForm} />
    </form>
  );
};

export default StorySelectionForm;
