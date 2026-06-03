"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

export default function QuotePage(): JSX.Element {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    customerType: "Home",
    service: "Solar Installation",
    propertyType: "Apartment",
    hasElectricity: "Yes",
    appliances: "",
    contactMethod: "WhatsApp",
    notes: "",
  });

  const [fileName, setFileName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : "");
  };

  const submitToWhatsApp = (e?: FormEvent) => {
    e?.preventDefault();
    const summary = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nState: ${form.state}\nCity: ${form.city}\nCustomer Type: ${form.customerType}\nService: ${form.service}\nProperty Type: ${form.propertyType}\nHas Electricity: ${form.hasElectricity}\nAppliances:\n${form.appliances}\nPreferred Contact: ${form.contactMethod}\nNotes: ${form.notes}\nPhoto: ${fileName || "none"}`;
    const wa = `https://wa.me/2348068387145?text=${encodeURIComponent(
      `Hello, I would like a free solar quote.%0A%0A${summary}`
    )}`;
    window.open(wa, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* HERO */}
      <header className="relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=')] bg-cover bg-center blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Get Your Free Solar Quote</h1>
            <p className="mt-4 text-blue-100 max-w-3xl">Tell us about your energy needs and our experts will recommend the ideal solar solution for your home, business or project.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#quote-form" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600">
                Request Free Quote
              </a>
              <a href="https://wa.me/2348068387145" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20">
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/6 rounded-2xl">✓ 20+ Years Experience</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/6 rounded-2xl">✓ Nationwide Installation</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/6 rounded-2xl">✓ Solar CCTV Specialists</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/6 rounded-2xl">✓ Premium Equipment</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Residential Solar Solution",
              items: ["Lights", "TVs", "Fans", "Decoder", "Phone Charging", "Small Appliances"],
            },
            {
              title: "Family Home Solar Solution",
              items: ["Refrigerator", "Multiple TVs", "Fans", "Lights", "Internet Router", "Small Appliances"],
            },
            {
              title: "Large Home Solar Solution",
              items: ["Air Conditioners", "Refrigerators", "Freezers", "Water Pumps", "Washing Machines", "Complete Household Use"],
            },
            {
              title: "Commercial Solar Solution",
              items: ["Offices", "Shops", "Hotels", "Schools", "Churches", "Commercial Buildings"],
            },
            {
              title: "Solar CCTV Installation",
              items: ["Homes", "Estates", "Offices", "Warehouses", "Remote Locations"],
              extra: ["24/7 Monitoring", "Security Lighting", "Remote Access", "Backup Power"],
            },
            {
              title: "Custom Solar Solution",
              items: ["Engineered to your requirements"],
            },
          ].map((sln) => (
            <motion.article key={sln.title} whileHover={{ y: -6 }} className="rounded-2xl bg-white/60 backdrop-blur shadow-md p-6 border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">{sln.title}</h3>
              <ul className="text-sm text-slate-700 space-y-1 mb-3">
                {sln.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
              {sln.extra && (
                <div className="mt-2 text-sm text-slate-700">
                  <strong>Features:</strong>
                  <ul className="mt-1 space-y-1">
                    {sln.extra.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="max-w-5xl mx-auto px-6 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Request Your Free Quote</h2>
          <p className="text-sm text-slate-600 mb-6">Complete the form below and our team will reach out to discuss the recommended solution.</p>

          <form onSubmit={(e) => { e.preventDefault(); submitToWhatsApp(e); }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="p-3 rounded-xl border" />
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="p-3 rounded-xl border" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="p-3 rounded-xl border" />
            <select name="state" value={form.state} onChange={handleChange} className="p-3 rounded-xl border">
              <option value="">Select State</option>
              <option>Abia</option>
              <option>Anambra</option>
              <option>Lagos</option>
              <option>Rivers</option>
              <option>Other</option>
            </select>

            <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="p-3 rounded-xl border sm:col-span-1" />

            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select name="customerType" value={form.customerType} onChange={handleChange} className="p-3 rounded-xl border">
                <option>Home</option>
                <option>Business</option>
                <option>Industrial</option>
                <option>Government</option>
              </select>
              <select name="service" value={form.service} onChange={handleChange} className="p-3 rounded-xl border">
                <option>Solar Installation</option>
                <option>Solar CCTV Installation</option>
                <option>Hybrid Inverter System</option>
                <option>Battery Storage</option>
                <option>Solar Street Lighting</option>
                <option>Energy Audit</option>
                <option>Custom Solution</option>
              </select>
            </div>

            <select name="propertyType" value={form.propertyType} onChange={handleChange} className="p-3 rounded-xl border">
              <option>Apartment</option>
              <option>Bungalow</option>
              <option>Duplex</option>
              <option>Office</option>
              <option>Hotel</option>
              <option>Factory</option>
              <option>School</option>
              <option>Other</option>
            </select>

            <select name="hasElectricity" value={form.hasElectricity} onChange={handleChange} className="p-3 rounded-xl border">
              <option>Yes</option>
              <option>No</option>
            </select>

            <textarea name="appliances" value={form.appliances} onChange={handleChange} placeholder={`List the appliances you want powered\nExample:\n2 TVs\n2 Air Conditioners\n1 Refrigerator\n1 Freezer\nWater Pump\nCCTV Cameras`} className="sm:col-span-2 p-4 rounded-2xl border h-36" />

            <select name="contactMethod" value={form.contactMethod} onChange={handleChange} className="p-3 rounded-xl border">
              <option>WhatsApp</option>
              <option>Phone Call</option>
              <option>Email</option>
            </select>

            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Additional Notes" className="p-3 rounded-xl border sm:col-span-1" />

            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-700 mb-2">Optional Photo Upload</label>
              <input type="file" onChange={handleFile} className="w-full text-sm" />
              {fileName && <p className="text-xs mt-1 text-slate-500">Selected: {fileName}</p>}
            </div>

            <div className="sm:col-span-2 flex gap-3 mt-2">
              <button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl">Request Free Quote</button>
              <a href={`https://wa.me/2348068387145`} target="_blank" rel="noreferrer" className="flex-1 border border-slate-200 rounded-xl py-3 text-center">Chat on WhatsApp</a>
            </div>
          </form>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold mb-6">Why Choose Mainstream</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "20+ Years Experience",
            "Certified Installation Team",
            "Premium Solar Equipment",
            "Nationwide Service",
            "After-Sales Support",
            "Customized Solutions",
          ].map((t) => (
            <div key={t} className="rounded-2xl bg-white/60 backdrop-blur p-6 shadow-sm border">
              <h4 className="font-semibold">{t}</h4>
              <p className="text-sm text-slate-600 mt-2">Trusted, proven and focused on delivering premium solar solutions.</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-6">What Our Customers Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Chidinma O.", location: "Awka, Anambra", text: "Installation was fast and professional. My bills dropped significantly." },
              { name: "Emeka A.", location: "Lagos", text: "Great service and after-sales support. System performs excellently." },
              { name: "Fatima U.", location: "Onitsha", text: "Highly recommend Mainstream for solar CCTV and reliable power." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 shadow-md border">
                <div className="text-yellow-500">★★★★★</div>
                <p className="mt-3 text-slate-700">“{t.text}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            { q: "How long does it take to receive a quote?", a: "We typically respond within 24-48 hours after receiving your request." },
            { q: "Is the quote free?", a: "Yes — all initial quotes are free. We discuss pricing after we assess your needs and speak with you." },
            { q: "Do you install nationwide?", a: "Yes. We provide installations across Nigeria with certified teams." },
            { q: "Can I request a custom system?", a: "Absolutely — select 'Custom Solution' and our engineers will design to your requirements." },
            { q: "Do you provide solar CCTV installations?", a: "Yes — we design and install solar-powered CCTV with monitoring options." },
            { q: "Can you upgrade an existing solar system?", a: "Yes — we assess and propose upgrades to improve performance and capacity." },
          ].map((f) => (
            <details key={f.q} className="p-4 rounded-xl bg-white/60 border">
              <summary className="font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Ready To Reduce Your Electricity Costs?</h3>
            <p className="mt-2 text-blue-100">Speak with our experts today and receive a customized solar recommendation.</p>
          </div>
          <div className="flex gap-3">
            <a href="#quote-form" className="px-5 py-3 rounded-xl bg-white text-blue-900 font-semibold">Request Free Quote</a>
            <a href="https://wa.me/2348068387145" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-white/10 border border-white/20">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

    </div>
  );
}
