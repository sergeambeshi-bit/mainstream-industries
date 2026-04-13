export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/solar.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Badge */}
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-300">
          Solar & Energy Solutions Company
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Solar Power Systems for Homes & Businesses in Nigeria
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-10 text-gray-300">
          Solar panel installation, battery storage, and hybrid inverter systems designed to eliminate power outages and reduce energy costs across Nigeria.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/shop"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            Browse Products
          </a>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-black transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}