"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6"
          >
            Download & <span className="text-pink-600">Start Playing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Get instant access to our poker platform and start playing real
            money games. Join via Telegram and download the app in seconds.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {/* TELEGRAM */}
            <a
              href="https://t.me/nexapoker"
              target="_blank"
              className="px-6 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-sm"
            >
              Join Telegram
            </a>

            {/* DOWNLOAD */}
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-100 transition"
            >
              Download APK
            </a>
          </motion.div>

          {/* NOTE */}
          <p className="text-sm text-gray-500 mt-4">
            *Download link will be provided after joining Telegram
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/images/app-preview.png"
            alt="App Preview"
            width={300}
            height={500}
            className="rounded-2xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
