import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS } from "../Utils/ApiUrls";

function ProductDetail() {
  let { productId } = useParams();
  const [details, setDetails] = useState([]);
  const GET_PRODUCT_DETAILS = `${GET_PRODUCTS}/${productId}`;

  const fetchProductDetails = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProductDetails(GET_PRODUCT_DETAILS);
  }, [GET_PRODUCT_DETAILS]);

  return (
    <div className="main">
      <div className="product-image-wrp">
        <img src={details.image} alt="product_image" />
      </div>
      <h2>
        {details.title} {" - "} <span>⭐️ {details.rating?.rate}</span>
      </h2>
      <h3>
        {details.category} {" - "} {"$"}
        {details.price}
      </h3>
      <p>{details.description}</p>
    </div>
  );
}

export default ProductDetail;
