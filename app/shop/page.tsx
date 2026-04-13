"use client";

import { useState } from "react";
import { products } from "../../lib/products";
import Link from "next/link";

const categories = [
  "all",
  "generators",
  "inverters",
  "batteries",
  "ups",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Power Products & Equipment
        </h1>

        {/* 🔍 Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products (e.g. generator, inverter...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h2 className="font-semibold text-lg mb-2">
                  {product.name}
                </h2>

                <p className="text-blue-600 font-bold mb-4">
                  {product.price}
                </p>

                <Link
                  href={`/shop/${product.slug}`}
                  className="block text-center bg-blue-600 text-white py-2 rounded-xl mb-2"
                >
                  View Details
                </Link>

                <a
                  href={`https://wa.me/234XXXXXXXXXX?text=Hello, I'm interested in ${product.name}`}
                  className="block text-center bg-green-500 text-white py-2 rounded-xl"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}