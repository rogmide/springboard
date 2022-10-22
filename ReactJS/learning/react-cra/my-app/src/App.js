// import logo from "./logo.svg";
import React from "react";
import items from "./items";
import moreItems from "./MoreItem";
import ShoppingCart from "./ShoppingCart";
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
      <ShoppingCart items={items} username="Carly"/>
      <ShoppingCart items={moreItems} username="Frosty"/>
    </div>
  );
}

export default App;
