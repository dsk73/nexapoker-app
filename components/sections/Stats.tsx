"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Active Players" },
  { value: "₹5Cr+", label: "Total Payouts" },
  { value: "24/7", label: "Support" },
  { value: "Instant", label: "Withdrawals" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {/* VALUE */}
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="text-sm text-gray-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
