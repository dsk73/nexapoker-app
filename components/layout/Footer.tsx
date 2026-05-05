"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0a0018] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-pink-600/20 blur-[120px] -top-30 -left-30" />
        <div className="absolute w-75 h-75 bg-purple-600/20 blur-[120px] -bottom-25 -right-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* BRAND */}
          <div>
            {/* LOGO */}
            <div className="mb-4">
              <Image
                src="/logo/wptgp-logo-horizontal.png" // update if needed
                alt="NexaPoker"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>

            <p className="text-white/70! leading-relaxed">
              Experience premium poker gaming with fast withdrawals, secure
              play, and real rewards.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Quick Links</h3>
            <ul className="space-y-2 text-white/70!">
              <li>
                <a href="#" className="hover:text-pink-400! transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-pink-400! transition">
                  Games
                </a>
              </li>
              <li>
                <a href="#bonuses" className="hover:text-pink-400! transition">
                  Bonuses
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400! transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Legal</h3>
            <ul className="space-y-2 text-white/70!">
              <li>
                <a href="#" className="hover:text-pink-400! transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400! transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400! transition">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-3 text-white!">Get Started</h3>
            <p className="text-white/70! mb-4">
              Join now and start playing instantly.
            </p>

            <a
              href="https://t.me/nexapoker"
              target="_blank"
              className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-pink-700 transition shadow-lg shadow-pink-500/30"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8"></div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-white/60! space-y-2">
          <p>© {new Date().getFullYear()} NexaPoker. All rights reserved.</p>

          <p className="text-xs max-w-2xl mx-auto leading-relaxed">
            This platform is intended for users aged 18 and above. Please play
            responsibly. Nexa Poker does not promote illegal gambling activities
            in restricted regions.
          </p>
        </div>
      </div>
    </footer>
  );
}
