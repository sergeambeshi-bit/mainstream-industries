"use client";

import { products } from "@/lib/products";
import Image from "next/image";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="section-light">

      <div className="container max-w-6xl">

        {/* 🔥 TOP GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* IMAGE */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* INFO */}
          <div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              High-performance solar solution designed for reliability, efficiency and long-term energy independence.
            </p>

            {/* FEATURES */}
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✔ High efficiency performance</li>
              <li>✔ Durable and long-lasting design</li>
              <li>✔ Suitable for homes and businesses</li>
              <li>✔ Optimized for Nigerian conditions</li>
            </ul>

            {/* CTA */}
            <a
              href={`https://wa.me/2347064493699?text=Hello, I am interested in ${product.name}`}
              className="button-whatsapp inline-block"
            >
              Request Quote on WhatsApp
            </a>

          </div>

        </div>

        {/* 🔥 DETAILS SECTION */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">

          <h2 className="text-2xl font-bold mb-4">
            Product Overview
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This product is engineered to deliver consistent performance and energy efficiency.
            It is ideal for residential, commercial and industrial solar installations across Nigeria.
          </p>

        </div>

        {/* 🔥 TRUST SECTION */}
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-semibold mb-2">Reliable Performance</h3>
            <p className="text-sm text-gray-600">
              Designed for long-term energy stability.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-semibold mb-2">Expert Installation</h3>
            <p className="text-sm text-gray-600">
              Installed by experienced professionals.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-semibold mb-2">Nationwide Support</h3>
            <p className="text-sm text-gray-600">
              Available across Nigeria.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}