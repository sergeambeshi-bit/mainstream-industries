"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `Hello, my name is ${form.name}.
Phone: ${form.phone}
Message: ${form.message}`;

    const url = `https://wa.me/2348068387145?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* 🎯 CONTACT SECTION */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-slate-600 mb-10 text-lg">
              Have questions about our solar solutions? Our energy experts are ready to help. Reach out to us today!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  details: ["+234 806 8387145",
                            "+234 803 724 3157",
                  ],
                  link: "tel:+2348068387145",
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["mainstreamindustriesltd@gmail.com"],
                  link: "mailto:mainstreamindustriesltd@gmail.com",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  details: [
                    "Shop B10 & B11, Awka Trade Centre",
                    "Aroma junction, Awka",
                    "Anambra State, Nigeria",
                  ],
                  link: "https://maps.google.com/?q=Shop+B10+B11+Awka+Trade+Centre+Aroma+Junction+Awka+Anambra+State",
                },
                {
                  icon: Clock,
                  title: "Support",
                  details: ["24/7 WhatsApp Support", "Fast Response Time"],
                  link: "https://wa.me/2348068387145",
                },
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={i}
                    href={contact.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group block rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition">
                        <Icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{contact.title}</h3>
                        {contact.details.map((detail, j) => (
                          <p key={j} className="text-sm text-slate-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
            <p className="text-slate-600 mb-6">We&apos;ll respond within 24 hours.</p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold transition shadow-lg"
              >
                Send via WhatsApp
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 📍 MAP SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Mainstream Industries LTD</h3>
                <p className="text-slate-700 leading-relaxed">
                  Visit our modern facility for consultations, system design, and expert advice on the perfect solar solution for your needs.
                </p>
              </div>
              
              <div className="mt-6 p-6 bg-white rounded-2xl border border-slate-200">
                <p className="text-sm font-semibold text-blue-700 uppercase">📍 Address</p>
                <p className="mt-2 text-slate-900 font-semibold">Shop B10 & B11</p>
                <p className="text-slate-900">Awka Trade Centre,</p>
                <p className="text-slate-900">Aroma junction, Awka,</p>
                <p className="text-slate-900">Anambra State, Nigeria</p>
              </div>

              <a
                href="https://maps.google.com/?q=Shop+B10+B11+Awka+Trade+Centre+Aroma+Junction+Awka+Anambra+State"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                View on Google Maps →
              </a>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <iframe
              src="https://www.google.com/maps?q=Shop+B10+B11+Awka+Trade+Centre+Aroma+Junction+Awka+Anambra+State&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Free Solar Consultation?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Let our energy experts design the perfect solution for your home or business today.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Get Free Quote
              </a>
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