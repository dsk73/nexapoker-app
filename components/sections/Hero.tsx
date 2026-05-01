"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-white">
      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white to-gray-50" />

      <div className="max-w-7xl mx-auto text-center">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
        >
          Join India’s Most Active{" "}
          <span className="text-pink-600">Poker Player Pool</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
        >
          Play daily tournaments, get <strong>1st deposit bonus</strong> +{" "}
          <strong>weekly rakeback</strong>, and enjoy fast deposits &
          withdrawals via our Telegram system.
        </motion.p>

        {/* TRUST LINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-500 mt-4"
        >
          Trusted by 1000+ players • Instant withdrawals • 24/7 support
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-3 max-w-sm mx-auto sm:max-w-none"
        >
          <a
            href="hhttps://t.me/nexapoker"
            target="_blank"
            className="flex-1 sm:flex-none text-center px-5 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-sm"
          >
            Join Telegram
          </a>

          <a
            href="#downloads"
            className="flex-1 sm:flex-none text-center px-5 py-3 
           bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition"
          >
            Download App
          </a>
        </motion.div>

        {/* BONUS STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-pink-600 font-medium"
        >
          🎁 Use Bonus Code: <span className="font-semibold">NEXA100</span>
        </motion.div>
      </div>
    </section>
  );
}
