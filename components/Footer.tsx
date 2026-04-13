export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Mainstream Industries Ltd
          </h2>
          <p className="text-gray-400">
            Providing reliable solar energy solutions, inverters, and backup power systems across Nigeria.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">Nigeria</p>
          <p className="text-gray-400 mb-4">
            Email: info@mainstreamindustries.com
          </p>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="inline-block bg-green-500 px-4 py-2 rounded-lg text-black font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} Mainstream Industries Ltd. All rights reserved.
      </div>
    </footer>
  );
}