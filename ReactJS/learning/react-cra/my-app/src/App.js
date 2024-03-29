// import logo from "./logo.svg";
import React from "react";
// import componet and data
import items from "./items";
import moreItems from "./MoreItem";
import ShoppingCart from "./ShoppingCart";
import Alert from "./Alert";
import Greeting from "./Greeting";
// import assect
import fakeLogo from "./logoipsum-254.svg";
// import css files
import "./App.css";
// import { add, multiply } from "./helpers.js";
// import data, { meow } from "./cats";

function App() {
  // console.log(add(4, 9));
  // console.log(multiply(4, 9));
  // console.log(data);
  // console.log(meow())
  return (
    <div>
      {/* IMAGEN */}
      
      <img src={fakeLogo} id="logo" />

      <Alert variant="success">
        <h1>Welcome Back!</h1>
        <Greeting />
      </Alert>
      <Alert variant="danger">
        <h1>Oh No!</h1>
      </Alert>

      <ShoppingCart items={items} username="Carly" />
      <ShoppingCart items={moreItems} username="Frosty" />
    </div>
  );
}

export default App;
