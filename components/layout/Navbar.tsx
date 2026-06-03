//nexapoker-app/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo/wptgp-logo-horizontal.png"
            width={300}
            height={80}
            className="w-40 h-auto"
            alt={"Footer logo"}
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-7 text-lg text-white">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/#features" className="hover:text-gray-300 transition">
            Games
          </Link>

          <Link href="/#bonuses" className="hover:text-gray-300 transition">
            Bonuses
          </Link>

          <Link href="/#faq" className="hover:text-gray-300 transition">
            FAQ
          </Link>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/download"
            className="px-5 py-2 rounded-lg text-lg font-medium bg-pink-600 hover:bg-pink-700 transition"
            style={{ color: "#ffffff" }}
          >
            Download
          </Link>

          <a
            href="https://t.me/nexapoker"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 px-5 py-2 rounded-lg text-lg font-medium hover:bg-pink-700 transition shadow-sm"
            style={{ color: "#ffffff" }}
          >
            Play Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
          <Link href="/" className="block text-white hover:text-gray-300">
            Home
          </Link>

          <Link
            href="/#features"
            className="block text-white hover:text-gray-300"
          >
            Games
          </Link>

          <Link
            href="/#bonuses"
            className="block text-white hover:text-gray-300"
          >
            Bonuses
          </Link>

          <Link href="/#faq" className="block text-white hover:text-gray-300">
            FAQ
          </Link>

          <Link
            href="/download"
            className="block text-center bg-pink-600 py-3 rounded-lg font-medium hover:bg-pink-700 transition"
            style={{ color: "#ffffff" }}
          >
            Download
          </Link>

          <a
            href="https://t.me/nexapoker"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-pink-600 py-3 rounded-lg font-medium hover:bg-pink-700 transition"
            style={{ color: "#ffffff" }}
          >
            Play Now
          </a>
        </div>
      )}
    </header>
  );
}
