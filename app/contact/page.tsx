"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";

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

    const url = `https://wa.me/2347064493699?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* 🔥 CONTACT SECTION */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <div className="card p-8">
            <h1 className="text-3xl font-bold mb-6">
              Contact Us
            </h1>

            <p className="text-gray-600 mb-8">
              Reach out to us for solar installations, inverter systems, street lighting and energy solutions.
            </p>

            <div className="space-y-4 text-gray-700 text-sm">

              <div>
                <p className="font-semibold">Location</p>
                <p>Anambra, Nigeria</p>
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p>+234 706 449 3699</p>
                <p>+234 803 724 3157</p>
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p>mainstreamindustriesltd@gmail.com</p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="card p-8">

            <h2 className="text-2xl font-semibold mb-6">
              <span className="subtitle-icon">📝</span>
              Send a Message
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="What do you need? (e.g. solar installation, inverter, street lighting)"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleWhatsApp}
                className="button-whatsapp w-full"
              >
                Send via WhatsApp
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* 📍 MAP SECTION (SEPARATE - CLEAN) */}
      <section className="section-light">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="subtitle-icon">📍</span>
              Visit Our Office
            </h2>

            <p className="text-gray-700 mb-4">
              Mainstream Industries Ltd is located in Anambra, Nigeria.
              Visit us for consultations, system design and expert advice.
            </p>

            <p className="text-gray-600 mb-2">📍 Anambra, Nigeria</p>
            <p className="text-gray-600 mb-2">📞 +234 706 449 3699</p>
            <p className="text-gray-600">📧 mainstreamindustriesltd@gmail.com</p>
          </div>

          {/* MAP */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Anambra,Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}