"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    image: "/images/user1.jpg",
    review: "Best poker experience I’ve had. Fast payouts and smooth gameplay.",
  },
  {
    name: "Amit Verma",
    image: "/images/user2.jpg",
    review: "Very easy to use and great support. Highly recommended platform.",
  },
  {
    name: "Sneha Patel",
    image: "/images/user3.jpg",
    review: "Love the bonuses and quick withdrawals. Feels very premium.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-[#0a0018]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-pink-600/15 blur-[120px] -top-25 -right-25" />
        <div className="absolute w-75 h-75 bg-purple-600/15 blur-[120px] -bottom-25 -left-25" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white!">What Players </span>
          <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Say
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <p className="text-white! max-w-xl mx-auto mb-10 opacity-80 text-sm md:text-base">
          Trusted by thousands of players across the country.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-[#0f001f] border border-white/10 rounded-xl p-5 text-left shadow-sm transition"
            >
              {/* USER */}
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover border border-white/20"
                />

                <div>
                  <h4 className="text-white! font-semibold text-sm">
                    {item.name}
                  </h4>

                  <div className="text-yellow-500 text-xs">★★★★★</div>
                </div>
              </div>

              {/* REVIEW */}
              <p className="text-white! text-sm leading-normal opacity-90">
                {item.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
