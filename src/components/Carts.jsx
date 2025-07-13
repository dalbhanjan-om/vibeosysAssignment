import React from "react";
import { useSelector } from "react-redux";

export default function Carts() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Cart</h2>
        <span className="text-gray-600">{cart.length} Items in cart</span>
      </div>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">No.</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">${item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
