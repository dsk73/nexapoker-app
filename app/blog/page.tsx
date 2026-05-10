// nexapoker-app/app/blog/page.tsx
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Best Online Poker Apps in 2026",
    slug: "best-online-poker-apps-2026",
    desc: "Discover the best online poker apps for tournaments, cash games, smooth gameplay, and fast withdrawals.",
    date: "May 2026",
  },
  {
    title: "How to Download Nexa Poker",
    slug: "how-to-download-nexa-poker",
    desc: "Step-by-step guide to downloading Nexa Poker on Android, iOS, Windows, and Mac devices.",
    date: "May 2026",
  },
  {
    title: "Nexa Poker vs WPT Global",
    slug: "nexa-poker-vs-wpt-global",
    desc: "Compare Nexa Poker and WPT Global features, gameplay experience, tournaments, and poker software.",
    date: "May 2026",
  },
  {
    title: "How Online Poker Works",
    slug: "how-online-poker-works",
    desc: "Learn how online poker platforms work, including tournaments, rakeback, cash games, and poker software.",
    date: "May 2026",
  },
  {
    title: "Best Poker Apps for Android",
    slug: "best-poker-apps-for-android",
    desc: "Explore the top poker applications for Android devices with smooth gameplay and secure transactions.",
    date: "May 2026",
  },
  {
    title: "Online Poker Tournaments Guide",
    slug: "online-poker-tournaments-guide",
    desc: "Complete guide to online poker tournaments, structures, strategies, and tournament formats.",
    date: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 bg-linear-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Nexa40 <span className="text-pink-600">Poker Blog</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Explore poker guides, online poker strategies, tournament tips,
            poker app downloads, platform comparisons, and the latest poker
            insights from Nexa40.
          </p>
        </div>
      </section>

      {/* SEO LINKS */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                title: "Nexa40",
                href: "/nexa40",
              },
              {
                title: "Nexa 40",
                href: "/nexa-40",
              },
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
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="rounded-full border border-pink-200 px-5 py-2 text-sm font-medium text-pink-600 hover:bg-pink-50 transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group h-full border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition bg-white cursor-pointer"
                >
                  {/* IMAGE PLACEHOLDER */}
                  <div className="h-52 bg-linear-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center">
                    <div className="text-center px-6">
                      <h3 className="text-2xl font-bold text-pink-600 leading-snug">
                        {blog.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <CalendarDays className="w-4 h-4" />
                      {blog.date}
                    </div>

                    <h2 className="text-2xl font-semibold mb-4 leading-snug text-gray-900">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {blog.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="relative py-20 px-6 overflow-hidden bg-[#0a0018]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-100 h-100 bg-pink-600/15 blur-[120px] -top-25 -right-25" />
          <div className="absolute w-75 h-75 bg-purple-600/15 blur-[120px] -bottom-25 -left-25" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-[#0f001f] px-8 py-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white!">
              Ready to Start Playing?
            </h2>

            <p className="max-w-2xl mx-auto text-white/80! text-lg leading-relaxed mb-8">
              Download Nexa40 today and enjoy premium online poker tournaments,
              fast withdrawals, weekly rakeback, and smooth poker gameplay
              across Android, iOS, Windows, and Mac devices.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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

      <Footer />
    </main>
  );
}
