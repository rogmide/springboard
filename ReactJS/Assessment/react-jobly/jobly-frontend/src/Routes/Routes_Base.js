import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";

function Routes_Base({ login, signup }) {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/login"
          element={<LoginForm login={login} />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<SignUpForm signup={signup} />}
        ></Route>
        <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routes_Base;
