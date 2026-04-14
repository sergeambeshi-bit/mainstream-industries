import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-12 text-center">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Solar Installation */}
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">
              Solar Panel Installation
            </h2>
            <p className="text-gray-600 text-sm">
              Professional solar system design and installation for homes, offices and industrial use.
            </p>
          </div>

          {/* Inverter Systems */}
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">
              Inverter & Battery Systems
            </h2>
            <p className="text-gray-600 text-sm">
              Reliable backup power systems with automatic switching and uninterrupted electricity supply.
            </p>
          </div>

          {/* Consulting */}
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">
              Energy Consulting
            </h2>
            <p className="text-gray-600 text-sm">
              Expert advice on energy management, system sizing and cost optimization.
            </p>
          </div>

          {/* 🔥 STREET LIGHTING (IMPORTANT) */}
          <Link href="/services/solar-street-lighting">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border">
              <h2 className="font-semibold text-lg mb-2">
                Solar Street Lighting
              </h2>
              <p className="text-gray-600 text-sm">
                Cost-effective solar lighting systems for estates, roads and commercial environments.
              </p>
            </div>
          </Link>

          {/* Backup Integration */}
          <Link href="/services/backup-power-integration">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border">
              <h2 className="font-semibold text-lg mb-2">
                Backup Power Integration
              </h2>
              <p className="text-gray-600 text-sm">
                Seamless integration of solar, battery and grid systems for reliable power supply.
              </p>
            </div>
          </Link>

          {/* Maintenance */}
          <Link href="/services/system-maintenance">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border">
              <h2 className="font-semibold text-lg mb-2">
                System Maintenance
              </h2>
              <p className="text-gray-600 text-sm">
                Ongoing maintenance and support to ensure optimal system performance.
              </p>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}