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
      {/* 🔥 SOFT LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-black/50"></div>

      {/* ✨ TOP LIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]"></div>

      {/* ✨ SUBTLE ANIMATED LIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-4 sm:px-6"
      >

        {/* TAG */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-blue-200"
        >
          Solar Energy Experts
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
        >
          Reliable Solar Power for
          <span className="block text-blue-300">
            Homes & Businesses
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Solar panels, inverters, batteries and complete energy systems across Nigeria.
        </motion.p>

        {/* DESKTOP CTA ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden sm:flex justify-center gap-4 mt-8"
        >
          <a
            href="/shop"
            className="button-primary shadow-xl hover:scale-105"
          >
            Shop Solar Products
          </a>

          <a
            href="https://wa.me/2347064493699"
            className="button-whatsapp hover:scale-105"
          >
            WhatsApp Us
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}