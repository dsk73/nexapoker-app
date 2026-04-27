"use client";

import { motion } from "framer-motion";

export default function Bonuses() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Bonuses & Offers</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-linear-to-br from-green-500/20 to-black p-6 rounded-2xl border border-green-500/30"
        >
          <h3 className="text-xl font-semibold mb-3">Welcome Bonus</h3>
          <p className="text-gray-400">
            Get extra chips on your first deposit and start strong.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-linear-to-br from-purple-500/20 to-black p-6 rounded-2xl border border-purple-500/30"
        >
          <h3 className="text-xl font-semibold mb-3">Referral Bonus</h3>
          <p className="text-gray-400">
            Invite friends and earn rewards instantly.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-linear-to-br from-yellow-500/20 to-black p-6 rounded-2xl border border-yellow-500/30"
        >
          <h3 className="text-xl font-semibold mb-3">Daily Rewards</h3>
          <p className="text-gray-400">
            Play daily and unlock exciting bonuses every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
