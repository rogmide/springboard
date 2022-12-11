import React, { useContext } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";
import UserProfile from "../Auth/UserProfile";
import UserContext from "../UseContext";

function Routes_Base({ login, signup }) {
  const { currUser } = useContext(UserContext);

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

        {/* Ensuring that the user is login to access this routes */}
        {currUser ? (
          <Route exact path="/profile" element={<UserProfile />}></Route>
        ) : (
          <Route
            path="*"
            element={<Navigate exact="true" to="/login" />}
          ></Route>
        )}

        <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routes_Base;
