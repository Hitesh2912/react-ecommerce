import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Men from "./pages/categories/Men";

import Home from "./pages/Home"

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/men" element={<Men />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
