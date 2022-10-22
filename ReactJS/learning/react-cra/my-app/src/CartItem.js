import React from "react";

const CartItem = ({ item }) => {
  let i = item;
  return (
    <div key={i.id}>
      <h4>{i.name}</h4>
      <img src={i.img} alt="item desc" />
      <ul>
        <li>Price: {i.price}</li>
        <li>Quantity: {i.qty}</li>
        <li>Total: {i.price * i.qty}</li>
      </ul>
    </div>
  );
};

export default CartItem;
