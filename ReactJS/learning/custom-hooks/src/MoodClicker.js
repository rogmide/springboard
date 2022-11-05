import React from "react";
import useToggleState from "./hooks/useToggleState";
import "./MoodClicker.css";
const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState(true);
  const [isDarkMode, toggleIsDarkMode] = useToggleState(false);

  return (
    <div className={isDarkMode ? "clicker-dark" : "clicker-light"}>
      <h1>{isHappy ? "😊" : "😥"} </h1>
      <button onClick={toggleIsHappy}>Change Mood</button>
      <button onClick={toggleIsDarkMode}>Toogle Dark Mode</button>
    </div>
  );
};

export default MoodClicker;
