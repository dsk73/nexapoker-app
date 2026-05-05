"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Active Players" },
  { value: "$250K+", label: "Total Payouts" },
  { value: "24/7", label: "Support" },
  { value: "Instant", label: "Withdrawals" },
];

export default function Stats() {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-[#0a0018]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-125 h-125 bg-pink-600/30 blur-[140px] -top-30 -left-30" />
        <div className="absolute w-100 h-100 bg-purple-600/30 blur-[140px] -bottom-30 -right-30" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="space-y-3"
            >
              {/* VALUE (HERO STYLE) */}
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-linear-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent ">
                  {item.value}
                </span>
              </h3>

              {/* LABEL */}
              <p className="text-sm md:text-base text-white/80">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
