export default function ServicesPage() {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            Solar Panel Installation
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            Inverter & Battery Systems
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            Energy Consulting
          </div>

        </div>

      </div>
    </div>
  );
}