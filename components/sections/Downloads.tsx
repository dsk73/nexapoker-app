"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Downloads() {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden bg-[#070012] px-6 py-12"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-4xl font-black leading-tight text-white md:text-6xl"
          >
            Download &{" "}
            <span
              style={{
                color: "#ee1d60",
              }}
            >
              Start Playing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 max-w-lg text-lg leading-8 text-slate-300"
          >
            Get instant access to Nexa Poker and start playing real money games
            within minutes.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://t.me/nexapoker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#ee1d60",
                boxShadow: "0 15px 40px rgba(238,29,96,.25)",
              }}
            >
              Join Telegram
            </a>

            <a
              href="/download"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/3 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#ee1d60]/30"
            >
              Download APK
            </a>
          </motion.div>

          <p className="mt-4 text-sm text-slate-400">
            * Download link will be provided after joining Telegram.
          </p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="rounded-[36px] border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
            <Image
              src="/images/app-preview.png"
              width={460}
              height={750}
              alt="Nexa Poker App"
              className="h-auto w-auto rounded-3xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
