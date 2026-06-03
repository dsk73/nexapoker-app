"use client";

import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  content: string[];
  columns?: 1 | 2;
}

export default function ContentSection({
  title,
  subtitle,
  content,
  columns = 2,
}: ContentSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto">
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
          className="mb-14 text-center"
        >
          {" "}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
            {title}{" "}
          </h2>
          {subtitle && (
            <p className="max-w-3xl mx-auto text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          )}
        </motion.div>

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
          className={`grid gap-8 ${
            columns === 2 ? "lg:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {content.map((paragraph, index) => (
            <div
              key={index}
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <p className="text-slate-700 leading-8 text-lg">{paragraph}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
