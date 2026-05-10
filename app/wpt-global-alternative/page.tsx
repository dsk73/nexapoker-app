"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ShieldCheck, Trophy, Wallet, Zap, Star, Gift } from "lucide-react";

export default function WPTGlobalAlternativePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 bg-linear-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Best <span className="text-pink-600">WPT Global Alternative</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Looking for a premium alternative to WPT Global? Discover Nexa Poker
            — a fast-growing online poker platform with smooth gameplay,
            tournaments, instant withdrawals, weekly rakeback, and multi-device
            support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-pink-500/20"
            >
              Download Nexa Poker
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

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Gameplay",
                desc: "Enjoy smooth poker tables, stable servers, and responsive gameplay across all devices.",
              },
              {
                icon: Wallet,
                title: "Quick Withdrawals",
                desc: "Manage deposits and withdrawals securely with a reliable poker system.",
              },
              {
                icon: Trophy,
                title: "Premium Poker Action",
                desc: "Play tournaments, cash games, and daily poker events with global players.",
              },
              {
                icon: Gift,
                title: "Weekly Rewards",
                desc: "Unlock rakeback rewards, bonuses, and leaderboard promotions every week.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-gray-200 rounded-3xl p-7 text-center hover:shadow-xl transition"
                >
                  <Icon className="w-10 h-10 text-pink-600 mx-auto mb-5" />

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* CONTENT CARDS */}
          <div className="space-y-8">
            {[
              {
                title: "Why Players Search for WPT Global Alternatives",
                content: [
                  "Online poker players constantly search for platforms that provide smooth gameplay, rewarding promotions, fast withdrawals, and exciting tournament schedules.",
                  "As online poker continues to grow globally, players compare platforms to find the best overall poker experience.",
                ],
              },
              {
                title: "Nexa Poker as a WPT Global Alternative",
                content: [
                  "Nexa Poker is becoming a popular choice among players looking for modern poker software and premium online poker gameplay.",
                  "The platform offers tournaments, cash games, smooth performance, and secure gameplay across Android, iOS, Windows, and Mac devices.",
                ],
              },
              {
                title: "Modern Online Poker Experience",
                content: [
                  "Poker players expect responsive gameplay, stable servers, and quick access to tournaments and cash games.",
                  "Nexa Poker focuses on optimized poker performance, smooth navigation, and secure gameplay systems for players worldwide.",
                ],
              },
              {
                title: "Daily Tournaments & Cash Games",
                content: [
                  "Tournament players can participate in daily poker events while cash game players enjoy continuous action throughout the day.",
                  "Nexa Poker creates a balanced poker ecosystem suitable for both recreational and experienced poker players.",
                ],
              },
              {
                title: "Fast Withdrawals & Secure Gameplay",
                content: [
                  "Fast and reliable withdrawals are extremely important for poker players.",
                  "Nexa Poker focuses on smooth financial operations, protected account access, and secure poker gameplay infrastructure.",
                ],
              },
              {
                title: "Weekly Rakeback & Promotions",
                content: [
                  "Regular players can unlock weekly rakeback systems, poker promotions, leaderboard contests, and exciting bonus opportunities.",
                  "These systems help maximize long-term value while continuing to enjoy premium poker action.",
                ],
              },
              {
                title: "Multi-Device Poker Platform",
                content: [
                  "Nexa Poker supports Android smartphones, iPhones, Windows PCs, and Mac devices with smooth gameplay across all major systems.",
                  "The poker software is optimized for long sessions, tournament grinding, and professional online poker performance.",
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
              Everything you need to know about Nexa Poker as a WPT Global
              alternative.
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "Is Nexa Poker a good alternative to WPT Global?",
                  answer:
                    "Yes, Nexa Poker offers smooth gameplay, tournaments, fast withdrawals, rakeback systems, and multi-device support.",
                },
                {
                  question: "Can I play Nexa Poker on mobile?",
                  answer:
                    "Yes, Android and iPhone devices are fully supported for smooth mobile poker gameplay.",
                },
                {
                  question: "Does Nexa Poker support desktop devices?",
                  answer:
                    "Yes, dedicated poker software is available for Windows and Mac users.",
                },
                {
                  question: "Are tournaments available daily?",
                  answer:
                    "Yes, players can join tournaments and cash games throughout the day.",
                },
                {
                  question: "Does Nexa Poker offer rakeback?",
                  answer:
                    "Yes, weekly rakeback systems and poker promotions are available for active players.",
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
              href="/online-poker"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Online Poker</h3>

              <p className="text-gray-600 text-sm">
                Explore premium online poker tournaments and gameplay systems.
              </p>
            </Link>

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
              href="/nexa40"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Nexa40</h3>

              <p className="text-gray-600 text-sm">
                Explore the Nexa40 poker ecosystem and premium gameplay
                experience.
              </p>
            </Link>

            <Link
              href="/blog"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Poker Blog</h3>

              <p className="text-gray-600 text-sm">
                Read poker strategy guides, tutorials, and poker articles.
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
              Try Nexa Poker Today
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
                Download Nexa Poker
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
            Trusted Online Poker Experience
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexa Poker continues to grow among players looking for smooth
            gameplay, premium tournaments, secure withdrawals, and rewarding
            online poker action worldwide.
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
