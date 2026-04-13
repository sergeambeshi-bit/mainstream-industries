export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      
      {/* Content */}
      <div className="max-w-4xl px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-200">
          Solar Energy Experts
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Power Your Home & Business with Solar Energy
        </h1>

        <p className="text-lg md:text-xl mb-10 text-blue-100">
          Solar panels, inverters, batteries and complete energy systems across Nigeria.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/shop"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Shop Solar Products
          </a>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-black transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}