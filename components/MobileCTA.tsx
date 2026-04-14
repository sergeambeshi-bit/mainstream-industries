"use client";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-3 flex gap-3 md:hidden shadow-lg">

      <a
        href="/shop"
        className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-semibold"
      >
        Shop
      </a>

      <a
        href="https://wa.me/234XXXXXXXXXX"
        className="flex-1 bg-green-500 text-white text-center py-3 rounded-xl font-semibold"
      >
        WhatsApp
      </a>

    </div>
  );
}