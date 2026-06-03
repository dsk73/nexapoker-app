"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#070012]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo/wptgp-logo-horizontal.png"
                width={320}
                height={90}
                alt="Nexa Poker"
                className="mb-5 h-auto w-44"
              />
            </Link>

            <p className="max-w-md leading-8 text-slate-300">
              Nexa Poker is a premium online poker platform offering
              tournaments, cash games, instant withdrawals, weekly rakeback, and
              a seamless poker experience across Android, iPhone, Windows, and
              Mac.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="transition hover:text-[#ee1d60]">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/download"
                  className="transition hover:text-[#ee1d60]"
                >
                  Download
                </Link>
              </li>

              <li>
                <Link href="/blog" className="transition hover:text-[#ee1d60]">
                  Poker Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/online-poker"
                  className="transition hover:text-[#ee1d60]"
                >
                  Online Poker
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Pages */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Popular Pages</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="/nexa40"
                  className="transition hover:text-[#ee1d60]"
                >
                  Nexa40
                </Link>
              </li>

              <li>
                <Link
                  href="/nexa-40"
                  className="transition hover:text-[#ee1d60]"
                >
                  Nexa 40
                </Link>
              </li>

              <li>
                <Link
                  href="/nexa-poker-download"
                  className="transition hover:text-[#ee1d60]"
                >
                  Nexa Poker Download
                </Link>
              </li>

              <li>
                <Link
                  href="/poker-download"
                  className="transition hover:text-[#ee1d60]"
                >
                  Poker Download
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/wpt-global-alternative"
                  className="transition hover:text-[#ee1d60]"
                >
                  WPT Global Alternative
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Legal</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="transition hover:text-[#ee1d60]">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-[#ee1d60]">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-[#ee1d60]">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* SEO Content */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="leading-8 text-slate-400">
            Nexa Poker offers premium online poker games, tournaments, rakeback
            rewards, fast withdrawals and dedicated player support. Players can
            enjoy a seamless experience across Android, iPhone, Windows and Mac
            devices.
          </p>

          <p className="mt-4 leading-8 text-slate-500">
            Explore guides and resources including Nexa Poker Download, Online
            Poker, Poker Download and Nexa40 promotional offers.
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="space-y-3 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Nexa Poker. All rights reserved.
          </p>

          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-500">
            This platform is intended for users aged 18 and above. Please play
            responsibly. Nexa Poker does not promote illegal gambling activities
            in restricted jurisdictions.
          </p>
        </div>
      </div>
    </footer>
  );
}
