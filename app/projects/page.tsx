"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* TRUST BAR */}
      <section className="py-8 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-4">
          {[
            { label: "500+", value: "Projects Completed" },
            { label: "10+", value: "Project Types" },
            { label: "Nationwide", value: "Coverage" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-blue-900">{stat.label}</p>
              <p className="text-sm text-slate-600">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Header */}
      <div className="container text-center pt-12 md:pt-16 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Projects Portfolio
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real solar installations delivered for homes, businesses and communities across Nigeria. Each project represents our commitment to quality, reliability and customer satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Premium Grid */}
      <div className="container px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl h-56 md:h-64 shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-1">Solar Project</p>
                <div className="mt-4 inline-flex px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold w-fit hover:bg-blue-700 transition">
                  View Details →
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Energy Today</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of satisfied customers who have switched to reliable, cost-effective solar energy.</p>
            
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