import React, { useContext } from "react";

import ThemeContext from "./ThemeContext";

const Navbar = () => {
  const { color, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: color }}>
      <span>WebSite</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
