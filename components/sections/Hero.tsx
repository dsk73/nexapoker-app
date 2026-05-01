"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-white">
      {/* SOFT BACKGROUND GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white to-gray-50" />

      <div className="max-w-7xl mx-auto text-center">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
        >
          Experience the Next Level of{" "}
          <span className="text-pink-600">Poker & Gaming</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg"
        >
          Play with real players, win real rewards, and enjoy a premium poker
          experience with fast withdrawals.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://t.me/your_channel"
            target="_blank"
            className="px-8 py-4 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-sm"
          >
            Play Now
          </a>

          <a
            href="#features"
            className="px-8 py-4 border bg-pink-600 border-gray-300 rounded-xl text-black-700 hover:bg-pink-700 transition"
          >
            Explore Games
          </a>
        </motion.div>
      </div>
    </section>
  );
}
