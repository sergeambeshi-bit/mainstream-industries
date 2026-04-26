"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <section
      className="relative text-white py-16 md:py-24 px-6 text-center overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: image
          ? `url('${image}')`
          : "linear-gradient(to right, rgb(29 78 216), rgb(30 58 138))",
      }}
    >
      {/* Base overlay for text legibility over photos */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
