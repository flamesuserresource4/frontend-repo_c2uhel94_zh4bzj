import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-black/5 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500" />
            <span className="text-lg font-semibold tracking-tight">Printify Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </nav>

          <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:scale-[1.02] active:scale-[0.99] transition">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
