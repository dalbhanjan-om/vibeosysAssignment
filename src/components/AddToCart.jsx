import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

export default function AddToCart() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add product to cart</h2>
        <span className="flex items-center text-gray-600">
          <ShoppingCart className="mr-1 w-5 h-5" />
          {cart.length} Items in cart
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p, idx) => (
          <div
            key={p.id}
            className="rounded-2xl border p-6 flex flex-col justify-between min-h-[220px] shadow-sm"
          >
            <div>
              <div className="text-xl font-bold mb-2">{p.name}</div>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm rounded px-2 py-1 font-semibold mb-4">
                {p.category}
              </span>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-lg font-semibold">${p.cost}</span>
              <button
                onClick={() => handleAdd(p)}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
              >
                Add <ShoppingCart className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No products available.</div>
        )}
      </div>
    </div>
  );
} 