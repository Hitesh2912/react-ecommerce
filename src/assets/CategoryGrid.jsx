import React from "react";
import "./CategoryGrid.css";
import img1 from "../assets/Category/label1.jpg"
import img2 from "../assets/Category/label6.webp"
import img3 from "../assets/Category/label1.webp"
import img4 from "../assets/Category/label10.jpg"
import img5 from "../assets/Category/label2.webp"
import img6 from "../assets/Category/label4.jpg"
import img7 from "../assets/Category/label3.webp"
import img8 from "../assets/Category/label5.jpg"
import img9 from "../assets/Category/label7.jpg"
import img10 from "../assets/Category/label6.webp"
import img11 from "../assets/Category/label1.avif"
import img12 from "../assets/Category/label9.webp"


const categories = [
  { img: img1, label: "Kid's Wear" },
  { img: img2, label: "Foot Wear" },
  { img: img3, label: "Women's Wear" },
  { img: img4, label: "Men's Wear" },
  { img: img5, label: "Ethnic Wear" },
  { img: img6, label: "Makeup" },
  { img: img7, label: "Watches" },
  { img: img8, label: "Home Decor" },
  { img: img9, label: "Jewellery" },
  { img: img10, label: "Shoes" },
  { img: img11, label: "Ladies Bags" },
  { img: img12, label: "Speakers" },
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
