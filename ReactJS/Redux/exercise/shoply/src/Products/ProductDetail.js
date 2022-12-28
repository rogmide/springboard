import React from "react";
import "./ProductDetail.css";
import Add_RemoveBtn from "../Add_Remove_BTN/Add_Remove";
const ProductDetail = ({ id, name, price, description, image_url }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "5px" }}>
      <img className="card-img-top" src={image_url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name.toUpperCase()}</h5>
        <h5 className="card-text">Price: {price} USD</h5>
        <p className="card-text">{description}</p>
      </div>
      <Add_RemoveBtn id={id} />
    </div>
  );
};

export default ProductDetail;
