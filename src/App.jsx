import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ProductList from "./components/ProductList";


import Carts from "./components/Carts";
import AddToCart from "./components/AddToCart";
import AddProduct from "./components/AddProduct";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
      </Routes>
    </Router>
  );
}

export default App;
