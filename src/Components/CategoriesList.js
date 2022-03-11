import React from "react";
import "./CategoriesList.css";

function CategoriesList({ categories }) {
  return (
    <div className="categories-row">
      {categories.map((category, index) => (
        <span key={index} className="chip primary">{category}</span>
      ))}
    </div>
  );
}

export default CategoriesList;
