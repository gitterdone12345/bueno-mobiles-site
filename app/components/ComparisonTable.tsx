"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { asset } from "../lib/basePath";

const rows = [
  { criteria: "Time to sell", us: "~7 days", agent: "3-6 months", fsbo: "6-12 months", usIcon: "⚡" },
  { criteria: "Fees / Commission", us: "$0", agent: "5-6%", fsbo: "$0 but your time", usIcon: "✓" },
  { criteria: "Repairs needed", us: "None", agent: "Usually", fsbo: "Usually", usIcon: "✓" },
  { criteria: "Effort", us: "Submit a form, we handle the rest", agent: "Showings, negotiations, paperwork", fsbo: "Everything yourself", usIcon: "✓" },
  { criteria: "Number of offers", us: "Competitive", agent: "Varies", fsbo: "Varies", usIcon: "🔥" },
  { criteria: "Certainty", us: "Cash, guaranteed", agent: "Financing may fall through", fsbo: "No guarantees", usIcon: "✓" },
];

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="compare" className="relative py-24 px-6 overflow-hidden">
      {/* Scrolling background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-30%] animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url('${asset('/hero-bg.png')}')` }}
        />
        <div className="absolute inset-0 bg-brand-surface-light/85" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            See How We Compare
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            The fastest, easiest way to sell your mobile home.
          </p>
        </motion.div>

        {/* Desktop: Comparison cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {/* Bueno Mobiles — Hero column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-b from-brand-primary/20 to-brand-primary/5 border-2 border-brand-primary/50 rounded-3xl p-8 relative overflow-hidden"
            style={{ boxShadow: "0 0 60px rgba(232,93,38,0.25)" }}
          >
            <div className="absolute top-0 left-0 right-0 bg-brand-primary py-2 text-center">
              <span className="text-white text-xs font-heading font-bold uppercase tracking-wider">Recommended</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white mt-6 mb-8">Bueno Mobiles</h3>
            {rows.map((row) => (
              <div key={row.criteria} className="mb-6 last:mb-0">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{row.criteria}</p>
                <p className="text-brand-accent font-heading font-bold text-lg">{row.usIcon} {row.us}</p>
              </div>
            ))}
          </motion.div>

          {/* Traditional Agent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="font-heading font-bold text-xl text-white/60 mb-8 mt-6">Traditional Agent</h3>
            {rows.map((row) => (
              <div key={row.criteria} className="mb-6 last:mb-0">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">{row.criteria}</p>
                <p className="text-white/40 text-base">{row.agent}</p>
              </div>
            ))}
          </motion.div>

          {/* FSBO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="font-heading font-bold text-xl text-white/60 mb-8 mt-6">FSBO</h3>
            {rows.map((row) => (
              <div key={row.criteria} className="mb-6 last:mb-0">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">{row.criteria}</p>
                <p className="text-white/40 text-base">{row.fsbo}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: Stacked comparison */}
        <div className="md:hidden space-y-4" aria-hidden="true">
          {rows.map((row, i) => (
            <motion.div
              key={row.criteria}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">{row.criteria}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-brand-primary/15 border border-brand-primary/30 rounded-lg px-4 py-2">
                  <span className="text-white/50 text-xs">Bueno Mobiles</span>
                  <span className="text-brand-accent font-bold text-sm">{row.us}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-white/30 text-xs">Agent</span>
                  <span className="text-white/30 text-sm">{row.agent}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-white/30 text-xs">FSBO</span>
                  <span className="text-white/30 text-sm">{row.fsbo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
