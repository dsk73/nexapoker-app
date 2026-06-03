"use client";

import Link from "next/link";

const links = [
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
];

export default function ContentSection() {
  return (
    <section className="relative overflow-hidden bg-[#070012] px-6 py-12">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Content */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Premium{" "}
            <span
              style={{
                color: "#ee1d60",
              }}
            >
              Online Poker
            </span>{" "}
            Experience
          </h2>

          <p className="mx-auto mb-4 max-w-3xl text-lg leading-8 text-slate-300">
            Nexa Poker offers smooth gameplay, instant withdrawals and
            weekly rakeback for players.
          </p>

          <p className="mx-auto mb-10 max-w-1xl leading-8 text-slate-400">
            Available on Android, iPhone, Windows, and Mac with fast downloads,
            secure payments, and a seamless poker experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-white/10 bg-white/3 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#ee1d60]/30"
            >
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#ee1d60]">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-400">
                Explore guides, downloads, gameplay tips, and platform
                information.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
