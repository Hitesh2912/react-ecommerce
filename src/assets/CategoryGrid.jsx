import React from "react";
import "./CategoryGrid.css";

const categories = [
  { img: "src/assets/Category/label1.jpg", label: "Kid's Wear" },
  { img: "src/assets/Category/label6.webp", label: "Foot Wear" },
  { img: "src/assets/Category/label.webp", label: "Women's Wear" },
  { img: "src/assets/Category/label10.jpg", label: "Men's Wear" },
  { img: "src/assets/Category/label2.webp", label: "Ethnic Wear" },
  { img: "src/assets/Category/label4.jpg", label: "Makeup" },
  { img: "src/assets/Category/label3.webp", label: "Watches" },
  { img: "src/assets/Category/label5.jpg", label: "Home Decor" },
  { img: "src/assets/Category/label7.jpg", label: "Jewellery" },
  { img: "src/assets/Category/label6.webp", label: "Shoes" },
  { img: "src/assets/Category/label8.avif", label: "Ladies Bags" },
  { img: "src/assets/Category/label9.webp", label: "Speakers" },
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
