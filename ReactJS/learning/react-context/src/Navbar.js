import React, { useContext } from "react";

import ThemeContext from "./ThemeContext";

const Navbar = () => {
  const bColor = useContext(ThemeContext);

  return (
    <nav style={{ background: bColor }}>
      <span>WebSite</span>
    </nav>
  );
};

export default Navbar;
