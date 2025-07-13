import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // optional, or any icon lib
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <div className="text-xl font-bold">LOGO</div>
      <div className="flex space-x-4 items-center">
        <Link to="/" className="hover:underline">Products</Link>
        <Link to="/add" className="hover:underline">Add products</Link>
        <Link to="/add-to-cart" className="hover:underline">Add to cart</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
