"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Join Telegram",
    desc: "Click on 'Join Telegram' and enter our official Telegram channel to begin.",
    image: "/images/step1.png",
  },
  {
    title: "Contact Our Team",
    desc: "Message our support team and get instant assistance for account setup.",
    image: "/images/step2.png",
  },
  {
    title: "Deposit Funds",
    desc: "Make a secure deposit through our Telegram system and receive balance instantly.",
    image: "/images/step3.png",
  },
  {
    title: "Get Rakebacks",
    desc: "Unlock exciting rakeback rewards and weekly cashback benefits automatically.",
    image: "/images/step4.png",
  },
  {
    title: "Get Bot Assistance",
    desc: "Use our automated Telegram bot for quick support, deposits, and account help.",
    image: "/images/step5.png",
  },
  {
    title: "Start Playing",
    desc: "Join tables & tournaments and start winning real money games instantly.",
    image: "/images/step6.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            How It <span className="text-pink-600">Works</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Get started in just a few simple steps and begin your poker journey
            instantly with secure deposits, rakebacks, and 24/7 assistance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  priority={i < 3}
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* STEP */}
                <div className="text-pink-600 font-semibold text-xs mb-2 uppercase tracking-[0.2em]">
                  Step {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://t.me/nexapoker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            Join Telegram Now
          </a>
        </div>
      </div>
    </section>
  );
}
