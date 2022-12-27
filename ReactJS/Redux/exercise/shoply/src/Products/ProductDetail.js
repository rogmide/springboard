import React from "react";
import "./ProductDetail.css";

const ProductDetail = ({ name, price, description, image_url }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image_url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name.toUpperCase()}</h5>
        <h5 className="card-text">Price: {price} USD</h5>
        <p className="card-text">{description}</p>
      </div>
      <div>
        <button className="btn btn-success">Add</button>
        <button className="btn btn-success">Remove</button>
      </div>
    </div>
  );
};

export default ProductDetail;
