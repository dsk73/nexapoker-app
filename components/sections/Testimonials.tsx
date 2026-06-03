"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    image: "/images/user1.jpg",
    review:
      "Best poker experience I've had. Fast payouts, smooth gameplay, and excellent support.",
  },
  {
    name: "Amit Verma",
    image: "/images/user2.jpg",
    review:
      "Deposits and withdrawals are incredibly quick. The Telegram support team is always helpful.",
  },
  {
    name: "Sneha Patel",
    image: "/images/user3.jpg",
    review:
      "The rakeback rewards and tournaments keep me coming back every week.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#070012] px-6 py-12">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-6xl">
            What Players{" "}
            <span
              style={{
                color: "#ee1d60",
              }}
            >
              Say
            </span>
          </h2>

          <p className="text-slate-300">
            Trusted by poker players across the country.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
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
              className="rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#ee1d60]/30"
            >
              {/* Stars */}
              <div
                className="mb-5 text-lg tracking-wider"
                style={{
                  color: "#ee1d60",
                }}
              >
                ★★★★★
              </div>

              {/* Review */}
              <p className="mb-8 leading-8 text-slate-300">{item.review}</p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={52}
                  height={52}
                  className="rounded-full border border-white/10 object-cover"
                />

                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>

                  <p className="text-sm text-slate-400">Verified Player</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
