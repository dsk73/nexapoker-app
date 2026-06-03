"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Apple,
  Download,
  Copy,
  Check,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

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
    desc: "Download DMG",
    icon: Apple,
    link: "https://downloads.nexapoker.com/latest/NEXAPOKER.dmg",
  },
  {
    name: "iPhone / iOS",
    desc: "Install App",
    icon: Download,
    link: "https://ios-download.nexapoker.com",
  },
];

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("NEXA40");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-36 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-4xl font-black text-slate-900 md:text-6xl">
              Download{" "}
              <span
                style={{
                  color: "#ee1d60",
                }}
              >
                Nexa Poker
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Download Nexa Poker on Android, iPhone, Windows, and Mac.
              Install the app, use promo code NEXA40, and start playing
              real money poker instantly.
            </p>
          </div>

          {/* DOWNLOAD CARDS */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {downloads.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`relative overflow-hidden rounded-[28px] border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl ${
                    item.recommended
                      ? "border-[#ee1d60]"
                      : "border-slate-200 hover:border-[#ee1d60]/30"
                  }`}
                >
                  {item.recommended && (
                    <div
                      className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl px-4 py-1 text-xs font-semibold text-white"
                      style={{
                        backgroundColor: "#ee1d60",
                      }}
                    >
                      Recommended
                    </div>
                  )}

                  <div className="mb-5 flex justify-center">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: "rgba(238,29,96,.08)",
                      }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{
                          color: "#ee1d60",
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-slate-500">{item.desc}</p>

                  <div
                    className="mt-5 font-semibold"
                    style={{
                      color: "#ee1d60",
                    }}
                  >
                    Download →
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* BONUS CODE */}
          <div className="mt-16">
            <div className="mx-auto max-w-2xl rounded-4xl border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Promo Code
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <div
                  className="rounded-2xl px-8 py-4 text-2xl font-black tracking-widest text-white"
                  style={{
                    backgroundColor: "#ee1d60",
                  }}
                >
                  NEXA40
                </div>

                <button
                  onClick={handleCopy}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:border-[#ee1d60]"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <Copy className="h-5 w-5 text-slate-600" />
                  )}
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Use code NEXA40 while registering to unlock promotions,
                rewards, contests, and rakeback benefits.
              </p>

              <p className="mt-2 text-sm text-green-600 h-5">
                {copied ? "Copied to clipboard" : ""}
              </p>
            </div>
          </div>

          {/* HOW TO DOWNLOAD */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-black text-slate-900">
                How To Get Started
              </h2>

              <p className="text-slate-500">
                Start playing in just a few simple steps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Download The App",
                  desc: "Choose your device and install Nexa Poker.",
                },
                {
                  title: "Use Promo Code",
                  desc: "Enter NEXA40 during registration.",
                },
                {
                  title: "Start Playing",
                  desc: "Join games, tournaments, and promotions instantly.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TELEGRAM CTA */}
          <div className="mt-20 rounded-[36px] border border-slate-200 bg-slate-50 p-10 text-center">
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-5xl">
              Need Help Installing?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-slate-600">
              Our Telegram support team can help with installation,
              deposits, withdrawals, and getting started.
            </p>

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
          </div>

          {/* RELATED PAGES */}
          <div className="mt-24">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-black text-slate-900">
                Explore More
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Nexa Poker Download",
                  href: "/nexa-poker-download",
                },
                {
                  title: "Online Poker",
                  href: "/online-poker",
                },
                {
                  title: "Poker Download",
                  href: "/poker-download",
                },
                {
                  title: "WPT Global Alternative",
                  href: "/wpt-global-alternative",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#ee1d60]/30 hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-slate-500">
                    Learn more about downloads, gameplay, and poker guides.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </main>
  );
}
