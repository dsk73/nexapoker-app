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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          What Players <span className="text-pink-600">Say</span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Trusted by thousands of players across the country.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
            >
              {/* USER */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  {/* STARS */}
                  <div className="text-yellow-500 text-xs">★★★★★</div>
                </div>
              </div>

              {/* REVIEW */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
