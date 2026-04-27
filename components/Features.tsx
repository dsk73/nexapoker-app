"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function Features() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose NexaPoker
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Fast Withdrawals",
            desc: "Get your winnings instantly with our lightning-fast payout system.",
          },
          {
            title: "Secure Platform",
            desc: "Your data and transactions are protected with top-level security.",
          },
          {
            title: "24/7 Support",
            desc: "Our team is always ready to help you anytime, anywhere.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
