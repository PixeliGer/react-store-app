import React, { useEffect, useState } from "react";
import CategoriesSelect from "../Components/CategoriesSelect";
import ProductList from "../Components/ProductList";
import { GET_PRODUCTS, GET_CATEGORIES } from "../Utils/ApiUrls";

function Products() {
  const [products, setProducts] = useState([]);
  // State for populate Categories Dropdown
  const [categories, setCategories] = useState([]);
  // State for selected category in Select Dropdown
  let [category, setCategory] = useState("Select a Category");
  let [filteredProducts, setFilteredProducts] = useState([]);

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
    fetchProducts(GET_PRODUCTS);
  }, []);

  useEffect(() => {
    fetchCategories(GET_CATEGORIES);
  }, []);

  const handleCategory = (data) => {
    category = data.value;
    setCategory(category);
    // Filter products by selected category
    filteredProducts = products.filter((product) => {
      return product.category.includes(category);
    });

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="main">
      <div className="categories-row">
        <CategoriesSelect
          onChange={(data) => handleCategory(data)}
          categories={categories}
        />
      </div>
      <ProductList products={products} />
    </div>
  );
}

export default Products;
