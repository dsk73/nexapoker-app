"use client";

export default function Testimonials() {
  return (
    <section className="relative z-10 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">What Players Say</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-gray-300">
        <div className="bg-white/5 p-6 rounded-xl italic">
          <p>“Best poker experience I&apos;ve had. Fast payouts!”</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl italic">
          <p>“Very smooth and easy to play. Highly recommended.”</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl italic">
          <p>“Great support and quick withdrawals.”</p>
        </div>
      </div>
    </section>
  );
}
