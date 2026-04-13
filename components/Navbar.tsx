import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          Mainstream Industries Ltd
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-blue-600 transition">
            Shop
          </Link>

          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/234XXXXXXXXXX"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-white font-semibold transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}