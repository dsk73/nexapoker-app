"use client";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Nexa<span className="text-pink-600">Poker</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Experience premium poker gaming with fast withdrawals, secure
              play, and real rewards.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-900">
                  Games
                </a>
              </li>
              <li>
                <a href="#bonuses" className="hover:text-gray-900">
                  Bonuses
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Get Started</h3>
            <p className="text-gray-500 mb-4">
              Join now and start playing instantly.
            </p>

            <a
              href="https://t.me/nexapoker"
              target="_blank"
              className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-pink-700 transition shadow-sm"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>© {new Date().getFullYear()} NexaPoker. All rights reserved.</p>

          <p className="text-xs max-w-2xl mx-auto leading-relaxed">
            This platform is intended for users aged 18 and above. Please play
            responsibly. NexaPoker does not promote illegal gambling activities
            in restricted regions.
          </p>
        </div>
      </div>
    </footer>
  );
}
