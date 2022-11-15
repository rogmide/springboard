import React from "react";
import Nav from "./Nav";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Food from "./Food";

// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/soda" element={<Soda />} />
//   <Route path="/coffee" element={<Coffee />} />
//   <Route path="/dog" element={<Dog />} />
// </Routes>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/food/:name" element={<Food />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
