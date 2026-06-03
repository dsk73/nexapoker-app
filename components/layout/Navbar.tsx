"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070012]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/wptgp-logo-horizontal.png"
            width={300}
            height={80}
            alt="Nexa Poker"
            className="h-auto w-44"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center text-lg gap-8 md:flex">
          <Link href="/" className="text-white/80 transition hover:text-white">
            Home
          </Link>

          <Link
            href="/#features"
            className="text-white/80 transition hover:text-white"
          >
            Games
          </Link>

          <Link
            href="/#bonuses"
            className="text-white/80 transition hover:text-white"
          >
            Bonuses
          </Link>

          <Link
            href="/#faq"
            className="text-white/80 transition hover:text-white"
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/3 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-[#ee1d60]/30"
          >
            Download
          </Link>

          <a
            href="https://t.me/nexapoker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "#ee1d60",
              boxShadow: "0 10px 30px rgba(238,29,96,.25)",
            }}
          >
            Play Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070012]/95 backdrop-blur-xl md:hidden">
          <div className="space-y-3 px-6 py-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#features"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 transition hover:text-white"
            >
              Games
            </Link>

            <Link
              href="/#bonuses"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 transition hover:text-white"
            >
              Bonuses
            </Link>

            <Link
              href="/#faq"
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 transition hover:text-white"
            >
              FAQ
            </Link>

            <div className="pt-3 space-y-3">
              <Link
                href="/download"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-white/15 bg-white/3 py-3 text-center font-semibold text-white"
              >
                Download
              </Link>

              <a
                href="https://t.me/nexapoker"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl py-3 text-center font-semibold text-white"
                style={{
                  backgroundColor: "#ee1d60",
                }}
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
