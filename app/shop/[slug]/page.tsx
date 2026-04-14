import { products } from "../../../lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-xl"
          />

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <p className="text-blue-600 text-2xl font-bold mb-4">
              {product.price}
            </p>

            <p className="mb-6 text-lg">{product.description}</p>

            <a
              href={`https://wa.me/2347064493699?text=Hello, I'm interested in ${product.name}`}
              className="block text-center bg-green-500 text-white py-3 rounded-xl mb-4"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={i}
                className="p-4 bg-gray-100 rounded-xl flex justify-between"
              >
                <span className="font-semibold">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="p-4 border rounded-xl hover:shadow-lg transition"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <h3 className="font-semibold">{p.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}