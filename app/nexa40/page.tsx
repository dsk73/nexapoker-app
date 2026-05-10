//nexapoker-app/app/nexa40/page.tsx
"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  Trophy,
  Wallet,
  Smartphone,
  Gift,
  Star,
} from "lucide-react";

export default function Nexa40Page() {
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
            Welcome to <span className="text-pink-600">Nexa40</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexa40 is a premium online poker platform offering smooth gameplay,
            tournaments, instant withdrawals, weekly rakeback rewards, and
            multi-device poker support for players worldwide.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-pink-500/20"
            >
              Download Nexa40
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
                desc: "Play exciting poker tournaments and compete with players worldwide.",
              },
              {
                icon: Wallet,
                title: "Fast Withdrawals",
                desc: "Enjoy quick deposits and instant withdrawal processing.",
              },
              {
                icon: Gift,
                title: "Weekly Rakeback",
                desc: "Unlock weekly rakeback rewards and special poker bonuses.",
              },
              {
                icon: Smartphone,
                title: "Multi-Device Support",
                desc: "Play smoothly on Android, iOS, Windows, and Mac devices.",
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
          <div className="space-y-8">
            {[
              {
                title: "What Is Nexa40?",
                content: [
                  "Nexa40 is a fast-growing online poker platform designed for players who want smooth gameplay, premium poker tournaments, secure transactions, and rewarding promotions.",
                  "Players searching for Nexa Poker Download often look for a reliable poker experience with fast withdrawals and stable gameplay.",
                ],
              },
              {
                title: "Why Players Choose Nexa40",
                content: [
                  "Modern poker players expect smooth software, stable servers, fast support, and rewarding gameplay systems. Nexa40 is designed to provide exactly that.",
                  "The platform supports tournaments, cash games, leaderboard events, and exciting poker promotions throughout the week.",
                ],
              },
              {
                title: "Nexa40 Poker Experience",
                content: [
                  "Online poker continues to grow rapidly worldwide, and players are constantly searching for modern poker platforms with responsive gameplay and professional poker software.",
                  "Players exploring online poker platforms want smooth performance, quick gameplay, and rewarding poker ecosystems.",
                ],
              },
              {
                title: "Download Nexa40",
                content: [
                  "Nexa40 is available for Android, iOS, Windows, and Mac users. Players can quickly install the poker application and begin playing within minutes.",
                  "You can also explore the dedicated poker download guide for installation help and supported devices.",
                ],
              },
              {
                title: "Weekly Rakeback & Promotions",
                content: [
                  "Active players can unlock weekly rakeback systems and exciting promotional rewards while enjoying daily poker action.",
                  "Nexa40 regularly offers leaderboard events, promotions, and poker bonuses for active users across the platform.",
                ],
              },
              {
                title: "Fast Withdrawals & Secure Gameplay",
                content: [
                  "Fast withdrawals and secure balance management are extremely important for online poker players.",
                  "Players looking for a WPT Global alternative often prioritize security, smooth gameplay, and stable software.",
                ],
              },
              {
                title: "Multi-Device Compatibility",
                content: [
                  "Nexa40 supports Android smartphones, iPhones, Windows PCs, and Mac devices with optimized poker gameplay across all platforms.",
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
                    <p key={idx}>
                      {text.includes("Nexa Poker Download") ? (
                        <>
                          Players searching for{" "}
                          <Link
                            href="/nexa-poker-download"
                            className="text-pink-600 font-medium hover:underline"
                          >
                            Nexa Poker Download
                          </Link>{" "}
                          often look for a reliable poker experience with fast
                          withdrawals and stable gameplay.
                        </>
                      ) : text.includes("online poker platforms") ? (
                        <>
                          Players exploring{" "}
                          <Link
                            href="/online-poker"
                            className="text-pink-600 font-medium hover:underline"
                          >
                            online poker platforms
                          </Link>{" "}
                          want smooth performance, quick gameplay, and rewarding
                          poker ecosystems.
                        </>
                      ) : text.includes("poker download guide") ? (
                        <>
                          You can also explore the dedicated{" "}
                          <Link
                            href="/poker-download"
                            className="text-pink-600 font-medium hover:underline"
                          >
                            poker download guide
                          </Link>{" "}
                          for installation help and supported devices.
                        </>
                      ) : text.includes("WPT Global alternative") ? (
                        <>
                          Players looking for a{" "}
                          <Link
                            href="/wpt-global-alternative"
                            className="text-pink-600 font-medium hover:underline"
                          >
                            WPT Global alternative
                          </Link>{" "}
                          often prioritize security, smooth gameplay, and stable
                          software.
                        </>
                      ) : (
                        text
                      )}
                    </p>
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
              Everything you need to know about Nexa40 before getting started.
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "What is Nexa40?",
                  answer:
                    "Nexa40 is a premium online poker platform offering tournaments, cash games, fast withdrawals, and smooth multi-device gameplay.",
                },
                {
                  question: "Can I download Nexa40 on mobile?",
                  answer:
                    "Yes, Nexa40 supports Android and iOS mobile devices with optimized poker gameplay and responsive controls.",
                },
                {
                  question: "Does Nexa40 support desktop poker?",
                  answer:
                    "Yes, players can enjoy dedicated poker software for Windows and Mac devices with smooth multitabling support.",
                },
                {
                  question: "Does Nexa40 offer rakeback rewards?",
                  answer:
                    "Yes, active players can unlock weekly rakeback systems, leaderboard rewards, and exclusive poker promotions.",
                },
                {
                  question: "Are poker tournaments available daily?",
                  answer:
                    "Yes, Nexa40 offers regular poker tournaments and cash games throughout the day for players worldwide.",
                },
                {
                  question: "How do withdrawals work on Nexa40?",
                  answer:
                    "Withdrawals are processed quickly and securely, allowing players to access winnings smoothly and efficiently.",
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

          {/* INTERNAL LINK CARDS */}
          <div className="mt-16 grid md:grid-cols-2 gap-5">
            <Link
              href="/nexa-poker-download"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Nexa Poker Download
              </h3>

              <p className="text-gray-600 text-sm">
                Download Nexa40 for Android, iOS, Windows, and Mac devices.
              </p>
            </Link>

            <Link
              href="/online-poker"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Online Poker Guide</h3>

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
                Install poker software across all supported devices.
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

          <h2 className="text-4xl font-bold mb-6">Trusted Poker Platform</h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexa40 provides smooth gameplay, exciting poker tournaments, secure
            withdrawals, rewarding promotions, and a premium online poker
            experience for players worldwide.
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
