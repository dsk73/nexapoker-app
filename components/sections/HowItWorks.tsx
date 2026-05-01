"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Join Telegram",
    desc: "Click on 'Join Telegram' and enter our official channel.",
    image: "/images/step1.png",
  },
  {
    title: "Contact Our Team",
    desc: "Message our support team and get instant assistance to set up your account.",
    image: "/images/step2.png",
  },
  {
    title: "Deposit Funds",
    desc: "Make a secure deposit through our Telegram system and get your balance instantly.",
    image: "/images/step3.png",
  },
  {
    title: "Start Playing",
    desc: "Join tables & tournaments and start winning real money.",
    image: "/images/step4.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          How It <span className="text-pink-600">Works</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Get started in just a few simple steps and begin your poker journey
          instantly.
        </p>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-6 text-left bg-gray-50 border border-gray-200 rounded-2xl p-6"
            >
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={120}
                  height={120}
                  className="object-contain rounded-lg mx-auto md:mx-0"
                />
              </div>

              {/* TEXT */}
              <div>
                <div className="text-pink-600 font-semibold mb-1">
                  Step {i + 1}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://t.me/nexapoker"
            target="_blank"
            className="inline-block px-8 py-4 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-sm"
          >
            Join Telegram Now
          </a>
        </div>
      </div>
    </section>
  );
}
