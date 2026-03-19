"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "How is Bueno Mobiles different from a real estate agent?",
    a: "We're direct buyers — not agents. There are no commissions, no open houses, and no waiting months for a buyer. We make you a cash offer and close quickly.",
  },
  {
    q: "Do I need to make repairs before selling?",
    a: "No. We buy manufactured homes in any condition. Sell it exactly as it is.",
  },
  {
    q: "How quickly can I receive an offer?",
    a: "Most sellers receive a cash offer within 48 hours of contacting us.",
  },
  {
    q: "Is there any cost or obligation?",
    a: "Getting an offer is completely free. You're under no obligation to accept.",
  },
  {
    q: "What types of mobile homes do you buy?",
    a: "We buy single-wide and double-wide manufactured homes in parks or on land throughout the Sacramento area.",
  },
  {
    q: "How long does closing take?",
    a: "Closings can happen in as little as 7 days, or on whatever timeline works for you.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-heading font-bold hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="text-brand-accent text-xl ml-4 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-white/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-6 bg-brand-bg" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl text-white text-center mb-12"
        >
          Common Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
