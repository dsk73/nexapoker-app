"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Laptop, Smartphone, Apple, Download, Copy, Check } from "lucide-react";

const downloads = [
  {
    name: "Windows",
    desc: "Download EXE",
    icon: Laptop,
    link: "https://downloads.nexapoker.com/latest/NEXAPOKER.exe",
  },
  {
    name: "Android",
    desc: "APK File",
    icon: Smartphone,
    link: "https://downloads.nexapoker.com/latest/NEXAPOKER.apk",
    recommended: true,
  },
  {
    name: "Mac OS",
    desc: "DMG File",
    icon: Apple,
    link: "https://downloads.nexapoker.com/latest/NEXAPOKER.dmg",
  },
  {
    name: "iOS",
    desc: "App Store",
    icon: Download,
    link: "https://ios-download.nexapoker.com",
  },
];

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("NEXA40");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Download <span className="text-pink-600">NexaPoker</span>
          </motion.h1>

          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Choose your device and start playing instantly.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {downloads.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`relative group rounded-2xl border p-6 text-center transition 
                    ${
                      item.recommended
                        ? "border-pink-500 shadow-lg shadow-pink-500/20"
                        : "border-gray-200 hover:border-pink-500 hover:shadow-md"
                    }`}
                >
                  {/* RECOMMENDED BADGE */}
                  {item.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Recommended
                    </div>
                  )}

                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-pink-600 group-hover:scale-110 transition" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>

                  {/* DESC */}
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

                  {/* HOVER CTA */}
                  <div className="mt-4 text-sm text-pink-600 font-medium">
                    Download
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* BONUS SECTION */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm mb-3">🎁 Use Bonus Code</p>

            <div className="flex items-center justify-center gap-3">
              {/* CODE CARD */}
              <div className="bg-pink-50 border border-pink-200 px-6 py-3 rounded-xl shadow-sm">
                <span className="text-lg font-bold text-pink-600 tracking-widest">
                  NEXA40
                </span>
              </div>

              {/* COPY ICON CARD */}
              <button
                onClick={handleCopy}
                className="bg-white border border-gray-200 px-4 py-3 rounded-xl shadow-sm hover:border-pink-500 hover:shadow-md transition flex items-center justify-center"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* FEEDBACK */}
            <p className="text-sm text-green-600 mt-3 h-4">
              {copied ? "Copied to clipboard" : ""}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Weekly rakeback + exciting contests available
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
