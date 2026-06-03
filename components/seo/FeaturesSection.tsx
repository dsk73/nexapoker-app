"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Wallet,
  Smartphone,
  Gift,
  ShieldCheck,
  Star,
} from "lucide-react";

import { FeaturesSectionProps } from "@/data/types";

const iconMap = {
  Trophy,
  Wallet,
  Smartphone,
  Gift,
  ShieldCheck,
  Star,
};

export default function FeaturesSection({
  title,
  subtitle,
  features,
}: FeaturesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-pink-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon =
              iconMap[feature.icon as keyof typeof iconMap] || Trophy;

            return (
              <motion.div
                key={feature.title}
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
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-pink-200 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="leading-8 text-slate-600">
                    {feature.description}
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
