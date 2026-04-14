export default function StreetLightingPage() {
  return (
    <div className="bg-gray-100 text-gray-900">

      {/* HERO */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solar Street Lighting Solutions
          </h1>

          <p className="text-gray-600 text-lg">
            Reliable, cost-effective and environmentally friendly lighting systems for estates, roads and commercial areas.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            Our solar street lighting systems provide continuous illumination
            using renewable solar energy, eliminating electricity costs and dependence on unstable grid power.
          </p>

          <p>
            Designed for estates, highways and commercial environments, these systems
            store energy during the day and provide reliable lighting throughout the night.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Key Benefits</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            Zero Electricity Cost
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            Low Maintenance
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            Reliable Night Lighting
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            Environmentally Friendly
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            Long Lifespan
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            Ideal for Estates & Roads
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Solar Street Lighting Project
        </h2>

        <p className="text-gray-600 mb-6">
          Contact us today for consultation, system design and installation.
        </p>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl inline-block transition"
        >
          Get a Quote
        </a>
      </section>

    </div>
  );
}