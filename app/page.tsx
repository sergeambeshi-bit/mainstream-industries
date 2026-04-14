import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">

      {/* Hero */}
      <Hero />

      {/* 🏢 ABOUT SECTION */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            About Mainstream Industries Ltd
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mainstream Industries Ltd is a leading renewable energy company in Nigeria,
            founded in 2011 by professionals with over 20 years of experience in solar
            energy design, installation and consultancy. We specialize in delivering
            reliable solar and backup power solutions tailored for homes, businesses,
            and industrial applications.
          </p>
        </div>
      </section>

      {/* 🔥 FEATURED PRODUCTS */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              Featured Solar Products
            </h2>

            <Link
              href="/shop"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.slug}
                className="group relative bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                {/* Badge */}
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full z-10">
                    HOT
                  </span>
                )}

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover group-hover:scale-105 transition"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2">
                    {product.name}
                  </h3>

                  <p className="text-blue-600 font-bold mb-3">
                    {product.price}
                  </p>

                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-xl text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💼 WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">
              20+ Years Experience
            </h3>
            <p className="text-gray-600 text-sm">
              Built by experts with deep experience in renewable energy projects across Nigeria.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">
              Reliable Power Systems
            </h3>
            <p className="text-gray-600 text-sm">
              Our systems ensure uninterrupted electricity for homes, offices and industries.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">
              Clean Energy Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              Reduce energy costs and environmental impact with our solar solutions.
            </p>
          </div>

        </div>
      </section>

      {/* ⚡ SERVICES */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Solar & Energy Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Solar Panel Installation Nigeria",
              "Hybrid Inverter Systems",
              "Battery Storage Solutions",
              "Off-Grid Solar Systems",
              "Energy Audits & Consulting",
              "Backup Power Integration",
            ].map((service, i) => (
              <ServiceCard key={i} title={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Switch to Reliable Solar Power Today
          </h2>

          <p className="mb-6 text-lg text-blue-100">
            Protect your business and home from power outages with our trusted solar systems.
          </p>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold inline-block"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}