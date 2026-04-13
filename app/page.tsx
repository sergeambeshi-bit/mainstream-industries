import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      
      {/* Hero */}
      <Hero />

      {/* 🔥 HOT PRODUCTS SECTION */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              Hot Solar Products
            </h2>

            <Link
              href="/shop"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.slug}
                className="group bg-gray-50 border rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2">
                    {product.name}
                  </h3>

                  <p className="text-blue-600 font-bold mb-3">
                    {product.price}
                  </p>

                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-xl text-sm hover:bg-blue-700 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Switch to Reliable Solar Power Today
          </h2>

          <p className="mb-6 text-lg text-blue-100">
            Reduce energy costs and eliminate power outages with our solar solutions.
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