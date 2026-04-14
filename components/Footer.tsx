import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-24">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-icon.png"
                alt="Mainstream Industries"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-bold">
              Mainstream Industries Ltd
            </h2>
          </div>

          <p className="text-blue-200 text-sm leading-relaxed">
            Providing reliable solar energy solutions, inverter systems and backup
            power solutions across Nigeria for homes, businesses and industries.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-blue-200 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-white">
            Contact
          </h3>

          {/* Location */}
          <p className="text-blue-200 text-sm mb-2">
            Awka, Nigeria
          </p>

          {/* Phone Numbers */}
          <p className="text-blue-200 text-sm mb-2">
            Phone:{" "}
            <a href="tel:+2347064493699" className="hover:text-white transition">
              +234 706 449 3699
            </a>
          </p>

          <p className="text-blue-200 text-sm mb-4">
            Phone:{" "}
            <a href="tel:+2348037243157" className="hover:text-white transition">
              +234 803 724 3157
            </a>
          </p>

          {/* Email */}
          <p className="text-blue-200 text-sm mb-6">
            Email: info@mainstreamindustries.com
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2347064493699"
            className="inline-block bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl text-black font-semibold transition shadow-md"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-blue-900"></div>

      {/* Bottom */}
      <div className="text-center text-blue-300 text-sm py-6">
        © {new Date().getFullYear()} Mainstream Industries Ltd. All rights reserved.
      </div>

    </footer>
  );
}