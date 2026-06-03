"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { InternalLinkItem } from "@/data/types";

interface InternalLinksSectionProps {
  title?: string;
  subtitle?: string;
  links: InternalLinkItem[];
}

export default function InternalLinksSection({
  title = "Explore More",
  subtitle,
  links,
}: InternalLinksSectionProps) {
  return (
    <section className="py-24 px-6 bg-slate-50">
      {" "}
      <div className="max-w-7xl mx-auto">
        {" "}
        <div className="text-center mb-16">
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
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
                y: -6,
              }}
            >
              <Link
                href={link.href}
                className="group block h-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {link.title}
                </h3>

                <p className="leading-8 text-slate-600 mb-6">
                  {link.description}
                </p>

                <div className="flex items-center gap-2 font-semibold text-pink-600">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
