"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Smartphone,
  Trophy,
  Wallet,
  ShieldCheck,
  Gift,
  Star,
} from "lucide-react";

export default function Nexa40BrandPage() {
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
            Nexa <span className="text-pink-600">40</span> Poker Platform
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexa 40 is a premium online poker platform offering smooth gameplay,
            tournaments, instant withdrawals, weekly rakeback, and multi-device
            support for players worldwide.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-pink-500/20"
            >
              Download Nexa 40
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
                title: "Poker Tournaments",
                desc: "Play exciting tournaments and daily poker events with players worldwide.",
              },
              {
                icon: Wallet,
                title: "Instant Withdrawals",
                desc: "Fast deposits and smooth withdrawals for a reliable poker experience.",
              },
              {
                icon: Gift,
                title: "Weekly Rakeback",
                desc: "Unlock promotions, rewards, and exciting weekly rakeback systems.",
              },
              {
                icon: Smartphone,
                title: "Play Anywhere",
                desc: "Enjoy poker gameplay across Android, iOS, Windows, and Mac devices.",
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
                title: "What Is Nexa 40?",
                content: [
                  "Nexa 40 is an online poker platform designed for players looking for smooth gameplay, premium tournaments, fast withdrawals, and rewarding poker promotions.",
                  "Players searching for Nexa 40 often look for a reliable poker environment with stable gameplay, responsive software, and secure account management.",
                ],
              },
              {
                title: "Nexa 40 Online Poker Experience",
                content: [
                  "Online poker players expect responsive gameplay, stable servers, and exciting tournament schedules. Nexa 40 is optimized for fast navigation and smooth poker action.",
                  "The platform supports tournaments, cash games, leaderboard events, and rewarding promotional systems designed for players of all skill levels.",
                ],
              },
              {
                title: "Why Players Search for Nexa40",
                content: [
                  "Many players search for Nexa40 because they want a modern poker platform with quick onboarding, fast withdrawals, and rewarding gameplay systems.",
                  "Whether players are looking for poker tournaments or regular cash game action, Nexa40 offers a balanced poker ecosystem suitable for all experience levels.",
                ],
              },
              {
                title: "Download Nexa40 Poker App",
                content: [
                  "The Nexa40 poker application is available for Android, iOS, Windows, and Mac users.",
                  "Mobile poker gameplay continues to grow globally, and Nexa40 is optimized for smooth poker performance across smartphones and desktop systems.",
                ],
              },
              {
                title: "Fast Withdrawals & Secure Transactions",
                content: [
                  "Fast withdrawals and secure balance management are extremely important for poker players.",
                  "Players can confidently enjoy tournaments and poker cash games while managing transactions securely through the platform.",
                ],
              },
              {
                title: "Weekly Rakeback & Promotions",
                content: [
                  "Active poker players can unlock weekly rakeback rewards and special promotional systems designed to maximize long-term value.",
                  "Additional leaderboard contests, bonus offers, and poker promotions help create an exciting poker ecosystem for regular users.",
                ],
              },
              {
                title: "Multi-Device Poker Platform",
                content: [
                  "Nexa40 supports Android smartphones, iPhones, Windows PCs, and Mac systems with responsive gameplay across all major devices.",
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
              Everything you need to know about Nexa 40 before getting started.
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "What is Nexa 40?",
                  answer:
                    "Nexa 40 is an online poker platform offering tournaments, cash games, fast withdrawals, and rewarding poker promotions.",
                },
                {
                  question: "Can I download Nexa40 on mobile?",
                  answer:
                    "Yes, Nexa40 supports Android and iOS devices for mobile poker gameplay.",
                },
                {
                  question: "Does Nexa40 support desktop devices?",
                  answer:
                    "Yes, poker software is available for both Windows and Mac users.",
                },
                {
                  question: "Does Nexa40 offer rakeback rewards?",
                  answer:
                    "Yes, weekly rakeback systems and promotions are available for active players.",
                },
                {
                  question: "Are tournaments available daily?",
                  answer:
                    "Yes, poker tournaments and cash games run throughout the day.",
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
              href="/nexa40"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Nexa40</h3>

              <p className="text-gray-600 text-sm">
                Explore the Nexa40 poker platform and gameplay ecosystem.
              </p>
            </Link>

            <Link
              href="/online-poker"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Online Poker</h3>

              <p className="text-gray-600 text-sm">
                Learn more about modern online poker platforms and tournaments.
              </p>
            </Link>

            <Link
              href="/poker-download"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Poker Download</h3>

              <p className="text-gray-600 text-sm">
                Install poker software across Android, iOS, Windows, and Mac
                devices.
              </p>
            </Link>

            <Link
              href="/blog"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Poker Blog</h3>

              <p className="text-gray-600 text-sm">
                Explore poker guides, tutorials, and strategy articles.
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
              Ready to Start Playing?
            </h2>

            <p className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
              Download Nexa40 today and enjoy premium online poker tournaments,
              fast withdrawals, weekly rakeback, and smooth poker gameplay
              across Android, iOS, Windows, and Mac devices.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-pink-500/20"
              >
                Download Nexa40
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
            Nexa40 provides smooth gameplay, secure withdrawals, exciting poker
            tournaments, and rewarding promotions for players worldwide.
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
