"use client";

import { motion } from "framer-motion";
import {
  Club,
  Spade,
  Crown,
  Target,
  Medal,
  Gem,
  Trophy,
  CheckCircle,
  Zap,
} from "lucide-react";

import { PokerFormatItem } from "@/data/types";

interface PokerFormatsSectionProps {
  title: string;
  subtitle?: string;
  formats: PokerFormatItem[];
}

const iconMap = {
  Club,
  Spade,
  Crown,
  Target,
  Medal,
  Gem,
  Trophy,
  CheckCircle,
  Zap,
};

export default function PokerFormatsSection({
  title,
  subtitle,
  formats,
}: PokerFormatsSectionProps) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-5 text-4xl font-black text-slate-900 md:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {formats.map((format, index) => {
            const Icon = iconMap[format.icon as keyof typeof iconMap] || Club;

            return (
              <motion.div
                key={format.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-pink-200 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {format.title}
                  </h3>

                  <p className="leading-8 text-slate-600">
                    {format.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
