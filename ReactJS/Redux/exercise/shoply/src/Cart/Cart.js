import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const prods = useSelector((st) => st.products);
  const items = useSelector((st) => st.cartItems);

  return (
    <>
      {Object.keys(items).map((id) => (
        <div key={id} style={{ display: "flex", justifyContent: "center" }}>
          <div className="itemHolder">
            <div>
              <img src={prods[id].image_url} alt="item img" />
            </div>
            <div>
              <h3>{prods[id].name}</h3>
            </div>
            <div>
              <h3>Qty: {items[id]} </h3>
              <h3>Total: {prods[id].price * items[id]} USD</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;

// NEXT STEP IS BUILD THE CART DISPLAY AND ADD ITEMS TO THE CART
