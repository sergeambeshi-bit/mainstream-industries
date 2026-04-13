"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import Link from "next/link";

const categories = [
  { name: "All", value: "all" },
  { name: "Solar Panels", value: "solar-panels" },
  { name: "Inverters", value: "inverters" },
  { name: "Batteries", value: "batteries" },
  { name: "Charge Controllers", value: "charge-controllers" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (sortOption === "low") {
    filteredProducts = filteredProducts.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/g, "")) -
        Number(b.price.replace(/[^0-9]/g, ""))
    );
  }

  if (sortOption === "high") {
    filteredProducts = filteredProducts.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/g, "")) -
        Number(a.price.replace(/[^0-9]/g, ""))
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto flex gap-8">
        
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white p-6 rounded-2xl border h-fit sticky top-24">
          <h2 className="font-bold mb-4">Categories</h2>

          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-left px-3 py-2 rounded-lg ${
                  selectedCategory === cat.value
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          
          {/* Header */}
          <div className="mb-6 flex flex-col md:flex-row justify-between gap-4 items-center">
            <h1 className="text-3xl font-bold">
              Solar Products
            </h1>

            <div className="flex gap-4 w-full md:w-auto">
              
              {/* Search */}
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3 border rounded-xl w-full md:w-64"
              />

              {/* Sort */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-3 border rounded-xl"
              >
                <option value="default">Sort</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.slug}
                className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition relative"
              >
                {/* Badge */}
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}

                {index === 1 && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    HOT
                  </span>
                )}

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h2 className="font-semibold text-lg mb-2">
                    {product.name}
                  </h2>

                  <p className="text-blue-600 font-bold mb-4 text-lg">
                    {product.price}
                  </p>

                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-xl mb-2 hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>

                  <a
                    href={`https://wa.me/234XXXXXXXXXX?text=Hello, I'm interested in ${product.name}`}
                    className="block text-center bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty */}
          {filteredProducts.length === 0 && (
            <p className="text-center mt-10 text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}