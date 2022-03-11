import React from "react";
import ProductItem from "../Components/ProductItem";

function ProductList({ products }) {
  return (
    <ul className="cards">
      {products?.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
