import { Download, Printer, Shield } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Purchase & download",
    desc: "Complete checkout to get instant access to high-res files.",
  },
  {
    icon: Printer,
    title: "Print your way",
    desc: "Use a home printer or send to a local/online print shop.",
  },
  {
    icon: Shield,
    title: "Lifetime access",
    desc: "Re-download anytime. Personal use license included.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-gradient-to-b from-white to-gray-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
