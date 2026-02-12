import React, { useState, useEffect } from "react";
import "./Flipers.css";

const Flipers = () => {
  const messages = [
    { title: "Flat 7.5% OFF", desc: "on Flipkart Axis Bank" },
    { title: "Flat 7.5% Cashback", desc: "on SBI Credit Card" },
    { title: "Flat 10% Discount*", desc: "on credit card & EMI" },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true); // fade in new message
      }, 300); // fade out duration
    }, 2000); // change message every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flipers ${fade ? "fade-in" : "fade-out"}`}>
      <h2>{messages[index].title}</h2>
      <p>{messages[index].desc}</p>
    </div>
  );
};

export default Flipers;
