"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#010104] pt-20 pb-8 sm:pt-36 sm:pb-10 lg:pt-20 lg:pb-4">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* DARKER PREMIUM GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#180028_0%,#0d0117_22%,#05010a_48%,#010104_78%)]" />

        {/* LEFT GLOW */}
        <div className="absolute top-[0%] left-[-8%] h-100 w-100 rounded-full bg-pink-600/10 blur-[190px]" />

        {/* RIGHT GLOW */}
        <div className="absolute bottom-[-10%] right-[-5%] h-125 w-125 rounded-full bg-purple-600/10 blur-[210px]" />

        {/* CENTER GLOW */}
        <div className="absolute left-1/2 top-1/2 h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-[170px]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.10)]">
                World’s Most
              </span>

              <br />

              <span className="bg-linear-to-r from-pink-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                Recreational
              </span>

              <br />

              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.10)]">
                Poker Network
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg lg:mx-0"
            >
              Play daily tournaments, claim your first deposit bonus, unlock
              weekly rakeback, and enjoy lightning-fast deposits & withdrawals
              through our Telegram system.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-7"
            >
              {/* TOP BUTTONS */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                {/* TELEGRAM */}
                <a
                  href="https://t.me/nexapoker"
                  target="_blank"
                  className="rounded-2xl bg-pink-600 px-8 py-4 text-center text-sm sm:text-base font-semibold text-white shadow-[0_0_28px_rgba(236,72,153,0.22)] transition hover:scale-[1.02] hover:bg-pink-700"
                >
                  Join Telegram
                </a>

                {/* DOWNLOAD */}
                <Link
                  href="/download"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm sm:text-base font-semibold text-white backdrop-blur-md transition hover:border-pink-500/25 hover:bg-white/8"
                >
                  Download App
                </Link>
              </div>

              {/* BONUS BAR */}
              <div className="mt-3 flex justify-center lg:justify-start">
                <div className="flex w-full max-w-90 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 px-5 py-3.5 backdrop-blur-md shadow-[0_0_35px_rgba(236,72,153,0.08)]">
                  <span className="mr-3 text-lg">🎁</span>

                  <span className="text-sm text-white/75">Use Bonus Code</span>

                  <span className="mx-3 h-5 w-px bg-white/10" />

                  <span className="bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-base font-bold tracking-[0.18em] text-transparent">
                    NEXA40
                  </span>
                </div>
              </div>
            </motion.div>

            {/* TRUST */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/45 lg:justify-start"
            >
              <span>✔ Instant Withdrawals</span>
              <span>✔ 24/7 Support</span>
              <span>✔ Weekly Rakeback</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden h-150 items-center justify-center lg:flex"
          >
            {/* MAIN GLOW */}
            <div className="absolute h-125 w-125 rounded-full bg-fuchsia-500/7 blur-[170px]" />

            {/* FLOATING CHIP 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute left-16 top-20 h-22 w-22 rounded-full bg-linear-to-br from-pink-500 to-purple-600 opacity-90 shadow-[0_0_30px_rgba(236,72,153,0.18)]"
            />

            {/* FLOATING CHIP 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 9, repeat: Infinity }}
              className="absolute bottom-20 right-12 h-18 w-18 rounded-full bg-linear-to-br from-purple-500 to-pink-500 opacity-90 shadow-[0_0_25px_rgba(168,85,247,0.16)]"
            />

            {/* CARDS */}
            <div className="relative flex items-center justify-center">
              {/* BLUE CARD */}
              <motion.div
                animate={{
                  rotate: [-11, -9, -11],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                }}
                className="absolute -left-8 top-16 z-0 h-97.5 w-62.5 rounded-[36px] border border-blue-400/15 bg-[#0b1222]/92 p-6 shadow-[0_0_55px_rgba(59,130,246,0.12)] backdrop-blur-xl"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-5xl font-bold text-blue-400">A♠</span>

                  <div className="flex items-center justify-center">
                    <span className="text-[118px] leading-none text-blue-400 drop-shadow-[0_0_22px_rgba(96,165,250,0.50)]">
                      ♠
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="rotate-180 text-5xl font-bold text-blue-400">
                      A♠
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* PINK CARD */}
              <motion.div
                animate={{
                  rotate: [10, 11.5, 10],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="relative z-10 h-106.25 w-67.5 rounded-[36px] border border-pink-400/15 bg-[#170d24]/96 p-6 shadow-[0_0_70px_rgba(236,72,153,0.16)] backdrop-blur-xl"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-5xl font-bold text-pink-400">A♥</span>

                  <div className="flex items-center justify-center">
                    <span className="text-[128px] leading-none text-pink-400 drop-shadow-[0_0_24px_rgba(244,114,182,0.60)]">
                      ♥
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="rotate-180 text-5xl font-bold text-pink-400">
                      A♥
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
