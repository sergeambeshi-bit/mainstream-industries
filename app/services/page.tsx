"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Sun, Battery, Settings, Lightbulb, Camera } from "lucide-react";

const services = [
  {
    title: "Solar Panel Installation",
    desc: "Professional solar system design and installation for homes, offices and industrial use.",
    icon: Sun,
  },
  {
    title: "Solar CCTV Installation & Smart Security",
    desc: "Advanced solar-powered CCTV systems for homes, offices and remote locations with 24/7 surveillance and energy independence.",
    icon: Camera,
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
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900">

      {/* 💼 SERVICES GRID */}
      <section className="pt-0 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {services.map((service, i) => {
            const Icon = service.icon;

            const Card = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl border border-blue-800/30 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full"></div>
                </div>

                {/* Icon */}
                <div className="relative w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-blue-700 transition duration-300">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* ✅ TRUST LINE */}
                <p className="text-xs text-blue-200 mb-6">
                  ✔ Fast installation • ✔ Reliable systems • ✔ Expert support
                </p>

                {/* 🔥 CTA ROW */}
                <div className="flex items-center justify-between gap-3">

                  {/* Learn more */}
                  {service.link ? (
                    <Link
                      href={service.link}
                      className="text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition"
                    >
                      Learn more →
                    </Link>
                  ) : (
                    <span className="text-sm text-blue-200">
                      Available now
                    </span>
                  )}

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/2347064493699"
                    className="bg-white text-blue-700 text-xs px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Get Quote
                  </a>

                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
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

      {/* 🚀 STRONG CTA */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Need a Solar Solution?
          </h2>

          <p className="text-blue-200 mb-6">
            Get expert advice, system design and pricing tailored to your needs.
          </p>

          <a
            href="https://wa.me/2347064493699"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold inline-block hover:bg-gray-100 transition shadow-lg"
          >
            Get a Free Solar Consultation
          </a>
        </div>
      </section>

    </div>
  );
}