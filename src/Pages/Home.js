import React, { useEffect, useState } from "react";
import CategoriesList from "../Components/CategoriesList";
import ProductList from "../Components/ProductList";
import { GET_PRODUCTS, GET_CATEGORIES } from "../Utils/ApiUrls";
function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  const fetchCategories = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts(`${GET_PRODUCTS}?limit=10`);
  }, []);

  useEffect(() => {
    fetchCategories(GET_CATEGORIES);
  }, []);

  return (
    <div className="main">
      <CategoriesList categories={categories} />
      <ProductList products={products} />
    </div>
  );
}

export default Home;
