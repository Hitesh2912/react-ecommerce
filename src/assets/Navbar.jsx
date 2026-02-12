import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Logo */}
      <Link to="/">
        <img className="logo" src="../assets/icons/Tshirt.png" alt="logo" />
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
        <img src="../assets/icons/Search.png" alt="search" />
      </div>

      {/* Profile Dropdown */}
      <div className="profile-container">
        <img
          src="../assets/icons/Account.png"
          alt="profile"
          className="profile-icon"
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className="dropdown">
            <Link to="/signup" onClick={()=>setOpen(false)}>Signup</Link>
            <Link to="/signin" onClick={()=> setOpen(false)}>Signin</Link>
            <button onClick={() => {alert("Logged out!");setOpen(false);}}>Logout</button>

          </div>
        )}
      </div>

      {/* Other icons */}
      <Link to="/wishlist"><img src="../assets/icons/wishlist.png" alt="wish" /></Link>
      <Link to="/cart"><img src="../assets/icons/cart.png" alt="cart" /></Link>
    </nav>
  );
};

export default Navbar;
