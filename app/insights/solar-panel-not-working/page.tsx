export default function InsightArticle() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Why Your Solar Panels Are Not Working Efficiently
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          A solar panel installation is a big investment and every home is different, that’s why we think an on-site survey is always essential.
        </p>

        <p className="text-gray-700 mb-6">
          As Nigeria energy specialists at <strong>Mainstream Industries LTD</strong>, we understand the frustration that comes with underperforming solar panels. You’ve made a significant investment in clean, green energy, and when your solar PV system isn’t working as expected, it can feel like you’re left in the dark.
        </p>

        <p className="text-gray-700 mb-10">
          In this comprehensive guide, we’ll explore the common reasons why solar panels might not be working efficiently, how to identify these issues, and what steps you can take to get your solar power system back on track.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-bold mb-4">Understanding Your Solar PV System</h2>

        <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
          <li><strong>Solar Panels:</strong> Capture sunlight and convert it into electricity</li>
          <li><strong>Solar Inverter:</strong> Converts DC electricity into AC power</li>
          <li><strong>Meter:</strong> Measures energy production</li>
          <li><strong>Battery Storage:</strong> Stores energy for later use</li>
          <li><strong>Charge Controller:</strong> Regulates voltage and current</li>
        </ul>

        {/* COMMON ISSUES */}
        <h2 className="text-2xl font-bold mb-6">Common Reasons for Underperformance</h2>

        <h3 className="font-semibold mb-2">1. Shading and Obstructions</h3>
        <p className="mb-6 text-gray-700">
          Even partial shading can significantly reduce output. Causes include tree growth, new buildings, debris, and temporary obstructions.
        </p>

        <h3 className="font-semibold mb-2">2. Inverter Issues</h3>
        <p className="mb-6 text-gray-700">
          If your inverter fails, your entire system suffers. Look for error messages, shutdowns, or unusual sounds.
        </p>

        <h3 className="font-semibold mb-2">3. Environmental Conditions</h3>
        <p className="mb-6 text-gray-700">
          Heavy clouds, extreme heat, and weather conditions can reduce efficiency.
        </p>

        <h3 className="font-semibold mb-2">4. Panel Degradation</h3>
        <p className="mb-6 text-gray-700">
          Panels naturally degrade over time (0.5–1% yearly).
        </p>

        <h3 className="font-semibold mb-2">5. Electrical Issues</h3>
        <p className="mb-6 text-gray-700">
          Loose connections, corrosion, or faulty breakers can affect performance.
        </p>

        <h3 className="font-semibold mb-2">6. Meter Problems</h3>
        <p className="mb-10 text-gray-700">
          Sometimes the issue lies in incorrect measurement rather than the panels.
        </p>

        {/* DIY */}
        <h2 className="text-2xl font-bold mb-4">DIY Troubleshooting Steps</h2>

        <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
          <li>Check for visible damage</li>
          <li>Clean panels regularly</li>
          <li>Monitor inverter readings</li>
          <li>Check for shading</li>
          <li>Review energy production</li>
          <li>Inspect wiring (visually only)</li>
          <li>Check battery performance</li>
        </ul>

        {/* PROFESSIONAL */}
        <h2 className="text-2xl font-bold mb-4">When to Call a Professional</h2>

        <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
          <li>Inverter errors</li>
          <li>Sudden drop in output</li>
          <li>Visible damage</li>
          <li>Frequent shutdowns</li>
          <li>Grid connection issues</li>
        </ul>

        {/* EFFICIENCY */}
        <h2 className="text-2xl font-bold mb-4">Maximising Efficiency</h2>

        <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
          <li>Regular cleaning</li>
          <li>Proper positioning</li>
          <li>Battery storage</li>
          <li>Smart energy usage</li>
          <li>Routine maintenance</li>
        </ul>

        {/* FUTURE */}
        <h2 className="text-2xl font-bold mb-4">The Future of Solar Energy in Nigeria</h2>

        <p className="text-gray-700 mb-10">
          Solar power continues to evolve with better panels, smarter systems, and improved storage solutions. At Mainstream Industries LTD, we stay ahead by offering high-efficiency panels, hybrid inverters, and integrated renewable systems.
        </p>

        {/* CTA */}
        <div className="mt-10 p-6 bg-gray-100 rounded-2xl text-center">
          <p className="mb-4 font-semibold">
            Need help with your solar system?
          </p>

          <a
            href="https://wa.me/2347064493699"
            className="button-whatsapp inline-block text-center whitespace-nowrap px-5 py-3 text-xs sm:text-sm md:text-base"
          >
            Contact Mainstream Industries LTD
          </a>
        </div>

      </div>
    </div>
  );
}