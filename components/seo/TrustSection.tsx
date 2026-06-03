"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { TrustSectionProps } from "@/data/types";

export default function TrustSection({
  title,
  subtitle,
  items,
}: TrustSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      {" "}
      <div className="max-w-6xl mx-auto">
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
          className="text-center mb-16"
        >
          {" "}
          <div className="mb-6 flex justify-center">
            {" "}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-purple-600 shadow-xl shadow-pink-500/20">
              {" "}
              <ShieldCheck className="h-10 w-10 text-white" />{" "}
            </div>{" "}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-3xl mx-auto text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
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
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="h-6 w-6 text-pink-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="leading-8 text-slate-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
