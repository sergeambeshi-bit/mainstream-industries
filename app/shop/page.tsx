"use client";

import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type CatalogueCategory =
  | "all"
  | "solar-panels"
  | "hybrid-inverters"
  | "lithium-batteries"
  | "energy-storage"
  | "portable-power"
  | "accessories";

const categoryFilters: Array<{ label: string; value: CatalogueCategory }> = [
  { label: "All Products", value: "all" },
  { label: "Solar Panels", value: "solar-panels" },
  { label: "Hybrid Inverters", value: "hybrid-inverters" },
  { label: "Lithium Batteries", value: "lithium-batteries" },
  { label: "Energy Storage", value: "energy-storage" },
  { label: "Portable Power", value: "portable-power" },
  { label: "Accessories", value: "accessories" },
];

const specPriority = [
  "RatedPower",
  "BatteryVoltage",
  "Capacity",
  "Efficiency",
  "Voltage",
  "Output",
  "MPPT",
  "CellType",
  "MaxPower",
  "Chemistry",
  "DesignLife",
];

function toReadableSpecKey(key: string) {
  return key.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function getTopSpecs(specs: Product["specs"]) {
  const entries = Object.entries(specs);
  const prioritized = specPriority
    .map((priorityKey) =>
      entries.find(([specKey]) => specKey.toLowerCase() === priorityKey.toLowerCase())
    )
    .filter((entry): entry is [string, string] => Boolean(entry));
  const remaining = entries.filter(
    ([specKey]) =>
      !prioritized.some(
        ([selectedKey]) => selectedKey.toLowerCase() === specKey.toLowerCase()
      )
  );

  return [...prioritized, ...remaining].slice(0, 4);
}

function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 text-center text-slate-600">
        No products match the selected filters.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.map((product, index) => {
        const topSpecs = getTopSpecs(product.specs);

        return (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-72 overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
              {product.badge ? (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold shadow-lg">
                  {product.badge}
                </div>
              ) : null}

              <Image
                src={product.image?.[0] || "/products/placeholder.jpg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 text-white text-[11px] font-semibold tracking-wide uppercase shadow-sm">
                {product.brand}
              </div>

              <h3 className="text-xl font-bold mb-1 text-slate-900">{product.name}</h3>

              <p className="text-sm text-slate-500 mb-4 font-medium">Model: {product.model}</p>

              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                {product.warranty}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {topSpecs.map(([key, value]) => (
                  <span
                    key={`${product.slug}-${key}`}
                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-medium border border-blue-100"
                  >
                    {toReadableSpecKey(key)}: {value}
                  </span>
                ))}
              </div>

              <div className="text-sm text-slate-500 mb-6 font-medium">Contact Us For Pricing</div>

              <div className="flex gap-3">
                <Link
                  href={`/shop/${product.slug}`}
                  className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
                >
                  View Details
                </Link>

                <a
                  href={`https://wa.me/2348068387145?text=${encodeURIComponent(
                    `Hello, I&apos;m interested in ${product.name}`
                  )}`}
                  className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<CatalogueCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const searchableText = `${product.name} ${product.model} ${product.brand}`.toLowerCase();
      const matchesSearch =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const jsdProducts = filteredProducts.filter((product) => product.brand === "JSD Solar");
  const jinkoProducts = filteredProducts.filter(
    (product) => product.brand === "Jinko Solar"
  );

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#06152F] via-[#0A2A66] to-[#123D91] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
            Premium Solar Equipment
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Official JSD Solar &amp; Jinko Solar Product Catalogue
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Explore genuine JSD Solar energy solutions and official Jinko Solar
            panels supplied by Mainstream Industries LTD for residential,
            commercial, and industrial power needs.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categoryFilters.map((filter) => {
              const isActive = selectedCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedCategory(filter.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    isActive
                      ? "bg-blue-700 border-blue-700 text-white shadow-lg"
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-8 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {[
            "✓ Genuine Products",
            "✓ Warranty Support",
            "✓ Professional Installation",
            "✓ Nationwide Delivery",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-xl">
            <label
              htmlFor="product-search"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Search by product name, model, or brand
            </label>
            <input
              id="product-search"
              type="text"
              placeholder="e.g. JSD-H5K, Tiger Neo, Jinko Solar"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Official JSD Solar Products
              </h2>
              <span className="text-sm font-medium text-slate-500">
                {jsdProducts.length} Product{jsdProducts.length === 1 ? "" : "s"}
              </span>
            </div>
            <ProductGrid items={jsdProducts} />
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Official Jinko Solar Products
              </h2>
              <span className="text-sm font-medium text-slate-500">
                {jinkoProducts.length} Product{jinkoProducts.length === 1 ? "" : "s"}
              </span>
            </div>
            <ProductGrid items={jinkoProducts} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#06152F] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need Help Choosing The Right Solar Solution?
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            Speak with our experts today and receive a tailored recommendation
            based on your energy needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-[#06152F] px-8 py-4 rounded-xl font-semibold"
            >
              Get Free Quote
            </Link>

            <a
              href="https://wa.me/2348068387145"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}