"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[65vh] flex items-center justify-center text-center text-white overflow-hidden bg-no-repeat bg-contain md:bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-solar.png')",
      }}
    >
      {/* 🌫️ SOFT DARK BASE (LESS HARSH) */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      {/* ✨ SUBTLE TOP LIGHT (APPLE STYLE) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.18),transparent_60%)]"></div>

      {/* 💎 BLUE ACCENT GLOW (VERY LIGHT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_70%)]"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl px-4 sm:px-6"
      >

        {/* TAG */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70"
        >
          Solar Energy Experts
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Reliable Solar Power
          <span className="block text-blue-300">
            for Homes & Businesses
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Solar panels, inverters, batteries and complete energy systems across Nigeria.
        </motion.p>

        {/* DESKTOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden sm:flex justify-center gap-4 mt-10"
        >
          <Link
            href="/shop"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Shop Products
          </Link>

          <a
            href="https://wa.me/2347064493699"
            className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
          >
            WhatsApp Us
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}