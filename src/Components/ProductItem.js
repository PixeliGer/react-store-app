import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductItem.css";

function ProductItem(props) {
  let navigate = useNavigate();
  const product = props.product;

  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={product.image} alt="product" />
        </div>
        <div className="card_content">
          <h2 className="card_title block_ellipsis">{product.title}</h2>
          <p className="card_text block_ellipsis">{product.description}</p>
          <button
            className="btn card_btn"
            onClick={() => {
              navigate(`/product-detail/${product.id}`);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
