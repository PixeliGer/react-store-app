import React, { useCallback } from "react";
import "./CategoriesSelect.css";

const createChangeHandler = (callback) => (event) => {
  const value = event.target.value;
  callback({ value });
};

function CategoriesSelect(props) {
  const { categories, onChange: _onChange } = props;

  const onChange = useCallback(createChangeHandler(_onChange), [_onChange]);

  return (
    <div className="select">
      <select name="slct" id="slct" onChange={onChange} defaultValue="Select a Category">
        <option disabled value="Select a Category">
          Select a category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoriesSelect;
