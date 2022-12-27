import React from "react";
import { useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";
import "./ProductList.css";

const ProductList = () => {
  const items = useSelector((st) => st.products);
  return (
    <>
      <div className="prodHolder">
        {Object.keys(items).map((id) => (
          <ProductDetail
            id={id}
            key={id}
            name={items[id].name}
            price={items[id].price}
            description={items[id].description}
            image_url={items[id].image_url}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
