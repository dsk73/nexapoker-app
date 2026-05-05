"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Downloads() {
  return (
    <section
      id="downloads"
      className="relative py-16 px-6 overflow-hidden bg-[#0a0018]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-pink-600/20 blur-[120px] -top-25 -left-25" />
        <div className="absolute w-75 h-75 bg-purple-600/20 blur-[120px] -bottom-25 -right-25" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            <span className="text-white">Download & </span>
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Start Playing
            </span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 mb-6 max-w-md"
          >
            Get instant access to our poker platform and start playing real
            money games. Join via Telegram and download the app in seconds.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://t.me/nexapoker"
              target="_blank"
              className="px-5 py-2.5 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition shadow-lg shadow-pink-500/30"
            >
              Join Telegram
            </a>

            <a
              href="#"
              className="px-5 py-2.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition"
            >
              Download APK
            </a>
          </motion.div>

          {/* NOTE */}
          <p className="text-sm text-white/60 mt-3">
            *Download link will be provided after joining Telegram
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative p-0.5 rounded-2xl bg-linear-to-r from-pink-500 to-purple-500">
            <div className="bg-[#0a0018] rounded-2xl p-1.5">
              <Image
                src="/images/app-preview.png"
                alt="App Preview"
                width={320}
                height={560}
                className="rounded-xl w-65 md:w-[320px] h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
