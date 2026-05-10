"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Trophy,
  ShieldCheck,
  Wallet,
  Smartphone,
  Star,
  Gift,
} from "lucide-react";

export default function OnlinePokerPage() {
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
            Play <span className="text-pink-600">Online Poker</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Experience premium online poker games with tournaments, cash games,
            weekly rakeback, instant withdrawals, and smooth gameplay across
            Android, iOS, Windows, and Mac.
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

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: "Daily Poker Tournaments",
                desc: "Compete in exciting online poker tournaments throughout the day.",
              },
              {
                icon: Wallet,
                title: "Fast Withdrawals",
                desc: "Enjoy smooth deposits and quick withdrawals with secure gameplay.",
              },
              {
                icon: Smartphone,
                title: "Play Anywhere",
                desc: "Access online poker from Android, iOS, Windows, and Mac devices.",
              },
              {
                icon: Gift,
                title: "Weekly Rewards",
                desc: "Unlock rakeback rewards, bonuses, and leaderboard promotions.",
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
                title: "Best Online Poker Experience",
                content: [
                  "Online poker continues to grow globally as more players look for competitive gameplay, smooth software, secure transactions, and exciting tournament action.",
                  "Nexa Poker is designed for players who want a premium online poker experience with tournaments, cash games, weekly rakeback, instant withdrawals, and multi-device support.",
                ],
              },
              {
                title: "Why Online Poker Is So Popular",
                content: [
                  "Online poker allows players to enjoy real poker action from anywhere in the world without visiting physical poker rooms.",
                  "Players can instantly join tournaments, cash games, and sit & go events directly from their phones or computers.",
                ],
              },
              {
                title: "Play Online Poker on Any Device",
                content: [
                  "Nexa Poker supports Android smartphones, iPhones, Windows PCs, and Mac devices with smooth gameplay across all platforms.",
                  "The platform is optimized for fast loading speeds, stable connections, and responsive poker gameplay.",
                ],
              },
              {
                title: "Daily Tournaments & Cash Games",
                content: [
                  "Poker players enjoy different formats depending on their playing style. Some prefer tournaments while others enjoy fast-paced cash games.",
                  "Tournaments run throughout the day with exciting prize pools and leaderboard rewards.",
                ],
              },
              {
                title: "Weekly Rakeback Rewards",
                content: [
                  "Consistent online poker players can unlock weekly rakeback benefits and special promotional rewards.",
                  "Promotions and leaderboard contests create a rewarding environment for casual players and serious grinders alike.",
                ],
              },
              {
                title: "Secure Online Poker Platform",
                content: [
                  "Security and reliability are extremely important for online poker players worldwide.",
                  "Nexa Poker focuses on secure gameplay, protected transactions, stable servers, and reliable account access.",
                ],
              },
              {
                title: "Professional Poker Experience",
                content: [
                  "Players searching for professional online poker platforms expect smooth gameplay, modern interfaces, and quick navigation.",
                  "Nexa Poker delivers an optimized poker ecosystem for tournaments, cash games, and long poker sessions.",
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
              Everything you need to know about online poker gameplay.
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "Can I play online poker on mobile?",
                  answer:
                    "Yes, Nexa Poker supports Android and iPhone devices for smooth mobile poker gameplay.",
                },
                {
                  question: "Is online poker available on Windows and Mac?",
                  answer:
                    "Yes, dedicated desktop versions are available for both Windows and Mac users.",
                },
                {
                  question: "Does Nexa Poker offer tournaments?",
                  answer:
                    "Yes, tournaments run regularly throughout the day for players of different skill levels.",
                },
                {
                  question: "Can beginners play online poker?",
                  answer:
                    "Absolutely. Both recreational and experienced poker players can enjoy the platform.",
                },
                {
                  question: "Does Nexa Poker provide rakeback?",
                  answer:
                    "Yes, weekly rakeback rewards and promotions are available for active players.",
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
                Download Nexa Poker on Android, iOS, Windows, and Mac devices.
              </p>
            </Link>

            <Link
              href="/nexa40"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Nexa40</h3>

              <p className="text-gray-600 text-sm">
                Explore the Nexa40 poker ecosystem and premium gameplay system.
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
              Start Playing Online Poker
            </h2>

            <p className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
              Join premium online poker tournaments, enjoy fast withdrawals,
              unlock weekly rakeback rewards, and experience smooth gameplay
              across Android, iOS, Windows, and Mac devices.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-pink-500/20"
              >
                Download Poker App
              </Link>

              <Link
                href="/nexa-poker-download"
                className="inline-flex items-center justify-center border border-white/20 hover:border-pink-500 hover:bg-pink-500/10 text-white! px-8 py-4 rounded-2xl font-semibold transition"
              >
                Nexa Poker Download
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
            Nexa Poker provides a smooth and reliable online poker experience
            with tournaments, secure gameplay, fast withdrawals, and rewarding
            promotions for players worldwide.
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
