export default function Footer() {
  return (
    <footer id="about" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <h4 className="font-semibold">Printify Studio</h4>
            <p className="mt-2 text-gray-600">Designer-made printable goods. Crafted with care for your space and workflow.</p>
          </div>
          <div>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#products" className="hover:text-gray-900">Wall art</a></li>
              <li><a href="#products" className="hover:text-gray-900">Planners</a></li>
              <li><a href="#products" className="hover:text-gray-900">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help center</a></li>
              <li><a href="#" className="hover:text-gray-900">License</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-2 flex gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-full border border-black/10 px-4 py-2 outline-none focus:ring-2 focus:ring-black" />
              <button className="rounded-full bg-black text-white px-4 py-2">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Printify Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
