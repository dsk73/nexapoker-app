export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          Nexa<span className="text-green-400">Poker</span>
        </h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Games
          </a>
          <a href="#" className="hover:text-white">
            Bonuses
          </a>
          <a href="#" className="hover:text-white">
            How to Play
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://t.me/your_channel"
          target="_blank"
          className="bg-green-500 px-4 py-2 rounded-lg text-black text-sm font-semibold hover:bg-green-400"
        >
          Play Now
        </a>
      </div>
    </nav>
  );
}
