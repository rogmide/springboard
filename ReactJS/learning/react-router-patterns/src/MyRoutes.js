import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogHome from "./BlogHome";
import Post from "./Post";

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/blog/:slug" element={<Post />}></Route>
      <Route exact path="/blog" element={<BlogHome />}></Route>
      <Route exact path="/" element={<Home />}></Route>
      {/* <Navigate exact="true" to="/" /> */}
      <Route path="*" element={<h1>NOT FOUND!!!</h1>}></Route>
    </Routes>
  );
}

export default MyRoutes;
