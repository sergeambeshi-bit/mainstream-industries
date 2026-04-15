import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Insights
        </h1>

        <div className="grid gap-8">

          <div className="p-6 border rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Why Your Solar Panels Are Not Working Efficiently
            </h2>

            <p className="text-gray-600 mb-4">
              Learn the common reasons your solar system may underperform and how to fix them.
            </p>

            <Link
              href="/insights/solar-panel-not-working"
              className="text-blue-600 font-semibold"
            >
              Read More →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}