"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Join Telegram",
    desc: "Enter our official Telegram channel to begin.",
    image: "/images/step1.png",
  },
  {
    title: "Contact Our Team",
    desc: "Get instant assistance for account setup.",
    image: "/images/step2.png",
  },
  {
    title: "Deposit Funds",
    desc: "Secure deposits with instant balance updates.",
    image: "/images/step3.png",
  },
  {
    title: "Get Rakeback",
    desc: "Unlock weekly cashback and rewards.",
    image: "/images/step4.png",
  },
  {
    title: "Bot Assistance",
    desc: "Fast support through our Telegram bot.",
    image: "/images/step5.png",
  },
  {
    title: "Start Playing",
    desc: "Join tables and tournaments instantly.",
    image: "/images/step6.png",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-6 py-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-125 w-125 rounded-full bg-pink-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-pink-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-6xl">
            How It{" "}
            <span
              style={{
                color: "#cd114e",
              }}
            >
              Works
            </span>
          </h2>

          <p className="text-slate-500 text-lg">
            Start playing in just a few simple steps.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{
                opacity: 0,
                y: 30,
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
                y: -8,
              }}
              className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#cd114e]/20 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
