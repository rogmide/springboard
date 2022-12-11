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
            let { username } = jwtDecode(token);
            JoblyApi.token = token;
            // let currUser = await JoblyApi.getCurrentUser(username);
          } catch (error) {
            console.log(error);
          }
        }
      }
      getUserInfo();
    },
    [token]
  );

  async function login(info) {
    try {
      let token = await JoblyApi.login(info);
      setToken(token);
      return true;
    } catch (errors) {
      return errors;
    }
  }

  return <Routes_Base login={login} />;
}

export default App;
