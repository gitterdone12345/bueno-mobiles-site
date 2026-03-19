"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { asset } from "../lib/basePath";

const bullets = [
  "No real estate agents or commissions",
  "Sell your home as-is — no repairs needed",
  "Zero fees, zero hidden costs",
  "Fair, competitive cash offer",
  "Close in as little as 7 days, or on your schedule",
  "We handle all the paperwork",
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Scrolling background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-30%] animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url('${asset('/hero-bg.png')}')` }}
        />
        <div className="absolute inset-0 bg-brand-surface/85" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-8 leading-tight">
            Why Sellers Choose<br />
            <span className="text-brand-primary">Bueno Mobiles</span>
          </h2>
          <ul className="space-y-4">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-3 text-white/80"
              >
                <span className="text-brand-accent font-bold text-lg mt-0.5">✓</span>
                <span className="text-lg">{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-brand-primary/30"
            style={{ boxShadow: "0 0 60px rgba(232,93,38,0.25)" }}>
            <img
              src={asset('/hero-bg.png')}
              alt="Sacramento area mobile home community"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
