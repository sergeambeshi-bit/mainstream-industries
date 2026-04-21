"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">

      {/* 🔥 BACKGROUND BAR */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-4 pt-3 pb-4 shadow-lg flex gap-3">

        {/* SHOP */}
        <Link
          href="/shop"
          className="flex-1 bg-blue-700 text-white text-center py-3 rounded-xl font-semibold text-sm active:scale-95 transition"
        >
          Shop
        </Link>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/2347064493699"
          className="flex-1 bg-green-500 text-white text-center py-3 rounded-xl font-semibold text-sm active:scale-95 transition"
        >
          WhatsApp
        </a>

      </div>

    </div>
  );
}