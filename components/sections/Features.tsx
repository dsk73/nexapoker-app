"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Recreational Player Pool",
    desc: "Play against casual players with softer competition and higher winning opportunities.",
    icon: "/icons/players.png",
  },
  {
    title: "Daily Tournaments",
    desc: "Join exciting daily tournaments with high prize pools and non-stop action.",
    icon: "/icons/tournament.png",
  },
  {
    title: "Instant Deposits & Withdrawals",
    desc: "Fast and secure transactions handled directly via our Telegram bot system.",
    icon: "/icons/payment.png",
  },
  {
    title: "1st Deposit Bonus",
    desc: "Get extra chips on your first deposit and boost your bankroll instantly.",
    icon: "/icons/bonus.png",
  },
  {
    title: "Weekly Rakeback",
    desc: "Earn cashback on your gameplay every week and maximize your profits.",
    icon: "/icons/rakeback.png",
  },
  {
    title: "24/7 Telegram Support",
    desc: "Our team is always available to assist you instantly through Telegram.",
    icon: "/icons/support.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Why Players Choose <span className="text-pink-600">NexaPoker</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Everything you need to play, win, and withdraw seamlessly.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
