import React, { useState } from "react";

const Item = ({ id, name, qty }) => {
  return (
    <ul key={id}>
      <li>Product Name: {name}</li>
      <li>Quantity: {qty}</li>
    </ul>
  );
};

export default Item;
