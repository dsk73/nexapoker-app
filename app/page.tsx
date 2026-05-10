// nexapoker-app/app/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Bonuses from "@/components/sections/Bonuses";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import HowItWorks from "@/components/sections/HowItWorks";
import Downloads from "@/components/sections/Downloads";
import Payments from "@/components/sections/Payments";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative text-white overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Hero />

        {/* SEO INTRO SECTION */}
        <section className="bg-[#070010] px-6 py-16 border-t border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* LEFT */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Premium <span className="text-pink-500">Online Poker</span>{" "}
                  Experience
                </h2>

                <p className="text-white/70 leading-relaxed mb-6">
                  Nexa40 is a fast-growing online poker platform offering smooth
                  gameplay, tournaments, instant withdrawals, weekly rakeback,
                  and premium poker action for players worldwide.
                </p>

                <p className="text-white/70 leading-relaxed mb-8">
                  Whether you are looking for Nexa Poker Download, Online Poker,
                  Poker Download, or a WPT Global Alternative, Nexa40 provides a
                  modern poker experience optimized for Android, iPhone,
                  Windows, and Mac devices.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/download"
                    className="bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-xl font-medium shadow-lg shadow-pink-500/20"
                  >
                    Download Nexa40
                  </Link>

                  <Link
                    href="/online-poker"
                    className="border border-white/15 hover:border-pink-500 hover:bg-pink-500/10 transition px-6 py-3 rounded-xl font-medium"
                  >
                    Explore Online Poker
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="grid sm:grid-cols-2 gap-4">
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
                    title: "WPT Global Alternative",
                    href: "/wpt-global-alternative",
                  },
                  {
                    title: "Poker Download",
                    href: "/poker-download",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-pink-500/40 transition p-5"
                  >
                    <div className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition">
                      {item.title}
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed">
                      Explore detailed guides, downloads, poker gameplay, and
                      platform insights.
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Stats />
        <Bonuses />
        <Downloads />
        <Payments />
        <Testimonials />
        <HowItWorks />
        <CTA />

        {/* SEO FAQ SECTION */}
        <section className="bg-[#070010] px-6 py-20 border-t border-b border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Online Poker <span className="text-pink-500">FAQs</span>
              </h2>

              <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
                Learn more about Nexa40, online poker gameplay, poker downloads,
                tournaments, withdrawals, and supported devices.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is Nexa40?",
                  a: "Nexa40 is an online poker platform offering tournaments, smooth gameplay, instant withdrawals, weekly rakeback, and multi-device poker support.",
                },
                {
                  q: "How can I download Nexa Poker?",
                  a: "Players can download Nexa Poker through the official download page for Android, iOS, Windows, and Mac devices.",
                },
                {
                  q: "Can I play online poker on mobile?",
                  a: "Yes, Nexa40 fully supports Android smartphones and iPhone devices for smooth mobile poker gameplay.",
                },
                {
                  q: "Does Nexa40 offer tournaments?",
                  a: "Yes, tournaments and poker cash games are available regularly for players worldwide.",
                },
                {
                  q: "Is Nexa40 available on desktop?",
                  a: "Yes, dedicated poker software is available for both Windows and Mac users.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/3 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.q}
                  </h3>

                  <p className="text-white/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* INTERNAL LINKS */}
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <Link
                href="/nexa40"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                Nexa40
              </Link>

              <Link
                href="/nexa-40"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                Nexa 40
              </Link>

              <Link
                href="/blog"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                Poker Blog
              </Link>

              <Link
                href="/nexa-poker-download"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                Nexa Poker Download
              </Link>

              <Link
                href="/online-poker"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                Online Poker
              </Link>
            </div>
          </div>
        </section>

        <FAQ />
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
