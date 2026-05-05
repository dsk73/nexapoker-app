"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Easy Deposits",
    desc: "Join our Telegram channel and get secure payment details instantly. Your balance is updated within seconds after confirmation.",
  },
  {
    title: "Fast Withdrawals",
    desc: "Request withdrawals anytime via Telegram. Most payouts are processed within minutes without delays.",
  },
  {
    title: "Secure System",
    desc: "All transactions are handled safely through our trusted system ensuring complete transparency and reliability.",
  },
];

export default function Payments() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Deposits & <span className="text-pink-600">Withdrawals</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Fast, secure, and hassle-free transactions handled directly through
          our Telegram system.
        </p>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="text-pink-600 font-semibold mb-2">
                Step {i + 1}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
