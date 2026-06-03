"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/data/types";

interface TimelineSectionProps {
  title: string;
  subtitle?: string;
  steps: TimelineItem[];
}

export default function TimelineSection({
  title,
  subtitle,
  steps,
}: TimelineSectionProps) {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      {" "}
      <div className="max-w-7xl mx-auto">
        {" "}
        <div className="text-center mb-20">
          {" "}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
            {title}{" "}
          </h2>
          {subtitle && (
            <p className="max-w-3xl mx-auto text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-xl shadow-pink-500/20">
                  <span className="text-xl font-black">{step.step}</span>
                </div>

                <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="leading-8 text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
