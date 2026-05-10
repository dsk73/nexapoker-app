// nexapoker-app/components/layout/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0a0018] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-pink-600/15 blur-[120px] -top-30 -left-30" />
        <div className="absolute w-75 h-75 bg-purple-600/15 blur-[120px] -bottom-25 -right-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-5 gap-10 text-sm">
          {/* BRAND */}
          <div>
            {/* LOGO */}
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/logo/wptgp-logo-horizontal.png"
                  alt="NexaPoker"
                  width={140}
                  height={40}
                  className="object-contain"
                  style={{ width: "140px", height: "auto" }}
                />
              </Link>
            </div>

            <p className="text-white/70! leading-relaxed">
              Nexa40 is a premium online poker platform offering smooth
              gameplay, tournaments, instant withdrawals, and weekly rakeback
              rewards for players worldwide.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Quick Links</h3>

            <ul className="space-y-2 text-white/70!">
              <li>
                <Link href="/" className="hover:text-pink-400! transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/download"
                  className="hover:text-pink-400! transition"
                >
                  Download
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-pink-400! transition">
                  Poker Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/online-poker"
                  className="hover:text-pink-400! transition"
                >
                  Online Poker
                </Link>
              </li>
            </ul>
          </div>

          {/* POPULAR PAGES */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Popular Pages</h3>

            <ul className="space-y-2 text-white/70!">
              <li>
                <Link
                  href="/nexa40"
                  className="hover:text-pink-400! transition"
                >
                  Nexa40
                </Link>
              </li>

              <li>
                <Link
                  href="/nexa-40"
                  className="hover:text-pink-400! transition"
                >
                  Nexa 40
                </Link>
              </li>

              <li>
                <Link
                  href="/nexa-poker-download"
                  className="hover:text-pink-400! transition"
                >
                  Nexa Poker Download
                </Link>
              </li>

              <li>
                <Link
                  href="/poker-download"
                  className="hover:text-pink-400! transition"
                >
                  Poker Download
                </Link>
              </li>

              <li>
                <Link
                  href="/wpt-global-alternative"
                  className="hover:text-pink-400! transition"
                >
                  WPT Global Alternative
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Legal</h3>

            <ul className="space-y-2 text-white/70!">
              <li>
                <Link href="/" className="hover:text-pink-400! transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-pink-400! transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-pink-400! transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Get Started</h3>

            <p className="text-white/70! mb-4 leading-relaxed">
              Download Nexa40 and start playing premium online poker instantly.
            </p>

            <a
              href="https://t.me/nexapoker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-pink-700 transition shadow-lg shadow-pink-500/30"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8"></div>

        {/* SEO TEXT */}
        <div className="max-w-5xl mx-auto text-center text-sm text-white/60! leading-relaxed space-y-4">
          <p>
            Nexa40 provides premium online poker gameplay with tournaments,
            smooth poker software, fast withdrawals, weekly rakeback rewards,
            and multi-device support across Android, iOS, Windows, and Mac.
          </p>

          <p>
            Explore popular poker pages including Nexa Poker Download, Online
            Poker, Poker Download, and WPT Global Alternative guides through the
            Nexa40 poker platform.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8"></div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-white/60! space-y-2">
          <p>© {new Date().getFullYear()} Nexa40. All rights reserved.</p>

          <p className="text-xs max-w-2xl mx-auto leading-relaxed">
            This platform is intended for users aged 18 and above. Please play
            responsibly. Nexa40 does not promote illegal gambling activities in
            restricted regions.
          </p>
        </div>
      </div>
    </footer>
  );
}
