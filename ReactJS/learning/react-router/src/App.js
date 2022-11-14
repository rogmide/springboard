import React from "react";

import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";
import NavBar from "./NavBar";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* Sample of Links */}
        {/* <Link to="/">Home</Link>
        <Link to="/eat">Eat</Link>
        <Link to="/drink">Drink</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="eat" element={<Eat />} />
          <Route path="drink" element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
