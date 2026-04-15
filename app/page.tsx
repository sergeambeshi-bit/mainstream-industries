"use client";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projectImages = [
  "/projects/project1.png",
  "/projects/project2.png",
  "/projects/project3.png",
  "/projects/project4.png",
  "/projects/project5.png",
  "/projects/project7.png",
  "/projects/project8.png",
  "/projects/project9.png",
  "/projects/project10.png",
  "/projects/project11.png",
  "/projects/project12.png", // keep homepage light (6 only)
];

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero */}
      <Hero />

      {/* 🏢 ABOUT */}
  <section className="section-tight bg-white">
  <div className="container text-center">
    <h2 className="heading">
      About Mainstream Industries
    </h2>

    <p className="subtext max-w-3xl mx-auto">
      Mainstream Industries Ltd is a leading renewable energy company...
    </p>
  </div>
</section>

      {/* 🔥 PRODUCTS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-wide bg-gray-100"
      >
        <div className="container">

          <div className="flex justify-between items-center mb-12">
            <h2 className="heading">
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
        className="section-tight bg-white text-center"
      >
        <h2 className="heading mb-12">
          Why Choose Us
        </h2>

        <div className="container grid md:grid-cols-3 gap-10">
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
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gray-100">
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

      {/* 🔥 PROJECT GALLERY (REPLACES BLUE SECTION) */}
      <section className="py-20 bg-white overflow-hidden">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-2">
            Real installations across Nigeria
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee">

            {projectImages.map((src, i) => (
              <div
                key={`first-${i}`}
                className="min-w-[300px] h-[200px] relative rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt="Project"
                  fill
                  sizes="(max-width: 768px) 80vw, 300px"
                  quality={60}
                  className="object-cover"
                />
              </div>
            ))}

            {projectImages.map((src, i) => (
              <div
                key={`second-${i}`}
                className="min-w-[300px] h-[200px] relative rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt="Project"
                  fill
                  sizes="(max-width: 768px) 80vw, 300px"
                  quality={60}
                  className="object-cover"
                />
              </div>
            ))}

          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="button-primary">
            View All Projects
          </Link>
        </div>

      </section>

    </div>
  );
}