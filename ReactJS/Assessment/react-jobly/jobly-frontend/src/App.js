import React, { useState, useEffect } from "react";
import Routes_Base from "./Routes/Routes_Base";
import jwtDecode from "jwt-decode";
import JoblyApi from "./API/api";

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(
    function loadUserInfo() {
      async function getUserInfo() {
        if (token) {
          try {
            let { username } = jwtDecode.decode(token);
            JoblyApi.token = token;
            // let currUser = await JoblyApi.getCurrentUser(username);
          } catch (error) {}
        }
      }
    },

    [token]
  );

  async function login(info) {
    alert();
    // try {
    //   let token = await JoblyApi.login(info);
    //   setToken(token);
    //   return { success: true };
    // } catch (errors) {
    //   console.error("login failed", errors);
    //   return { success: false, errors };
    // }
  }

  return <Routes_Base login={login} />;
}

export default App;
