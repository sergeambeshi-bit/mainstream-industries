"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

type Props = {
  title: string;
};

export default function ServiceCard({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
    >
      {/* 🔥 Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-transparent"></div>

      {/* Icon */}
      <div className="relative w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
        <Zap size={20} />
      </div>

      {/* Title */}
      <h3 className="relative font-semibold text-lg mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="relative text-gray-600 text-sm leading-relaxed">
        Professional solar energy solutions tailored for reliability, efficiency and long-term performance.
      </p>
    </motion.div>
  );
}