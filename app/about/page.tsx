export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900">

      {/* HERO */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Mainstream Industries Ltd
          </h1>

          <p className="text-gray-600 text-lg">
            Leading renewable energy solutions provider in Nigeria since 2011.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">

          <p>
            Mainstream Industries Ltd is a registered renewable energy company
            committed to the design and implementation of modern energy solutions
            across Nigeria.
          </p>

          <p>
            Founded in 2011 by professionals with over 20 years of experience,
            the company has built a strong reputation in solar energy systems,
            inverter backup solutions, and energy consultancy.
          </p>

          <p>
            We specialize in delivering customized energy systems from design
            to installation and commissioning, ensuring reliability and long-term performance.
          </p>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading solar company in Nigeria and among the most
              innovative energy solution providers in the world.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To satisfy clients’ energy needs through reliable, cost-effective
              and environmentally friendly solutions that promote sustainable development.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Integrity", "Professionalism", "Quality", "Compliance"].map((value, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
                {value}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES / PROJECT LINES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-600">

            <ul className="space-y-3">
              <li>• Solar Electric PV Systems (On-grid & Off-grid)</li>
              <li>• Solar Water Heating Systems</li>
              <li>• Power Backup Systems</li>
              <li>• Energy Auditing & Consulting</li>
            </ul>

            <ul className="space-y-3">
              <li>• Hybrid Energy Systems (Solar/Wind/Biodiesel)</li>
              <li>• Industrial & Commercial Energy Solutions</li>
              <li>• System Design & Installation</li>
              <li>• Renewable Energy Consultancy</li>
            </ul>

          </div>

        </div>
      </section>

      {/* WHY SOLAR */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Why Solar Energy Matters
          </h2>

          <p className="text-gray-600 leading-relaxed">
            With increasing power shortages and rising electricity costs in Nigeria,
            solar energy provides a reliable, cost-effective, and environmentally friendly
            alternative. Our solutions help businesses and homes avoid power interruptions,
            reduce operational costs, and ensure long-term energy independence.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Power Your Home or Business?
          </h2>

          <p className="mb-6 text-blue-100">
            Speak with our experts today and get a customized solar solution.
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