"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

type Props = {
  title: string;
  desc?: string;
  icon?: any;
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
      className="group relative p-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-white shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
    >
      {/* 🔥 Animated Glow Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/10 blur-2xl rounded-full"></div>
      </div>

      {/* 🔥 Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      {/* 🔥 Icon */}
      <div className="relative w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-sm group-hover:shadow-md">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent size={24} />
        </motion.div>
      </div>

      {/* 🔥 Title */}
      <h3 className="relative font-semibold text-lg mb-2 text-gray-900 group-hover:text-blue-700 transition">
        {title}
      </h3>

      {/* 🔥 Description */}
      <p className="relative text-gray-600 text-sm leading-relaxed">
        {desc ||
          "Professional solar energy solutions tailored for reliability, efficiency and long-term performance."}
      </p>

      {/* 🔥 Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}