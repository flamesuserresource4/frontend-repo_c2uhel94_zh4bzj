import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-[80vh]">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            New Drop • Limited Edition Prints
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Elevate your space with premium printable art
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Curated collections of posters, planners, and templates. Instant downloads, crisp resolution, and modern aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:scale-[1.02] active:scale-[0.99] transition">Shop the Drop</a>
            <a href="#lookbook" className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5 transition">View Lookbook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
