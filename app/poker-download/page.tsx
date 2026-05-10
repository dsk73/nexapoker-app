"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Download,
  Smartphone,
  Laptop,
  Apple,
  Trophy,
  ShieldCheck,
  Wallet,
  Gift,
  Star,
} from "lucide-react";

export default function PokerDownloadPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Online <span className="text-pink-600">Poker Download</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Download premium online poker software for Android, iOS, Windows,
            and Mac. Play tournaments, cash games, and enjoy fast withdrawals,
            weekly rakeback, and smooth poker gameplay.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-pink-500/20"
            >
              Download Poker App
            </Link>

            <a
              href="https://t.me/nexapoker"
              target="_blank"
              className="border border-pink-200 hover:border-pink-500 text-pink-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </section>

      {/* DEVICE SUPPORT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Android",
                desc: "APK poker download for Android smartphones and tablets.",
              },
              {
                icon: Apple,
                title: "iPhone & iPad",
                desc: "Smooth poker gameplay on iOS devices and iPhones.",
              },
              {
                icon: Laptop,
                title: "Windows",
                desc: "Desktop poker software for Windows users.",
              },
              {
                icon: Download,
                title: "Mac OS",
                desc: "Professional poker experience for Mac users.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-gray-200 rounded-3xl p-8 text-center hover:shadow-xl transition"
                >
                  <Icon className="w-10 h-10 text-pink-600 mx-auto mb-5" />

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES + CONTENT */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Trophy,
                title: "Poker Tournaments",
                desc: "Join exciting daily poker tournaments with smooth gameplay and competitive action.",
              },
              {
                icon: Wallet,
                title: "Fast Withdrawals",
                desc: "Enjoy secure deposits and quick withdrawal processing for a smooth poker experience.",
              },
              {
                icon: Gift,
                title: "Weekly Rakeback",
                desc: "Unlock weekly rakeback systems, promotions, and rewarding poker bonuses.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition"
                >
                  <Icon className="w-10 h-10 text-pink-600 mb-5" />

                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CONTENT CARDS */}
          <div className="space-y-8">
            {[
              {
                title: "Download Online Poker Software",
                content: [
                  "Online poker players constantly search for fast, reliable, and secure poker software that delivers smooth gameplay and exciting tournament action.",
                  "Nexa Poker offers a complete online poker download experience for Android, iOS, Windows, and Mac users.",
                ],
              },
              {
                title: "Why Players Download Poker Apps",
                content: [
                  "Poker applications provide convenience and flexibility for players worldwide.",
                  "Players can instantly access tournaments, cash tables, and poker competitions directly from their devices.",
                ],
              },
              {
                title: "Professional Online Poker Experience",
                content: [
                  "Nexa Poker is designed to provide a smooth and professional poker experience with stable gameplay and optimized performance.",
                  "Players can enjoy tournaments, cash games, leaderboard competitions, and exciting poker promotions.",
                ],
              },
              {
                title: "Android Poker Download",
                content: [
                  "Android users can install the Nexa Poker APK directly on smartphones and tablets.",
                  "The Android version is optimized for fast loading times, stable gameplay, and responsive poker performance.",
                ],
              },
              {
                title: "iOS Poker Download",
                content: [
                  "iPhone and iPad users can enjoy smooth poker gameplay through the iOS-compatible version of Nexa Poker.",
                  "The iOS poker experience is optimized for secure gameplay and fast tournament access.",
                ],
              },
              {
                title: "Windows & Mac Poker Software",
                content: [
                  "Desktop poker players can download dedicated poker software for Windows PCs and Mac systems.",
                  "Desktop gameplay provides larger tables, multitabling opportunities, and immersive poker action.",
                ],
              },
              {
                title: "Weekly Rakeback & Promotions",
                content: [
                  "Regular poker players can unlock weekly rakeback rewards and special promotions.",
                  "Additional leaderboard contests and bonus opportunities are available for active users.",
                ],
              },
              {
                title: "How to Download Poker Software",
                content: [
                  "Visit the official poker download page, select your preferred device, install the application securely, create your account, and start playing online poker.",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm hover:shadow-xl transition"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  {section.title}
                </h2>

                <div className="space-y-4 text-gray-600 text-base leading-8">
                  {section.content.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-6">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>

            <p className="text-gray-600 text-center mb-12">
              Everything you need to know about online poker downloads.
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "Can I download poker software on Android?",
                  answer:
                    "Yes, Android users can install the poker APK directly on their devices.",
                },
                {
                  question: "Is online poker available for iPhone users?",
                  answer:
                    "Yes, iOS devices are fully supported for mobile poker gameplay.",
                },
                {
                  question: "Does Nexa Poker support desktop systems?",
                  answer:
                    "Yes, dedicated poker software is available for Windows and Mac users.",
                },
                {
                  question: "Are tournaments available daily?",
                  answer:
                    "Yes, poker tournaments and cash games run throughout the day.",
                },
                {
                  question: "Does Nexa Poker offer rakeback rewards?",
                  answer:
                    "Yes, weekly rakeback systems and promotions are available for active players.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-2xl bg-white overflow-hidden"
                >
                  <div className="px-6 py-5">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-16 grid md:grid-cols-2 gap-5">
            <Link
              href="/nexa-poker-download"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Nexa Poker Download
              </h3>

              <p className="text-gray-600 text-sm">
                Download Nexa Poker for Android, iOS, Windows, and Mac devices.
              </p>
            </Link>

            <Link
              href="/online-poker"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Online Poker</h3>

              <p className="text-gray-600 text-sm">
                Explore online poker tournaments, cash games, and gameplay
                systems.
              </p>
            </Link>

            <Link
              href="/wpt-global-alternative"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                WPT Global Alternative
              </h3>

              <p className="text-gray-600 text-sm">
                Discover premium alternatives for modern online poker gameplay.
              </p>
            </Link>

            <Link
              href="/blog"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Poker Blog</h3>

              <p className="text-gray-600 text-sm">
                Read poker guides, tutorials, strategy tips, and poker news.
              </p>
            </Link>
          </div>

          {/* DARK CTA */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0018] p-10 md:p-14 text-center">
            <div className="absolute inset-0 -z-10">
              <div className="absolute w-100 h-100 bg-pink-600/15 blur-[120px] -top-24 -left-24" />
              <div className="absolute w-87.5 h-87.5 bg-purple-600/15 blur-[120px] -bottom-24 -right-24" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white!">
              Download Poker Software Today
            </h2>

            <p className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
              Experience premium online poker gameplay with tournaments, fast
              withdrawals, smooth poker software, weekly rakeback rewards, and
              multi-device support across Android, iOS, Windows, and Mac.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-pink-500/20"
              >
                Download Poker App
              </Link>

              <Link
                href="/online-poker"
                className="inline-flex items-center justify-center border border-white/20 hover:border-pink-500 hover:bg-pink-500/10 text-white! px-8 py-4 rounded-2xl font-semibold transition"
              >
                Explore Online Poker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <ShieldCheck className="w-14 h-14 text-pink-600 mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Trusted Online Poker Platform
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexa Poker provides smooth poker gameplay, premium tournaments,
            secure withdrawals, and multi-device compatibility for players
            worldwide.
          </p>

          <div className="mt-10 flex justify-center gap-2 text-pink-600">
            <Star className="w-6 h-6 fill-pink-600" />
            <Star className="w-6 h-6 fill-pink-600" />
            <Star className="w-6 h-6 fill-pink-600" />
            <Star className="w-6 h-6 fill-pink-600" />
            <Star className="w-6 h-6 fill-pink-600" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
