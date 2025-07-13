import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold">Products</h2>
        <span className="text-gray-600">{filteredProducts.length} products</span>
      </div>
      <input
        type="text"
        placeholder="Search product by name or category"
        className="border p-2 mb-2 w-full max-w-md"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">No.</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Expiry date</th>
            <th className="border p-2">Cost</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p, idx) => (
            <tr key={p.id}>
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">{p.expiryDate}</td>
              <td className="border p-2">${p.cost}</td>
            </tr>
          ))}
          {filteredProducts.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-4">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
