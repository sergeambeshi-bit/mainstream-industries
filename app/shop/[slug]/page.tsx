"use client";

import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#06152F] via-[#0A2A66] to-[#123D91] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-200 text-sm mb-3">
            Premium Solar Equipment
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {product.name}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* IMAGE */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="relative h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-4 py-2 rounded-full bg-blue-700 text-white text-sm font-semibold">
                {product.badge}
              </span>

              <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                {product.warranty}
              </span>
            </div>

            <h2 className="text-3xl font-bold mb-5">
              {product.name}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-3 mb-8">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/2348068387145?text=${encodeURIComponent(
                  `Hello, I am interested in ${product.name}`
                )}`}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition"
              >
                Request Quote
              </a>

              <Link
                href="/contact"
                className="border border-slate-300 px-8 py-4 rounded-xl font-semibold text-center hover:bg-slate-100 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {product.benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-200"
              >
                <div className="text-blue-700 text-2xl mb-3">✓</div>

                <h3 className="font-semibold">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Specifications
          </h2>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-2 border-b border-slate-100 p-5"
              >
                <div className="font-semibold text-slate-700">
                  {key}
                </div>

                <div className="text-slate-600">
                  {String(value)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-semibold mb-2">
              Genuine Products
            </h3>
            <p className="text-sm text-slate-600">
              We supply quality products from trusted manufacturers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-semibold mb-2">
              Professional Installation
            </h3>
            <p className="text-sm text-slate-600">
              Installed by experienced solar professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-semibold mb-2">
              Nationwide Support
            </h3>
            <p className="text-sm text-slate-600">
              Support and delivery available across Nigeria.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}