"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BASE_PATH } from "../lib/basePath";

const buyers = [
  {
    title: "Single-Wide Homes",
    image: `${BASE_PATH}/buyer-renovator.png`,
    description: "Any age, any condition. We buy single-wide manufactured homes in parks or on private land.",
  },
  {
    title: "Double-Wide Homes",
    image: `${BASE_PATH}/buyer-investor.png`,
    description: "Spacious double-wide homes are always in demand. Get a competitive cash offer today.",
  },
  {
    title: "Any Condition",
    image: `${BASE_PATH}/buyer-operator.png`,
    description: "Fixer-uppers, move-in ready, or anything in between. We buy homes as-is.",
  },
];

export default function BuyerTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="buyer-types" className="py-24 px-6 bg-brand-surface-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            What We Buy
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We purchase all types of manufactured homes in the Sacramento area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {buyers.map((buyer, i) => (
            <motion.div
              key={buyer.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                boxShadow: "0 0 50px rgba(232,93,38,0.5), 0 0 100px rgba(232,93,38,0.2)",
                scale: 1.05,
                borderColor: "rgba(232,93,38,0.5)",
              }}
              className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-150"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 rounded-xl overflow-hidden">
                  <img src={buyer.image} alt={buyer.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{buyer.title}</h3>
                <p className="text-white/60 leading-relaxed">{buyer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
