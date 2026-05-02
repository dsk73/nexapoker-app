"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo/wptgp-logo-horizontal.png"
            alt="NexaPoker Logo"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-lg text-white/70">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#features" className="hover:text-white transition">
            Games
          </a>
          <a href="#bonuses" className="hover:text-white transition">
            Bonuses
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://t.me/nexapoker"
          target="_blank"
          className="hidden md:inline-block bg-pink-600 text-white px-5 py-2 rounded-lg text-md font-medium hover:bg-pink-700 transition shadow-sm"
        >
          Play Now
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#14002e] border-t border-white/10 px-6 py-4 space-y-4">
          <a href="#" className="block text-white/70 hover:text-white">
            Home
          </a>
          <a href="#features" className="block text-white/70 hover:text-white">
            Games
          </a>
          <a href="#bonuses" className="block text-white/70 hover:text-white">
            Bonuses
          </a>
          <a href="#faq" className="block text-white/70 hover:text-white">
            FAQ
          </a>

          <a
            href="https://t.me/nexapoker"
            target="_blank"
            className="block text-center bg-pink-600 text-white py-3 rounded-lg font-medium"
          >
            Play Now
          </a>
        </div>
      )}
    </header>
  );
}
