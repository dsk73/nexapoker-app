"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Recreational Player Pool",
    desc: "Softer competition with better winning opportunities.",
    icon: "/icons/players.png",
  },
  {
    title: "Daily Tournaments",
    desc: "Compete every day for exciting prize pools.",
    icon: "/icons/tournament.png",
  },
  {
    title: "Instant Transactions",
    desc: "Fast deposits and withdrawals via Telegram.",
    icon: "/icons/payment.png",
  },
  {
    title: "1st Deposit Bonus",
    desc: "Boost your bankroll from the very first day.",
    icon: "/icons/bonus.png",
  },
  {
    title: "Weekly Rakeback",
    desc: "Earn cashback rewards on your weekly action.",
    icon: "/icons/rakeback.png",
  },
  {
    title: "24/7 Support",
    desc: "Get instant help whenever you need it.",
    icon: "/icons/support.png",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 px-6 py-12"
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
            Why Players Choose{" "}
            <span
              style={{
                color: "#cd114e",
              }}
            >
              Nexa Poker
            </span>
          </h2>

          <p className="text-slate-500 text-lg">
            Everything you need to play, win, and withdraw seamlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
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
                delay: index * 0.08,
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
                {/* Icon */}
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "rgba(205,17,78,0.08)",
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={34}
                    height={34}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-slate-600 ">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
