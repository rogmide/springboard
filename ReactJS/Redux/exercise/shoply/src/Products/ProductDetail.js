import React from "react";
import { addToCart, removeFromCart } from "../Action/actions";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";

const ProductDetail = ({ id, name, price, description, image_url }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image_url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name.toUpperCase()}</h5>
        <h5 className="card-text">Price: {price} USD</h5>
        <p className="card-text">{description}</p>
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addToCart(id))}
        >
          Add
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
