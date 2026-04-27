"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-8 pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
      >
        Play Poker <br />
        <span className="bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]">
          Like a Pro
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 max-w-xl mb-10 text-lg"
      >
        Join the ultimate poker experience. Fast games, real players, and
        instant withdrawals.
      </motion.p>

      <motion.a
        href="https://t.me/your_channel"
        target="_blank"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 40px rgba(34,197,94,0.8)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-[0_0_30px_rgba(34,197,94,0.6)]"
      >
        Play Now
      </motion.a>
    </section>
  );
}
