"use client";

import { motion } from "framer-motion";

const bonuses = [
  {
    title: "Welcome Bonus",
    desc: "Get extra chips on your first deposit.",
    highlight: "100%",
    accent: "text-pink-600",
  },
  {
    title: "Referral Bonus",
    desc: "Invite friends and earn rewards instantly.",
    highlight: "₹500",
    accent: "text-purple-700",
  },
  {
    title: "Daily Rewards",
    desc: "Play daily and unlock exciting bonuses.",
    highlight: "Daily",
    accent: "text-pink-500",
  },
];

export default function Bonuses() {
  return (
    <section id="bonuses" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Bonuses & <span className="text-pink-600">Rewards</span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Play more, earn more. Unlock exclusive rewards and offers.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
            >
              {/* HIGHLIGHT */}
              <div className={`text-sm font-semibold mb-4 ${item.accent}`}>
                {item.highlight}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
