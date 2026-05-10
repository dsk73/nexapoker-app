"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Trophy,
  ShieldCheck,
  Wallet,
  Gift,
  Smartphone,
  Star,
} from "lucide-react";

export default function NexaPokerDownloadPage() {
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
            Nexa Poker <span className="text-pink-600">Download</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Download Nexa Poker and enjoy premium online poker games,
            tournaments, instant withdrawals, weekly rakeback rewards, and
            lightning-fast gameplay across Android, iOS, Windows, and Mac.
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
                title: "Download Nexa Poker for Android, iOS, Windows & Mac",
                content: [
                  "Nexa Poker is becoming one of the fastest-growing online poker platforms for players looking for a smooth, secure, and exciting poker experience.",
                  "Players can download Nexa Poker on Android devices, iPhones, Windows PCs, and Mac systems with optimized gameplay across all supported devices.",
                ],
              },
              {
                title: "Why Players Download Nexa Poker",
                content: [
                  "Many poker players search for Nexa Poker download because they want a platform that combines professional poker software with an easy onboarding process.",
                  "The platform offers tournaments running throughout the day, exciting bonus opportunities, weekly rakeback systems, and instant balance updates.",
                ],
              },
              {
                title: "Online Poker Experience",
                content: [
                  "Online poker has become more competitive than ever, and players expect fast gameplay, stable servers, and secure transactions.",
                  "Whether you are an experienced grinder or completely new to online poker, the platform offers games suitable for all skill levels.",
                ],
              },
              {
                title: "Fast Withdrawals & Secure Gameplay",
                content: [
                  "One of the biggest reasons players choose Nexa Poker is the fast withdrawal system and secure payment infrastructure.",
                  "Nexa Poker prioritizes stable gameplay, protected account access, and secure payment systems to ensure players have a smooth experience every day.",
                ],
              },
              {
                title: "Weekly Rakeback & Promotions",
                content: [
                  "Regular players can unlock exciting rakeback rewards and special promotional offers.",
                  "Additional promotions, contests, and bonus opportunities create a rewarding environment for both casual and serious poker enthusiasts.",
                ],
              },
              {
                title: "Multi-Device Poker Platform",
                content: [
                  "Nexa Poker supports Android smartphones, iPhones, Windows PCs, and Mac systems.",
                  "Players can seamlessly switch between mobile and desktop poker gameplay depending on their preferences.",
                ],
              },
              {
                title: "How to Download Nexa Poker",
                content: [
                  "Open the official Nexa Poker download page, choose your preferred device, install the software securely, and begin playing online poker within minutes.",
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
              Everything you need to know before downloading Nexa Poker.
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "Is Nexa Poker available for Android?",
                  answer:
                    "Yes, Nexa Poker is available for Android devices through APK download installation.",
                },
                {
                  question: "Can I download Nexa Poker on iPhone?",
                  answer:
                    "Yes, iOS users can access Nexa Poker through the official iOS installation process.",
                },
                {
                  question: "Does Nexa Poker support Windows and Mac?",
                  answer:
                    "Yes, dedicated download options are available for both Windows and Mac users.",
                },
                {
                  question: "Is Nexa Poker suitable for beginners?",
                  answer:
                    "Absolutely. The platform is designed for both recreational and experienced poker players.",
                },
                {
                  question: "Does Nexa Poker offer rakeback?",
                  answer:
                    "Yes, players can enjoy weekly rakeback rewards along with other promotional benefits.",
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
                Explore the Nexa40 poker ecosystem and premium gameplay
                experience.
              </p>
            </Link>

            <Link
              href="/nexa-40"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Nexa 40</h3>

              <p className="text-gray-600 text-sm">
                Learn more about Nexa 40 poker tournaments and gameplay systems.
              </p>
            </Link>

            <Link
              href="/online-poker"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Online Poker</h3>

              <p className="text-gray-600 text-sm">
                Explore modern online poker platforms, tournaments, and guides.
              </p>
            </Link>

            <Link
              href="/blog"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Poker Blog</h3>

              <p className="text-gray-600 text-sm">
                Read poker strategy guides, tutorials, and gameplay articles.
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
              Download Nexa Poker today and enjoy premium online poker
              tournaments, fast withdrawals, weekly rakeback, and smooth poker
              gameplay across Android, iOS, Windows, and Mac devices.
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
            Trusted Online Poker Platform
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Nexa Poker continues to grow among players looking for smooth
            gameplay, premium poker software, exciting tournaments, and reliable
            poker action across multiple devices worldwide.
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
