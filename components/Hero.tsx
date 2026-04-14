export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/hero-solar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6">
        
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-200">
          Solar Energy Experts
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
          Power Your Home & Business with Solar Energy
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-200">
          Solar panels, inverters, batteries and complete energy systems across Nigeria.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
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