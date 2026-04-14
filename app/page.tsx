"use client";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero */}
      <Hero />

      {/* 🏢 ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Mainstream Industries
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Mainstream Industries Ltd is a leading renewable energy company in Nigeria,
            founded in 2011 with over 20 years of expertise in solar energy systems.
          </p>
        </div>
      </motion.section>

      {/* 🔥 PRODUCTS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <Link href="/shop" className="text-blue-700 font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full z-10">
                    HOT
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-base mb-2">
                    {product.name}
                  </h3>

                  <p className="text-blue-700 font-bold mb-4">
                    {product.price}
                  </p>

                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-xl text-sm transition"
                  >
                    View Product
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* 💼 WHY US */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 bg-white text-center"
      >
        <h2 className="text-4xl font-bold mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "20+ Years Experience",
            "Reliable Power Systems",
            "Clean Energy Solutions",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-3">{item}</h3>
              <p className="text-gray-600 text-sm">
                Delivering reliable and efficient energy solutions across Nigeria.
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* ⚡ SERVICES */}
      <section className="py-24 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Solar Panel Installation",
              "Hybrid Inverter Systems",
              "Battery Storage Solutions",
              "Off-Grid Solar Systems",
              "Energy Audits & Consulting",
              "Backup Power Integration",
            ].map((service, i) => (
              <ServiceCard key={i} title={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-white text-center"
      >
        <h2 className="text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Mainstream transformed our power system completely.",
            "Our estate now runs on solar lighting efficiently.",
            "Highly professional and reliable service.",
          ].map((text, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <p className="text-gray-600 mb-4">“{text}”</p>
              <h4 className="font-semibold">Client</h4>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ⚡ POWER */}
      <section className="py-24 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Powering Nigeria’s Future
        </h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Reliable solar solutions for homes, businesses and industries.
        </p>
      </section>

      {/* 🚀 CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Switch to Reliable Solar Power Today
        </h2>

        <p className="mb-6 text-lg text-blue-100">
          Protect your home and business from outages.
        </p>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold inline-block hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}