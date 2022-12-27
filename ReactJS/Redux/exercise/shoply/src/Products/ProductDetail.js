import React from "react";
import "./ProductDetail.css";

const ProductDetail = ({ name, price, description, image_url }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        style={{  }}
        src={image_url}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Name: {name.toUpperCase()}</h5>
        <h5 className="card-text">Price: {price}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
