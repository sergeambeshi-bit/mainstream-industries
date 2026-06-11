"use client";

import { products } from "@/lib/products";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#06152F] via-[#0A2A66] to-[#123D91] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
            Premium Solar Equipment
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Solar Products & Energy Solutions
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Explore premium solar panels, hybrid inverters, lithium batteries
            and energy solutions designed for homes, businesses and commercial
            facilities.
          </p>
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold shadow-lg">
                  {product.badge}
                </div>

                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {product.name}
                </h3>

                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                  {product.warranty}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.benefits.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-slate-500 mb-6 font-medium">
                  Contact Us For Pricing
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
                  >
                    View Details
                  </Link>

                  <a
                    href={`https://wa.me/2348068387145?text=${encodeURIComponent(
                      `Hello, I'm interested in ${product.name}`
                    )}`}
                    className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
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