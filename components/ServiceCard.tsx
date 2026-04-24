"use client";

import { motion } from "framer-motion";
import { LucideIcon, Zap } from "lucide-react";

type Props = {
  title: string;
  desc?: string;
  icon?: LucideIcon;
};

export default function ServiceCard({ title, desc, icon: Icon }: Props) {
  const IconComponent = Icon || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-2xl border border-blue-800/30 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* 🔥 Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full"></div>
      </div>

      {/* 🔥 Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      {/* 🔥 Icon */}
      <div className="relative w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-blue-700 transition duration-300 shadow-sm">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <IconComponent size={24} />
        </motion.div>
      </div>

      {/* 🔥 Title */}
      <h3 className="relative font-semibold text-lg mb-2 text-white group-hover:text-blue-200 transition">
        {title}
      </h3>

      {/* 🔥 Description */}
      <p className="relative text-blue-100 text-sm leading-relaxed">
        {desc ||
          "Professional solar energy solutions tailored for reliability, efficiency and long-term performance."}
      </p>

      {/* 🔥 Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}