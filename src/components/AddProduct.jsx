import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../utils/productSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [form, setForm] = useState({
    name: "",
    category: "",
    expiryDate: "",
    cost: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.name || !form.category || !form.expiryDate || !form.cost) return;
    dispatch(addProduct(form));
    navigate("/");
  };

  const handleReset = () => {
    setForm({
      name: "",
      category: "",
      expiryDate: "",
      cost: "",
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add new product</h2>
      <div className="grid grid-cols-4 gap-6 mb-8 items-start">
        <div>
          <label htmlFor="name">Name of product</label>
          <input
            name="name"
            placeholder="Name of product"
            className="border p-2 w-full"
            value={form.name}
            onChange={handleChange}
          />
          <div className="text-xs text-gray-500 mt-1">Alpha numeric only with space allowed</div>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            className="border p-2 w-full"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="Finished">Finished</option>
            <option value="Semi-finished">Semi-finished</option>
            <option value="Raw material">Raw material</option>
          </select>
          <div className="text-xs text-gray-500 mt-1">Finished/Semi-finished/Raw material</div>
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry date</label>
          <input
            type="date"
            name="expiryDate"
            className="border p-2 w-full"
            min={new Date().toISOString().split("T")[0]}
            value={form.expiryDate}
            placeholder="Expiry Date"
            onChange={handleChange}
          />
          <div className="text-xs text-gray-500 mt-1">Only future date allowed</div>
        </div>
        <div>
          <label htmlFor="cost">Cost</label>
          <div className="flex items-center">
            
            <input
              type="number"
              name="cost"
              placeholder="3,000"
              className="border p-2 w-full"
              value={form.cost}
              onChange={handleChange}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">Only numbers with decimals allowed</div>
        </div>
      </div>
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-12 py-3 rounded text-lg font-semibold"
        >
          Save
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 px-12 py-3 rounded text-lg font-semibold text-gray-700"
        >
          Reset
        </button>
      </div>
      <div className="mt-8">
        <div className="text-center text-lg font-semibold mb-2">All products</div>
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
            {products.map((p, idx) => (
              <tr key={p.id}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2">{p.expiryDate}</td>
                <td className="border p-2">${p.cost}</td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">No products added.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
