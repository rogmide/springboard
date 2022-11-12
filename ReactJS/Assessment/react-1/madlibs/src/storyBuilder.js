import React, { useState } from "react";
import StorysSelections from "./storysSelections";
import StoryDisplay from "./storyDisplay";
import "./StoryBuilder.css";

const StoryBuilder = () => {
  const INITIAL_STATE = {
    title: "MadLib",
    text: "Cooking a Nice MadLib are you!!!",
  };
  const [story, setStory] = useState(INITIAL_STATE);

  const renderStory = (title, text, wordsToAdd) => {
    // console.log(title, text, wordsToAdd);

    for (const w in wordsToAdd) {
      // console.log(`${w.toUpperCase()}: ${wordsToAdd[w]}`);
      text = text.replaceAll(`(${w.toUpperCase()})`, wordsToAdd[w]);
    }
    console.log(text);

    //     let text = "Visit Microsoft!";
    // let result = text.replace("Microsoft", "W3Schools");
    // setStory({ title, text });
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
