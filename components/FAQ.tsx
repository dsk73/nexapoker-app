"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I start playing?",
    a: "Click on Play Now, join our Telegram, and follow the steps.",
  },
  {
    q: "Is it safe?",
    a: "Yes, we use secure systems to protect all transactions.",
  },
  {
    q: "How fast are withdrawals?",
    a: "Most withdrawals are processed instantly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-lg p-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="font-semibold">{item.q}</h3>
            {open === i && <p className="text-gray-400 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
