import React from "react";

const ShoppingCart = ({ items }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.map((i) => (
        <div key={i.id}>
          <h4>{i.name}</h4>
          <img src={i.img} alt="item desc" />
          <ul>
            <li>Price: {i.price}</li>
            <li>Quantity: {i.qty}</li>
            <li>Total: {i.price * i.qty}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
