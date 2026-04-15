import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className="section-light">

      {/* Header */}
      <div className="container text-center mb-12">
        <h1 className="text-heading mb-4">
          Solar Insights
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Expert knowledge, tips and solutions to help you get the best from your solar system.
        </p>
      </div>

      {/* Articles */}
      <div className="container grid md:grid-cols-2 gap-8">

        {/* Article 1 */}
        <div className="card p-6">
          <h2 className="font-bold text-xl mb-3">
            Why Your Solar Panels Are Not Working Efficiently
          </h2>

          <p className="text-muted mb-4">
            Learn the most common reasons solar systems underperform and how to fix them.
          </p>

          <Link href="/insights/solar-panels-not-working" className="text-blue-600 font-semibold">
            Read More →
          </Link>
        </div>

      </div>

    </div>
  );
}