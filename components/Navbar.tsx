"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2 md:py-3">

        {/* 🔥 LOGO + NAME */}
        <Link href="/" className="flex items-center gap-2 active:scale-95 transition">
          <div className="relative w-9 h-9 md:w-12 md:h-12">
            <Image
              src="/logo-v2.png"
              alt="Mainstream Industries Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="font-bold text-blue-700 text-xs sm:text-sm md:text-base tracking-wide">
              MAINSTREAM
            </p>
            <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 tracking-widest">
              INDUSTRIES LTD
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-blue-600 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* WhatsApp CTA (desktop) */}
          <a
            href="https://wa.me/2347064493699"
            className="hidden md:block bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl text-white font-semibold transition shadow-sm"
          >
            WhatsApp
          </a>

          {/* 🔥 Animated Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 active:scale-95 transition"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-black block"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-black block"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-black block"
            />
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU (APP STYLE) */}
      <AnimatePresence>
        {open && (
          <motion.div
              id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 px-5 py-6 space-y-5 shadow-lg"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-gray-800 active:scale-95 transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/2347064493699"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold active:scale-95 transition"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}