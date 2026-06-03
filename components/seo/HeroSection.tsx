"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSectionProps } from "@/data/types";

export default function HeroSection({
  badge,
  title,
  highlightedTitle,
  description,
  primaryButton,
  secondaryButton,
  stats = [],
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#070012] px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-162.5 w-162.5 rounded-full bg-pink-600/20 blur-[180px]" />
        <div className="absolute -right-40 bottom-0 h-137.5 w-137.5 rounded-full bg-purple-600/20 blur-[180px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-300"
            >
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-black leading-none tracking-tight md:text-7xl xl:text-8xl"
          >
            <div
              style={{
                color: "#ffffff",
                textShadow: "0 0 40px rgba(255,255,255,0.08)",
              }}
            >
              {title}
            </div>

            {highlightedTitle && (
              <div
                className="mt-3"
                style={{
                  background:
                    "linear-gradient(90deg,#ff2d6f 0%,#d946ef 50%,#8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {highlightedTitle}
              </div>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 md:text-xl"
            style={{
              color: "#d8d8e6",
            }}
          >
            {description}
          </motion.p>

          {(primaryButton || secondaryButton) && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="inline-flex items-center justify-center rounded-2xl bg-pink-600 px-8 py-4 font-semibold shadow-xl shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(255,255,255,0.15)",
                  }}
                >
                  {primaryButton.text}
                </Link>
              )}

              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-white/10"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(255,255,255,0.2)",
                  }}
                >
                  {secondaryButton.text}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {stats.length > 0 && (
          <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >
                <div
                  className="text-3xl font-black md:text-4xl"
                  style={{
                    background:
                      "linear-gradient(90deg,#ff2d6f 0%,#d946ef 50%,#8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {item.value}
                </div>

                <div className="mt-2 text-sm text-white/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
