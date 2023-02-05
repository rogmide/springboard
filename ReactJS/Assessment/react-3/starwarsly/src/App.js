import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        {/* NavBar: Component
                    render the navbar that is showing on the top of the site */}
        <Routes />
        {/* Routes: Component
                    render all the routes that is going to be use on the site */}
      </BrowserRouter>
    </div>
  );
}

export default App;
