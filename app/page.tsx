import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      
      {/* Hero */}
      <Hero />

      {/* Shop CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Explore Solar & Power Equipment
          </h2>

          <p className="text-gray-600 mb-6">
            Browse our range of solar panels, inverters, batteries and complete energy systems.
          </p>

          <a
            href="/shop"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Visit Shop
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
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