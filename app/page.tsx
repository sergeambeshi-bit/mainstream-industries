import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      
      {/* Hero */}
      <Hero />

      {/* 🔥 PREMIUM PRODUCT SECTION */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Solar Products
            </h2>

            <Link
              href="/shop"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.slug}
                className="group relative bg-white border rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
              >
                {/* Badge */}
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full z-10">
                    HOT
                  </span>
                )}
                {index === 1 && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                    SALE
                  </span>
                )}

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-blue-600 font-bold mb-3 text-lg">
                    {product.price}
                  </p>

                  <div className="flex gap-2">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="flex-1 text-center bg-blue-600 text-white py-2 rounded-xl text-sm hover:bg-blue-700 transition"
                    >
                      View
                    </Link>

                    <a
                      href={`https://wa.me/234XXXXXXXXXX?text=Hello, I'm interested in ${product.name}`}
                      className="flex-1 text-center bg-green-500 text-white py-2 rounded-xl text-sm hover:bg-green-600 transition"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💼 TRUST SECTION (VERY IMPORTANT) */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">
              Trusted in Nigeria
            </h3>
            <p className="text-gray-600 text-sm">
              We provide reliable solar and power solutions across Lagos, Abuja and beyond.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">
              Quality Equipment
            </h3>
            <p className="text-gray-600 text-sm">
              Only high-performance solar panels, batteries and inverters.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">
              Fast Installation
            </h3>
            <p className="text-gray-600 text-sm">
              Professional installation and support for homes and businesses.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 bg-white">
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Solar Journey Today
          </h2>

          <p className="mb-6 text-lg text-blue-100">
            Get reliable power, reduce energy costs, and eliminate outages.
          </p>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold inline-block hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}