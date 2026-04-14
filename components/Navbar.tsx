"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* 🔥 ICON-ONLY LOGO */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/logo-icon.png"
              alt="Mainstream Industries Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* WhatsApp (desktop only) */}
          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="hidden md:block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-white font-semibold transition"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="block bg-green-500 text-white text-center py-2 rounded-xl"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}