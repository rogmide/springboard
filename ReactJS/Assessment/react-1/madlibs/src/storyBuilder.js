import React, { useState } from "react";
import StorysSelections from "./storysSelections";
import StoryDisplay from "./storyDisplay";
import "./StoryBuilder.css";

// This component uses two components to build a MadLib
// StorysSelections -- It is a Form Component That handles the Storys with the Words
// StoryDisplay -- Handles Display Story with the Word that the user chooses
const StoryBuilder = () => {
  const INITIAL_STATE = {
    title: "MadLib",
    text: "Cooking a Nice MadLib are you!!!",
  };
  const [story, setStory] = useState(INITIAL_STATE);

  // RenderStory triggers a render with the new story to display
  // This function is passed down to a child component StorysSelections
  const renderStory = (
    title = INITIAL_STATE.title,
    text = INITIAL_STATE.text,
    wordsToReplace
  ) => {
    for (const w in wordsToReplace) {
      text = text.replaceAll(`(${w.toUpperCase()})`, wordsToReplace[w]);
    }
    setStory({ title, text });
  };

  return (
    <div className="story-holder">
      <div className="story-selection">
        <StorysSelections renderStory={renderStory} />
      </div>
      <br></br>
      <div className="story-display">
        <StoryDisplay title={story.title} text={story.text} />
      </div>
    </div>
  );
};

export default StoryBuilder;
