"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Home",
    description: "Fill out a quick form or give us a call. We just need basic details about your manufactured home.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Get Your Cash Offer",
    description: "We'll evaluate your home and present a fair, no-obligation cash offer — usually within 48 hours.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Close On Your Timeline",
    description: "Accept your offer and pick your closing date. We handle all the paperwork. Get paid fast.",
    icon: "✅",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Simple. Fast. Transparent.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Selling your mobile home has never been easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                boxShadow: "0 0 30px rgba(232,93,38,0.8), 0 0 60px rgba(232,93,38,0.6), 0 0 120px rgba(232,93,38,0.4), inset 0 0 30px rgba(232,93,38,0.1)",
                scale: 1.08,
                borderColor: "rgba(232,93,38,0.8)",
                backgroundColor: "rgba(232,93,38,0.15)",
                transition: { duration: 0.15 },
              }}
              className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-150"
            >
              <div className="relative z-10">
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
