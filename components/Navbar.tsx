"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">

        {/* 🔥 LOGO */}
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
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          {[
            { name: "Home", href: "/" },
            { name: "Shop", href: "/shop" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-blue-600 transition"
            >
              {link.name}

              {/* ✨ Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="hidden md:block bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl text-white font-semibold transition shadow-sm"
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
        <div className="md:hidden bg-white border-t px-4 py-5 space-y-4 shadow-lg">

          {[
            { name: "Home", href: "/" },
            { name: "Shop", href: "/shop" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold"
          >
            WhatsApp
          </a>

        </div>
      )}
    </header>
  );
}