"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I start playing on Nexa Poker?",
    answer:
      "Click on Join Telegram, connect with our team, complete a quick setup, make your first deposit, and start playing cash games and tournaments instantly.",
  },
  {
    question: "How do deposits work?",
    answer:
      "Deposits are handled securely through our Telegram support team. Your balance is credited quickly once the payment is confirmed.",
  },
  {
    question: "How fast are withdrawals?",
    answer:
      "Most withdrawals are processed within minutes. Our support team ensures fast and smooth payouts for all eligible players.",
  },
  {
    question: "Can I play on mobile devices?",
    answer:
      "Yes. Nexa Poker supports Android and iPhone devices, allowing you to enjoy poker anytime and anywhere.",
  },
  {
    question: "Do you offer poker tournaments?",
    answer:
      "Yes. Players can participate in regular tournaments, cash games, leaderboard promotions, and special events throughout the week.",
  },
  {
    question: "What bonuses are available?",
    answer:
      "Players can enjoy first deposit bonuses, weekly rakeback rewards, special promotions, and exclusive Telegram offers.",
  },
  {
    question: "Is Nexa Poker safe?",
    answer:
      "Yes. Nexa Poker provides secure gameplay, trusted payment processing, and dedicated player support for a reliable experience.",
  },
  {
    question: "Can beginners play?",
    answer:
      "Absolutely. Whether you are new to poker or an experienced grinder, our team can help you get started quickly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-6 pt-24 pb-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-5 text-4xl font-black text-slate-900 md:text-6xl">
            Everything About{" "}
            <span
              style={{
                color: "#cd114e",
              }}
            >
              Nexa Poker
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-slate-500 text-lg">
            Everything you need to know before you start playing.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#cd114e]/20 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="pr-6 text-lg font-semibold text-slate-900">
                    {item.question}
                  </span>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                      isOpen ? "text-white" : "bg-slate-100 text-slate-600"
                    }`}
                    style={
                      isOpen
                        ? {
                            backgroundColor: "#cd114e",
                          }
                        : {}
                    }
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="max-w-3xl border-t border-slate-100 px-7 py-6 leading-8 text-slate-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
