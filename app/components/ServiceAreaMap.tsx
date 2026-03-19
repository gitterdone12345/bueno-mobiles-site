"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BASE_PATH } from "../lib/basePath";

const counties = [
  {
    name: "Sacramento",
    description: "State capital and surrounding communities",
    mapImage: `${BASE_PATH}/counties/screenshot-6-desktop-sacramento-county.png`,
  },
  {
    name: "Placer",
    description: "Roseville, Lincoln, and Auburn",
    mapImage: `${BASE_PATH}/counties/screenshot-7-desktop-placer-county.png`,
  },
  {
    name: "El Dorado",
    description: "Folsom Lake to South Lake Tahoe",
    mapImage: `${BASE_PATH}/counties/screenshot-8-desktop-el-dorado-county.png`,
  },
  {
    name: "Yolo",
    description: "Davis, Woodland, and West Sacramento",
    mapImage: `${BASE_PATH}/counties/screenshot-9-desktop-yolo-county.png`,
  },
  {
    name: "Solano",
    description: "Fairfield, Vacaville, and Vallejo",
    mapImage: `${BASE_PATH}/counties/screenshot-10-desktop-solano-county.png`,
  },
];

export default function ServiceAreaMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service-area" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Where We Buy & Sell
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Serving mobile home owners across the Sacramento area
          </p>
        </motion.div>

        {/* Top row: 3 counties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {counties.slice(0, 3).map((county, i) => (
            <CountyCard key={county.name} county={county} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom row: 2 counties centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {counties.slice(3).map((county, i) => (
            <CountyCard key={county.name} county={county} index={i + 3} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CountyCard({ county, index, isInView }: { county: typeof counties[number]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 40px rgba(232,93,38,0.4), 0 0 80px rgba(232,93,38,0.15)",
        transition: { duration: 0.2 },
      }}
      className="relative overflow-hidden rounded-2xl border border-white/10 group cursor-pointer"
    >
      {/* County map screenshot */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={county.mapImage}
          alt={`${county.name} County map`}
          className="w-[200%] h-[200%] object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark overlay to match theme */}
        <div className="absolute inset-0 bg-brand-bg/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-heading font-extrabold text-2xl text-white mb-1" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          {county.name}
        </h3>
        <p className="text-white/60 text-sm">{county.description}</p>
        <span className="inline-block mt-3 bg-brand-accent/20 text-brand-accent text-xs px-3 py-1 rounded-full font-bold">
          We Buy & Sell Here
        </span>
      </div>
    </motion.div>
  );
}
