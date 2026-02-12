import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/icons/Tshirt.png";
import searchIcon from "../assets/icons/Search.png";
import profileIcon from "../assets/icons/Account.png";
import wishlistIcon from "../assets/icons/wishlist.png";
import cartIcon from "../assets/icons/cart.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Logo */}
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      {/* Links */}
      <div className="nav-links">
        <Link to="/men"><p>MEN</p></Link>
        <Link to="/women"><p>WOMEN</p></Link>
        <Link to="/house"><p>HOUSE</p></Link>
        <Link to="/beauty"><p>BEAUTY</p></Link>
        <Link to="/genz"><p>GENZ</p></Link>
        <Link to="/new"><p>NEW COMERS</p></Link>
      </div>

      {/* Search */}
      <div className="search">
        <input placeholder="Search..." />
        <img src={searchIcon} alt="search" />
      </div>

      {/* Profile Dropdown */}
      <div className="profile-container">
        <img
          src={profileIcon}
          alt="profile"
          className="profile-icon"
          onClick={() => setOpen(!open)}
        />

        {open && (
          <div className="dropdown">
            <Link to="/signup" onClick={() => setOpen(false)}>Signup</Link>
            <Link to="/signin" onClick={() => setOpen(false)}>Signin</Link>
            <button onClick={() => {
              alert("Logged out!");
              setOpen(false);
            }}>
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Other icons */}
      <Link to="/wishlist">
        <img src={wishlistIcon} alt="wishlist" />
      </Link>

      <Link to="/cart">
        <img src={cartIcon} alt="cart" />
      </Link>
    </nav>
  );
};

export default Navbar;