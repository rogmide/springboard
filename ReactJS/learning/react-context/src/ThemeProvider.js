import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("olive");
  const toggleTheme = () => {
    setColor((color) => (color === "olive" ? "orange" : "olive"));
  };

  return (
    <ThemeContext.Provider value={{ color, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
