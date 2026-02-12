import React, { useState, useEffect } from "react";
import "./Slider.css";

import img1 from "../assets/Slider/slider7.jpg";
import img2 from "../assets/Slider/slider4.webp";
import img3 from "../assets/Slider/slider6.jpg";
import img4 from "../assets/Slider/slider12.jpg";

const images = [img1, img2, img3, img4];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return; // do nothing if paused

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img src={images[index]} alt={`slide-${index}`} className="slide" />
    </div>
  );
};

export default Slider;
