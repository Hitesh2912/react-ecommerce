import React from "react";
import "./CategoryGrid.css";
import img1 from "../assets/Category/label1.jpg"

const categories = [
  { img: img1, label: "Kid's Wear" },
  { img: "../assets/Category/label6.webp", label: "Foot Wear" },
  { img: "../assets/Category/label.webp", label: "Women's Wear" },
  { img: "../assets/Category/label10.jpg", label: "Men's Wear" },
  { img: "../assets/Category/label2.webp", label: "Ethnic Wear" },
  { img: "../assets/Category/label4.jpg", label: "Makeup" },
  { img: "../assets/Category/label3.webp", label: "Watches" },
  { img: "../assets/Category/label5.jpg", label: "Home Decor" },
  { img: "../assets/Category/label7.jpg", label: "Jewellery" },
  { img: "../assets/Category/label6.webp", label: "Shoes" },
  { img: "../assets/Category/label8.avif", label: "Ladies Bags" },
  { img: "../assets/Category/label9.webp", label: "Speakers" },
];

export default function CategoryGrid() {
  return (
    <div className="category-group">
      <h2 className="category-title">SHOP BY CATEGORY</h2>
      <div className="category-grid">
        {categories.map((cat, i) => (
          <div className="category-item" key={i}>
            <img src={cat.img} alt={cat.label} />
            <label className="category-label">{cat.label}</label><br />
            <label className="cta-label">Shop Now</label>
          </div>
        ))}
      </div>
    </div>
  );
}
