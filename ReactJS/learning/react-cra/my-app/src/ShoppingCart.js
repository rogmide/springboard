import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ items, username }) => {
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.qty;
  }, 0);

  console.log(total);
  return (
    <div key={username}>
      <h1>{username}'s Shopping Cart</h1>
      {items.map((i) => (
        <CartItem item={i} />
      ))}
      <b>Total: </b> {total}
    </div>
  );
};

export default ShoppingCart;
