"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Secure Platform",
    desc: "Advanced security ensures safe gameplay and transactions.",
    icon: "/icons/secure.svg",
  },
  {
    title: "Fast Withdrawals",
    desc: "Get your winnings instantly without delays.",
    icon: "/icons/fast.svg",
  },
  {
    title: "24/7 Support",
    desc: "We are always here to help you anytime.",
    icon: "/icons/support.svg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Why Choose <span className="text-pink-600">NexaPoker</span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Experience premium poker gaming with speed, security, and reliability.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
