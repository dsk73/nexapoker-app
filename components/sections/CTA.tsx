"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-[#0a0018]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-pink-600/20 blur-[120px] -top-25 left-1/2 -translate-x-1/2" />
        <div className="absolute w-75 h-75 bg-purple-600/20 blur-[120px] -bottom-25 -right-25" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          <span className="text-white!">Ready to Start </span>
          <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Winning?
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white! mt-4 opacity-80 text-sm md:text-base"
        >
          Join now and experience fast games, real players, and instant
          withdrawals.
        </motion.p>

      </div>
    </section>
  );
}
