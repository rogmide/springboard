import React from "react";
import CartItem from "./CartItem";
import "./ShoppingCard.css";

const ShoppingCart = ({ items, username }) => {
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.qty;
  }, 0);

  return (
    <div className="ShoppingCard" key={username}>
      <h1 className="ShoppingCard-header">{username}'s Shopping Cart</h1>
      {items.map((i) => (
        <CartItem item={i} />
      ))}
      <b>Total: </b> {total}
    </div>
  );
};

export default ShoppingCart;
