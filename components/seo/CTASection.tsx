"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { CTASectionProps } from "@/data/types";

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#070012]"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-pink-600/20 blur-[180px]" />
            <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-purple-600/20 blur-[180px]" />
          </div>

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">

              <h2
                className="mb-6 text-4xl font-black leading-tight md:text-5xl"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 40px rgba(255,255,255,0.08)",
                }}
              >
                {title}
              </h2>

              <p
                className="mx-auto mb-12 max-w-3xl text-lg leading-8 md:text-xl"
                style={{
                  color: "#d8d8e6",
                }}
              >
                {description}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={primaryButton.href}
                  className="inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-pink-600 to-fuchsia-600 px-8 py-4 font-semibold shadow-xl shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <Download className="h-5 w-5" />
                  {primaryButton.text}
                </Link>

                {secondaryButton && (
                  <Link
                    href={secondaryButton.href}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-white/10"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    {secondaryButton.text}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
