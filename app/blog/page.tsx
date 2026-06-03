"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, BookOpen } from "lucide-react";

import { blogPosts } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070012] px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-162.5 w-162.5 rounded-full bg-pink-600/20 blur-[180px]" />
          <div className="absolute -right-40 bottom-0 h-137.5 w-137.5 rounded-full bg-purple-600/20 blur-[180px]" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-300">
            <BookOpen className="h-4 w-4" />
            Poker Strategy, Guides & Tutorials
          </div>

          <h1
            className="text-5xl font-black leading-none tracking-tight md:text-7xl"
            style={{
              color: "#ffffff",
              textShadow: "0 0 40px rgba(255,255,255,0.08)",
            }}
          >
            Nexa Poker{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,#ff2d6f 0%,#d946ef 50%,#8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Blog
            </span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 md:text-xl"
            style={{
              color: "#d8d8e6",
            }}
          >
            Learn online poker strategy, tournament fundamentals, poker hand
            rankings, bankroll management, rakeback systems, poker app guides,
            and platform comparisons through our growing poker knowledge base.
          </p>
        </div>
      </section>

      {/* SEO LINKS */}
      <section className="border-b border-slate-100 bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                title: "Online Poker",
                href: "/online-poker",
              },
              {
                title: "Download Poker App",
                href: "/download",
              },
              {
                title: "Nexa40",
                href: "/nexa40",
              },
              {
                title: "Nexa 40",
                href: "/nexa-40",
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
                key={item.href}
                href={item.href}
                className="rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-semibold text-pink-600 transition-all duration-300 hover:border-pink-500 hover:bg-pink-50"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
              Latest Poker Articles
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
              Explore poker strategy guides, tournament advice, poker app
              reviews, bankroll management tips, and educational content for
              players of all skill levels.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group h-full overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-pink-200 hover:shadow-2xl"
                >
                  {/* Card Top */}
                  <div className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-pink-50 via-white to-purple-50 p-8">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />

                    <h3 className="relative text-2xl font-black leading-snug text-slate-900 transition-colors duration-300 group-hover:text-pink-600">
                      {post.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </div>

                    <p className="mb-8 leading-8 text-slate-600">
                      {post.description}
                    </p>

                    <div className="inline-flex items-center gap-2 font-semibold text-pink-600 transition-all duration-300 group-hover:gap-3">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#070012]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-pink-600/20 blur-[180px]" />
              <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-purple-600/20 blur-[180px]" />
            </div>

            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />

            <div className="relative z-10 px-8 py-20 text-center md:px-16 md:py-24">
              <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300">
                ♠ Ready To Play?
              </div>

              <h2
                className="mb-6 text-4xl font-black leading-tight md:text-6xl"
                style={{
                  color: "#ffffff",
                }}
              >
                Start Playing Online Poker Today
              </h2>

              <p
                className="mx-auto mb-10 max-w-3xl text-lg leading-8 md:text-xl"
                style={{
                  color: "#d8d8e6",
                }}
              >
                Download Nexa Poker and enjoy real money tournaments, active
                cash games, weekly rakeback rewards, fast withdrawals, and a
                premium online poker experience.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center rounded-2xl bg-pink-600 px-8 py-4 font-semibold shadow-xl shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Download App
                </Link>

                <Link
                  href="/online-poker"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-white/10"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Explore Online Poker
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
