"use client";

import { motion } from "framer-motion";
import { StatItem } from "@/data/types";

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
}

export default function StatsSection({
  title,
  subtitle,
  stats,
}: StatsSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
                {title}{" "}
              </h2>
            )}

            {subtitle && (
              <p className="max-w-3xl mx-auto text-lg leading-8 text-slate-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {item.value}
                </div>

                <div className="mt-3 text-sm md:text-base font-medium text-slate-600">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
