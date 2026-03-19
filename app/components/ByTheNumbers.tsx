"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 48, suffix: "hr", label: "Average Offer Turnaround" },
  { value: 0, prefix: "$", label: "Fees or Commissions", isStatic: true },
  { value: 100, suffix: "+", label: "Homes Bought & Sold" },
];

export default function ByTheNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="by-the-numbers" className="py-24 px-6 bg-brand-surface relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <StatValue stat={stat} animate={isInView} />
              <p className="text-white/60 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatValue({ stat, animate }: { stat: typeof stats[number]; animate: boolean }) {
  const count = useCountUp(stat.value, 2000, animate && !stat.isStatic);

  return (
    <div className="font-heading font-extrabold text-6xl sm:text-7xl text-brand-primary">
      {stat.prefix}
      {stat.isStatic ? stat.value : count}
      {stat.suffix}
    </div>
  );
}
