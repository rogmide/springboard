import React, { useState } from "react";
import StorysSelections from "./storysSelections";
import StoryDisplay from "./storyDisplay";
import "./StoryBuilder.css";

const StoryBuilder = () => {
  const handleChange = (event) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="story-holder">
      <div className="story-selection">
        <StorysSelections />
      </div>
      <br></br>
      <div className="story-display">
        <StoryDisplay />
      </div>
    </div>
  );
};

export default StoryBuilder;
