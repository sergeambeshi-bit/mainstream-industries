import { products } from "@/lib/products";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto flex gap-8">

        {/* Sidebar */}
        <aside className="w-64 hidden md:block">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-4">Categories</h2>

            <ul className="space-y-3 text-gray-600">
              <li className="font-medium text-blue-600">All</li>
              <li>Solar Panels</li>
              <li>Inverters</li>
              <li>Batteries</li>
              <li>Charge Controllers</li>
            </ul>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">

          <h1 className="text-4xl font-bold mb-10">
            Solar Products
          </h1>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.slug}
                className="group bg-white border rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-semibold text-lg mb-2">
                    {product.name}
                  </h2>

                  <p className="text-blue-600 font-bold mb-4">
                    {product.price}
                  </p>

                  {/* View Details */}
                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-xl mb-3 hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/234XXXXXXXXXX?text=Hello, I'm interested in ${product.name}`}
                    className="block text-center bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}