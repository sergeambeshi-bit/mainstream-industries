"use client";

import { products } from "@/lib/products";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Solar Products
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Explore our range of solar panels, inverters, batteries and complete energy systems.
        </p>
      </section>

      {/* 🛍️ PRODUCTS */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group section-light rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={420}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* 🔥 Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="section-light text-blue-700 px-4 py-2 rounded-lg font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="font-semibold text-sm mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-400 text-xs mb-3">
                  Enquire for details
                </p>

                <div className="flex gap-2">

                  <Link
                    href={`/shop/${product.slug}`}
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm transition"
                  >
                    View
                  </Link>

                  <a
                    href={`https://wa.me/2347064493699?text=${encodeURIComponent(
                      `Hello, I'm interested in ${product.name}`
                    )}`}
                    className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm transition"
                  >
                    Order
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}