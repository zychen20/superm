import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.js";

export default function Navbar(props) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(prefersDark);

  useEffect(() => {
    if (isDarkTheme)
      document.body.className = "dark";
    else
      document.body.className = "";
  }, [isDarkTheme]);

  function handleBtnClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button className="theme-switcher" onClick={handleBtnClick}>
            {isDarkTheme ? "Dark" : "Light"}
          </Button>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
