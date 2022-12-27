import React from "react";
import { useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const items = useSelector((st) => st.products);
  return (
    <>
      {Object.keys(items).map((id) => (
        <ProductDetail
          key={id}
          name={items[id].name}
          price={items[id].price}
          description={items[id].description}
          image_url={items[id].image_url}
        />
      ))}
    </>
  );
};

export default ProductList;
