"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-solar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 FIXED OVERLAY (LESS DARK, MORE PREMIUM) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-black/60"></div>

      {/* ✨ PREMIUM LIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_60%)]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-4 sm:px-6"
      >

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm uppercase tracking-widest text-blue-200"
        >
          Solar Energy Experts
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Reliable Solar Power for
          <span className="block text-blue-300">
            Homes & Businesses
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto"
        >
          Solar panels, inverters, batteries and complete energy systems across Nigeria.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/shop"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition shadow-lg hover:scale-105"
          >
            Shop Solar Products
          </a>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="bg-white/15 backdrop-blur-md border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/25 transition hover:scale-105"
          >
            WhatsApp Us
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}