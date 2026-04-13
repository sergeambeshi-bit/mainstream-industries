"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/mainstream-logo.png"
            alt="Mainstream Industries Ltd"
            width={40}
            height={40}
          />
          <span className="font-bold text-blue-700 text-sm md:text-lg">
            Mainstream Industries
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
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