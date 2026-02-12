import React from "react";
import "./Footer.css";
// import logo from "../assets/icons/Tshirt.png"; // replace with your logo
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="src/assets/icons/Tshirt.png" alt="Logo" />
          <p>Your one-stop destination for fashion, beauty & lifestyle products. Quality guaranteed!</p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Beauty</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
          <p>Subscribe to our newsletter for latest offers!</p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourCompanyName. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
