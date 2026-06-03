"use client";

import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import { projects } from "../lib/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Battery, Zap, Settings, Camera, CheckCircle, Users, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* 📊 STATISTICS SECTION */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20+", label: "Years Experience", icon: Clock },
              { value: "500+", label: "Projects Completed", icon: CheckCircle },
              { value: "24/7", label: "Support Available", icon: Users },
              { value: "100%", label: "Customer Focus", icon: MapPin },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100">
                    <stat.icon className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm md:text-base text-slate-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 ABOUT */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              20+ Years of Renewable Energy Excellence
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Mainstream Industries LTD is Nigeria's trusted renewable energy partner, delivering premium solar installations, hybrid systems, and energy solutions to homes, businesses, and communities nationwide. With proven expertise and certified installers, we power the future with confidence and reliability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["Premium Equipment", "Expert Installation", "After-Sales Support"].map((t) => (
                <div key={t} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-700 shadow-soft">✓ {t}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* 🔥 FEATURED PRODUCTS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Premium Equipment</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Products</h2>
            </motion.div>
            <Link href="/shop" className="text-blue-700 font-semibold hover:text-blue-900 transition mt-4 md:mt-0">
              View All Products →
            </Link>
          </div>

          {/* MOBILE SCROLL */}
          <div className="block md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex gap-4 pb-4">
              {products.slice(0, 6).map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[80%] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-200"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                    <p className="text-xs text-slate-500 mb-3">Contact us for pricing</p>
                    <Link href={`/shop/${product.slug}`} className="block text-center bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 rounded-xl text-xs font-medium transition hover:from-blue-800 hover:to-blue-700">
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-200"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">Contact us for pricing</p>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white py-2 rounded-xl text-sm font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ⚡ SERVICES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Premium Energy Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From residential to commercial, we design and install tailored energy systems for every need.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Solar Panel Installation" icon={Sun} />
            <ServiceCard title="Solar CCTV Installation" icon={Camera} />
            <ServiceCard title="Hybrid Inverter Systems" icon={Zap} />
            <ServiceCard title="Battery Storage Solutions" icon={Battery} />
            <ServiceCard title="Off-Grid Solar Systems" icon={Sun} />
            <ServiceCard title="Energy Consulting" icon={Settings} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-800 hover:to-blue-700 transition">
              Explore All Services →
            </Link>
          </motion.div>
        </div>
      </section>


      {/* 🏗️ PROJECTS GALLERY */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Real Results</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Projects Portfolio</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Completed installations across residential, commercial, and industrial sectors nationwide.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl h-40 md:h-52 shadow-lg hover:shadow-2xl transition cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold text-sm">{project.title}</p>
                    <p className="text-xs text-gray-300">{project.location || "Project"}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-800 hover:to-blue-700 transition">
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Customer Feedback</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Customers Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chidinma O.",
                location: "Awka, Anambra",
                testimonial: "Professional team, excellent installation quality. My electricity bills dropped significantly after the solar system was installed.",
                rating: 5,
              },
              {
                name: "Emeka A.",
                location: "Lagos",
                testimonial: "Great customer service and reliable after-sales support. The system performs excellently even during poor weather.",
                rating: 5,
              },
              {
                name: "Fatima U.",
                location: "Onitsha",
                testimonial: "Highly recommend Mainstream for solar CCTV and reliable backup power. 24/7 support is fantastic.",
                rating: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{t.testimonial}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 BRANDS WE WORK WITH */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Premium Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Brands We Work With</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">Trusted equipment partners for premium energy solutions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {["Growatt", "Deye", "Jinko", "LONGi", "Huawei", "Felicity"].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl hover:shadow-lg transition border border-slate-200"
              >
                <p className="text-slate-700 font-semibold text-center">{brand}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Power Your Space with Solar?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Get a free consultation from our energy experts and discover the perfect solar solution for your home or business.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/2348068387145"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}