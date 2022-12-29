import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <nav>
        <div className="navbar">
          <h2 className="logo">useReducer Store</h2>
          <div className="menu">
            <NavLink to="/Redux-Shopping-Cart">Home</NavLink>
            <NavLink to="/Redux-Shopping-Cart/cart">Cart</NavLink>
            <h4>Cart items: {items.cartItems.length}</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
