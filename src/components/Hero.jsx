import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.2),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Premium printable merch
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Turn moments into <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">beautiful prints</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              Shop museum-grade posters, wall art, planners, and digital templates. Instant downloads, lifetime access, and print-ready files.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:scale-[1.02] active:scale-[0.99] transition">Browse products</a>
              <a href="#how" className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5 transition">How it works</a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="text-sm text-gray-600">Instant download</dt>
                <dd className="text-xl font-semibold">Immediately</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Print sizes</dt>
                <dd className="text-xl font-semibold">A4 - A0</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Rating</dt>
                <dd className="text-xl font-semibold">4.9/5</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl border border-black/10 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519710884005-902f72a8f9a5?q=80&w=1974&auto=format&fit=crop"
                alt="Art prints on a wall"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="rounded-xl bg-white/80 backdrop-blur border border-black/10 p-4 shadow">
                <p className="text-sm font-medium">High-resolution PDF + JPG</p>
                <p className="text-xs text-gray-600">Ready for home and studio printing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
