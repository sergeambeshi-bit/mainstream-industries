import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white pt-16 pb-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* 🔥 BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Mainstream Industries LTD
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Solar panels, inverters, batteries and complete energy solutions across Nigeria.
          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ⚡ SERVICES */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>Solar Panel Installation</li>
            <li>Solar CCTV Installation</li>
            <li>Hybrid Inverter Systems</li>
            <li>Battery Storage Solutions</li>
            <li>Off-Grid Solar Systems</li>
            <li>Energy Consulting</li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm text-blue-200">

            {/* Phone 1 */}
            <a
              href="tel:+2348068387145"
              className="block hover:text-white transition"
            >
              📞 +234 806 838 7145
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+2348037243157"
              className="block hover:text-white transition"
            >
              📞 +234 803 724 3157
            </a>

            {/* Email */}
            <a
              href="mailto:mainstreamindustriesltd@gmail.com"
              className="block hover:text-white transition break-all"
            >
              📧 mainstreamindustriesltd@gmail.com
            </a>

            {/* Address */}
            <div className="leading-relaxed">
              📍 Shop A10 & A11<br />
              Awka Trade Centre,<br />
              Aroma Junction, Awka,<br />
              Anambra State, Nigeria
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348068387145"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-300 hover:text-green-400 font-medium"
            >
              💬 Chat on WhatsApp
            </a>

          </div>
        </div>

      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Mainstream Industries LTD. All rights reserved.
      </div>

    </footer>
  );
}