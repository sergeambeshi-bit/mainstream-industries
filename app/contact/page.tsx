"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `Hello, my name is ${form.name}.
Phone: ${form.phone}
Message: ${form.message}`;

    const url = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Fill the form below and we’ll respond quickly via WhatsApp.
        </p>

        {/* FORM */}
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
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Send via WhatsApp
          </button>

        </div>

      </div>
    </div>
  );
}