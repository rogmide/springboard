import React, { useState } from "react";
import madlibsDB from "./data/madlibsDB";
import StorysSelections from "./storysSelections";

const StorySelectionForm = () => {
  const handleChange = (event) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <StorysSelections />;
};

export default StorySelectionForm;
