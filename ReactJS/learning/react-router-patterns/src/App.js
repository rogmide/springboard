import React from "react";
// import Nav from "./Nav";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Food from "./Food";
import MyRoutes from "./MyRoutes";
import Nav2 from "./Nav2";

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
        {/* <Nav /> */}
        {/* <Routes>
          <Route exact path="/food/:name" element={<Food />}></Route>
        </Routes> */}
        <Nav2 />
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
