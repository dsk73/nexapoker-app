"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#070012] pt-22">
      {/* DESKTOP + TABLET IMAGE */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-poker-banner.png')",
        }}
      />

      {/* DESKTOP + TABLET OVERLAY */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,0,18,.88) 0%, rgba(7,0,18,.70) 25%, rgba(7,0,18,.35) 50%, rgba(7,0,18,.08) 75%, transparent 100%)",
        }}
      />

      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2b003f_0%,#12001f_35%,#070012_70%,#050008_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ee1d60]/10 blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6">
        <div className="max-w-xl lg:max-w-2xl">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center rounded-full border border-[#ee1d60]/25 bg-[#ee1d60]/10 px-4 py-2 text-xs font-medium md:px-5 md:text-sm"
            style={{
              color: "#ee1d60",
            }}
          >
            ♠ Premium Online Poker Platform
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-black leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Play Real Money
            <br />

            <span
              style={{
                color: "#ee1d60",
              }}
            >
              Online Poker
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:mt-8 md:text-lg md:leading-8"
          >
            Join Nexa Poker for tournaments, cash games, instant withdrawals,
            weekly rakeback rewards, and dedicated Telegram support.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10"
          >
            <a
              href="https://t.me/nexapoker"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#cd114e",
                boxShadow: "0 15px 40px rgba(205,17,78,.30)",
              }}
            >
              Join Telegram
            </a>

            <Link
              href="/download"
              className="rounded-2xl border border-white/15 bg-black/20 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Download App
            </Link>
          </motion.div>

          {/* BONUS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 md:mt-10"
          >
            <div className="inline-flex flex-col rounded-3xl border border-white/10 bg-black/25 px-6 py-5 backdrop-blur-md">
              <span className="mb-2 text-sm text-slate-400">
                Welcome Bonus Code
              </span>

              <span
                className="text-3xl font-black tracking-[0.22em] md:text-4xl"
                style={{
                  color: "#ee1d60",
                }}
              >
                NEXA40
              </span>
            </div>
          </motion.div>

          {/* TRUST */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300 md:mt-10 md:gap-6"
          >
            <span>✓ Instant Withdrawals</span>
            <span>✓ Weekly Rakeback</span>
            <span>✓ 24/7 Support</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

