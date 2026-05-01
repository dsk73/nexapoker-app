"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I start playing?",
    answer:
      "Click on 'Join Telegram', connect with our team, and you will get complete guidance to start playing instantly.",
  },
  {
    question: "How do deposits work?",
    answer:
      "Deposits are handled securely through our Telegram system. You will get payment details from our team and your balance will be updated instantly.",
  },
  {
    question: "How do withdrawals work?",
    answer:
      "Withdrawals are processed quickly via our Telegram support. Most payouts are completed within minutes.",
  },
  {
    question: "Is this platform safe?",
    answer:
      "Yes, we operate with a trusted player base and secure systems to ensure fair gameplay and safe transactions.",
  },
  {
    question: "Do I need experience to play?",
    answer:
      "No, beginners are welcome. Our team will guide you and you can start easily even if you are new to poker.",
  },
  {
    question: "What bonuses do I get?",
    answer:
      "You get a 1st deposit bonus, weekly rakeback, and exclusive rewards using our bonus code.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-6">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Everything you need to know before getting started.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl bg-white overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900">
                  {item.question}
                </span>

                <span className="text-pink-600 text-lg">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
