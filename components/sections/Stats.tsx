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
    <section className="relative overflow-hidden bg-[#070012] px-6 py-12">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-[28px] border border-white/10 bg-white/3 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-[#ee1d60]/30"
            >
              {/* Value */}
              <div
                className="mb-3 text-3xl font-black md:text-5xl"
                style={{
                  color: "#ff5e91",
                }}
              >
                {item.value}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-slate-300 md:text-base">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
