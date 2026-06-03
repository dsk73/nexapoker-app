"use client";

import { motion } from "framer-motion";

export default function CTA() {
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

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl"
        >
          Ready to Start{" "}
          <span
            style={{
              color: "#ee1d60",
            }}
          >
            Winning?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="mx-auto max-w-2xl text-lg leading-8 text-slate-300"
        >
          Join today and enjoy fast games, instant withdrawals, weekly rakeback
          rewards.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10"
        >
          <a
            href="https://t.me/nexapoker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "#cd114e",
              boxShadow: "0 15px 40px rgba(205,17,78,.25)",
            }}
          >
            Join Telegram Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
