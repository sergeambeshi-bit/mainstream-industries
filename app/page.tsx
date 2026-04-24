"use client";

import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Battery, Zap, Settings, Camera } from "lucide-react"; // ✅ FIXED IMPORT

/* ✅ FIXED PROJECT IMAGES */
const projectImages = [
  "Residential Solar Installation",
  "Commercial Solar System",
  "Solar Street Lighting",
  "Inverter & Battery Setup",
  "Hybrid Power System",
  "Solar Panel Roof Setup",
  "Industrial Solar Project",
  "Battery Storage System",
  "Off-Grid Installation",
  "Large Scale Deployment",
  "Commercial Backup System",
  "Advanced Solar Installation",
].map((title) =>
  `/projects/${title
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")}.png`
);

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* 🏢 ABOUT */}
      <section className="section-tight bg-white">
        <div className="container text-center">
          <h2 className="heading">
            <span className="subtitle-icon">🏢</span>
            About Mainstream Industries LTD
          </h2>

          <p className="subtext max-w-3xl mx-auto">
            Mainstream Industries Ltd is a leading renewable energy company...
          </p>
        </div>
      </section>

      {/* 🔥 PRODUCTS */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-6">
            <h2 className="heading">
              <span className="subtitle-icon">🔋</span>
              Featured Products
            </h2>

            <Link href="/shop" className="text-blue-700 text-sm md:text-base font-semibold">
              View All →
            </Link>
          </div>

          {/* MOBILE */}
          <div className="block md:hidden w-full overflow-hidden">
            <div className="horizontal-scroll">
              {products.slice(0, 6).map((product) => (
                <div key={product.slug} className="scroll-item w-[75%] bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative h-40">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2">
                      <span className="subtitle-icon">🔋</span>
                      {product.name}
                    </h3>

                    <p className="text-gray-500 text-xs mb-3">
                      Contact us for pricing
                    </p>

                    <Link href={`/shop/${product.slug}`} className="block text-center bg-blue-700 text-white py-2 rounded-xl text-xs">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP */}
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
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold mb-2">
                    <span className="subtitle-icon">🔋</span>
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    Contact us for pricing
                  </p>

                  <Link href={`/shop/${product.slug}`} className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-xl text-sm transition">
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
          <span className="subtitle-icon">⭐</span>
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {[
            "20+ Years Experience",
            "Reliable Power Systems",
            "Clean Energy Solutions",
          ].map((item, i) => (
            <motion.div key={i} className="p-4 md:p-8 bg-gray-50 rounded-2xl shadow-sm">
              <h3 className="font-bold text-sm md:text-lg mb-2">{item}</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Delivering reliable and efficient energy solutions across Nigeria.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ⚡ PREMIUM SERVICES */}
      <section className="py-14 md:py-24 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 text-center">
            <span className="subtitle-icon">🛠️</span>
            Our Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">

            <ServiceCard
              title="Solar Panel Installation"
              desc="End-to-end solar installation for homes and businesses with maximum efficiency and long-term savings."
              icon={Sun}
            />

            <ServiceCard
              title="Solar CCTV Installation"
              desc="Solar-powered surveillance systems with 24/7 monitoring, perfect for homes, estates and remote locations."
              icon={Camera}
            />

            <ServiceCard
              title="Hybrid Inverter Systems"
              desc="Smart hybrid systems that combine solar, battery and grid power for uninterrupted electricity."
              icon={Zap}
            />

            <ServiceCard
              title="Battery Storage Solutions"
              desc="Reliable energy storage systems designed to keep your power running day and night."
              icon={Battery}
            />

            <ServiceCard
              title="Off-Grid Solar Systems"
              desc="Complete off-grid solutions for locations without access to public electricity."
              icon={Sun}
            />

            <ServiceCard
              title="Energy Audits & Consulting"
              desc="Professional energy analysis to optimize your power usage and reduce long-term costs."
              icon={Settings}
            />

          </div>
        </div>
      </section>

      {/* 🔥 PROJECT GALLERY */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">

        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="subtitle-icon">🏗️</span>
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
                <Image src={src} alt="Project" fill className="object-cover" />
              </div>
            ))}

            {projectImages.map((src, i) => (
              <div
                key={`second-${i}`}
                className="min-w-[220px] md:min-w-[300px] h-[140px] md:h-[200px] relative rounded-2xl overflow-hidden shadow-md"
              >
                <Image src={src} alt="Project" fill className="object-cover" />
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