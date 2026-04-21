"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Sun, Battery, Settings, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Solar Panel Installation",
    desc: "Professional solar system design and installation for homes, offices and industrial use.",
    icon: Sun,
  },
  {
    title: "Inverter & Battery Systems",
    desc: "Reliable backup power systems with automatic switching and uninterrupted electricity.",
    icon: Battery,
  },
  {
    title: "Solar Street Lighting",
    desc: "Cost-effective solar lighting solutions for estates, roads and commercial environments.",
    icon: Lightbulb,
    link: "/services/solar-street-lighting",
  },
  {
    title: "Backup Power Integration",
    desc: "Seamless integration of solar, battery and grid systems for reliability.",
    icon: Zap,
  },
  {
    title: "Energy Consulting",
    desc: "Expert advice on energy management, system sizing and cost optimization.",
    icon: Settings,
  },
  {
    title: "System Maintenance",
    desc: "Ongoing maintenance and support to ensure optimal performance.",
    icon: Settings,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* 🔥 HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Professional solar and energy solutions tailored for homes, businesses and industries across Nigeria.
        </p>
      </section>

      {/* 💼 SERVICES GRID */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {services.map((service, i) => {
            const Icon = service.icon;

            const Card = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-8 section-light rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2">
                  <span className="subtitle-icon">🛠️</span>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );

            return service.link ? (
              <Link key={i} href={service.link}>
                {Card}
              </Link>
            ) : (
              Card
            );
          })}

        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            <span className="subtitle-icon">🛠️</span>
            Need a Solar Solution?
          </h2>

          <p className="text-blue-200 mb-6">
            Talk to our experts and get a customized solution for your home or business.
          </p>

          <a
            href="https://wa.me/2347064493699"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold inline-block hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}