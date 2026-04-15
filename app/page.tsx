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
  "/projects/project12.png",
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
{/* 🔥 PRODUCTS (FIXED) */}
<section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-100">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="heading">Featured Products</h2>

      <Link href="/shop" className="text-blue-700 text-sm md:text-base font-semibold">
        View All →
      </Link>
    </div>

    {/* ✅ MOBILE ONLY (STRICT) */}
    <div className="block md:hidden w-full overflow-hidden">
      <div className="horizontal-scroll">

        {products.slice(0, 6).map((product) => (
          <div
            key={product.slug}
            className="scroll-item w-[75%] bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="relative h-40">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-gray-500 text-xs mb-3">
                Contact us for pricing
              </p>

              <Link
                href={`/shop/${product.slug}`}
                className="block text-center bg-blue-700 text-white py-2 rounded-xl text-xs"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* ✅ DESKTOP ONLY (STRICT) */}
    <div className="hidden md:grid grid-cols-4 gap-8 w-full">

      {products.slice(0, 4).map((product, index) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
        >
          <div className="relative h-48">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="font-semibold mb-2">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Contact us for pricing
            </p>

            <Link
              href={`/shop/${product.slug}`}
              className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-xl text-sm transition"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* 💼 WHY US */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4 sm:px-6 bg-white text-center"
      >
        <h2 className="heading mb-8">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {[
            "20+ Years Experience",
            "Reliable Power Systems",
            "Clean Energy Solutions",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-4 md:p-8 bg-gray-50 rounded-2xl shadow-sm"
            >
              <h3 className="font-bold text-sm md:text-lg mb-2">{item}</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Delivering reliable and efficient energy solutions across Nigeria.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ⚡ SERVICES */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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

      {/* 🔥 PROJECT GALLERY */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">

        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Real installations across Nigeria
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 animate-marquee">

            {projectImages.map((src, i) => (
              <div
                key={`first-${i}`}
                className="min-w-[220px] md:min-w-[300px] h-[140px] md:h-[200px] relative rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt="Project"
                  fill
                  sizes="(max-width: 768px) 70vw, 300px"
                  quality={60}
                  className="object-cover"
                />
              </div>
            ))}

            {projectImages.map((src, i) => (
              <div
                key={`second-${i}`}
                className="min-w-[220px] md:min-w-[300px] h-[140px] md:h-[200px] relative rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt="Project"
                  fill
                  sizes="(max-width: 768px) 70vw, 300px"
                  quality={60}
                  className="object-cover"
                />
              </div>
            ))}

          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link href="/projects" className="button-primary">
            View All Projects
          </Link>
        </div>

      </section>

    </div>
  );
}