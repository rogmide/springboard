import React, { useState } from "react";

const StoryDisplay = ({ title, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default StoryDisplay;
