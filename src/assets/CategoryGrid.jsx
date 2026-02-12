import React from "react";
import "./CategoryGrid.css";

import img1 from "./Category/label1.jpg";
import img2 from "./Category/label6.webp";
import img3 from "./Category/label.webp";
import img4 from "./Category/label10.jpg";
import img5 from "./Category/label2.webp";
import img6 from "./Category/label4.jpg";
import img7 from "./Category/label3.webp";
import img8 from "./Category/label5.jpg";
import img9 from "./Category/label7.jpg";
import img10 from "./Category/label6.webp";
import img11 from "./Category/label8.avif";
import img12 from "./Category/label9.webp";

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
        {categories.map((cat, index) => (
          <div className="category-item" key={index}>
            <img src={cat.img} alt={cat.label} />
            <p className="category-label">{cat.label}</p>
            <span className="cta-label">Shop Now</span>
          </div>
        ))}
      </div>
    </div>
  );
}