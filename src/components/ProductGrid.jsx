const products = [
  {
    id: 1,
    title: "Abstract Gradient Poster",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2069&auto=format&fit=crop",
    sizes: ["A4", "A3", "A2", "A1"],
  },
  {
    id: 2,
    title: "Minimal Line Art Set",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2069&auto=format&fit=crop",
    sizes: ["A4", "A3"],
  },
  {
    id: 3,
    title: "2025 Weekly Planner (Digital)",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1969&auto=format&fit=crop",
    sizes: ["Letter", "A4"],
  },
  {
    id: 4,
    title: "Gallery Wall Bundle",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1545235615-3b45f8df0df0?q=80&w=2069&auto=format&fit=crop",
    sizes: ["A3", "A2", "A1"],
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-black/10 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{product.title}</h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-gray-700">${product.price.toFixed(2)}</p>
          <div className="flex gap-1 text-xs text-gray-500">
            {product.sizes.map((s) => (
              <span key={s} className="rounded-full border px-2 py-0.5">{s}</span>
            ))}
          </div>
        </div>
        <button className="mt-4 w-full rounded-full bg-black text-white py-2 text-sm font-medium hover:scale-[1.01] active:scale-[0.99] transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Featured products</h2>
            <p className="text-gray-600 mt-1">Printable art and planners you can download instantly.</p>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
