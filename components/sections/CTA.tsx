"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight"
        >
          Ready to Start <span className="text-pink-600">Winning?</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-6"
        >
          Join now and experience fast games, real players, and instant
          withdrawals.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="https://t.me/your_channel"
            target="_blank"
            className="inline-block px-10 py-4 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-sm"
          >
            Play Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
