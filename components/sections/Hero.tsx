"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover md:bg-right bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* MOBILE OVERLAY ONLY */}
      <div className="absolute inset-0 bg-black/60 md:hidden" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-left text-white">
          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
              World’s Most Active
            </span>
            <br />
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Poker Player Pool
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-white text-base md:text-lg"
          >
            Play daily tournaments, get <strong>1st deposit bonus</strong> +
            <strong> weekly rakeback</strong>, and enjoy fast deposits &
            withdrawals via our Telegram system.
          </motion.p>

          {/* TRUST LINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white mt-6"
          >
            Trusted by 1000+ players • Instant withdrawals • 24/7 support
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-3 max-w-sm md:max-w-md"
          >
            <a
              href="https://t.me/nexapoker"
              target="_blank"
              className="flex-1 text-center px-5 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-lg shadow-pink-500/30"
            >
              Join Telegram
            </a>

            <a
              href="#downloads"
              className="flex-1 text-center px-5 py-3 border border-white/40 rounded-xl text-white hover:bg-white/10 transition"
            >
              Download
            </a>
          </motion.div>

          {/* BONUS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-pink-400 font-medium"
          >
            🎁 Use Bonus Code: <span className="font-semibold">NEXA100</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
