import React from "react";
import { NavLink } from "react-router-dom"
import './Navigation.css'


function Navigation() {
  return (
    <nav className="store-navbar">
      <ul>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
