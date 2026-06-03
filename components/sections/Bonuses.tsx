"use client";

import { motion } from "framer-motion";

const bonuses = [
  {
    title: "Welcome Bonus",
    desc: "Boost your bankroll on your first deposit.",
    highlight: "100%",
  },
  {
    title: "Referral Bonus",
    desc: "Invite friends and earn instant rewards.",
    highlight: "$50",
  },
  {
    title: "Exclusive Rewards",
    desc: "Unlock rakeback and special promotions.",
    highlight: "Daily",
  },
];

export default function Bonuses() {
  return (
    <section
      id="bonuses"
      className="relative overflow-hidden bg-white px-6 py-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-125 w-125 rounded-full bg-pink-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-pink-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-6xl">
            Bonuses &{" "}
            <span
              style={{
                color: "#cd114e",
              }}
            >
              Rewards
            </span>
          </h2>

          <p className="text-slate-500 text-lg">
            Unlock exclusive rewards and promotions as you play.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {bonuses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#cd114e]/20 hover:shadow-2xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#cd114e]/10 blur-3xl" />
              </div>

              <div className="relative">
                {/* Highlight */}
                <div
                  className="mb-6 text-5xl font-black"
                  style={{
                    color: "#cd114e",
                  }}
                >
                  {item.highlight}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
