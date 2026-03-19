"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BASE_PATH } from "../lib/basePath";

const communities = [
  { name: "Sunrise Mobile Home Park", address: "Citrus Heights, CA", image: `${BASE_PATH}/communities/screenshot-9-desktop-sunrise-mhp.png` },
  { name: "Big Oak Mobile Home Park", address: "Citrus Heights, CA", image: `${BASE_PATH}/communities/screenshot-10-desktop-big-oak-mhp.png` },
  { name: "Vista Diablo MHP", address: "Antioch, CA", image: `${BASE_PATH}/communities/screenshot-11-desktop-vista-diablo-mhp.png` },
  { name: "Sylvan Mobile Home Park", address: "Citrus Heights, CA", image: `${BASE_PATH}/communities/screenshot-12-desktop-sylvan-mhp.png` },
  { name: "Auburn Oaks Mobile Home Park", address: "Citrus Heights, CA", image: `${BASE_PATH}/communities/screenshot-13-desktop-auburn-oaks-mhp.png` },
  { name: "Rancho Cordova MHP", address: "Rancho Cordova, CA", image: `${BASE_PATH}/communities/screenshot-14-desktop-rancho-cordova-mhp.png` },
  { name: "Elk Grove Mobile Estates", address: "Elk Grove, CA", image: `${BASE_PATH}/communities/screenshot-15-desktop-elk-grove-mhp.png` },
  { name: "Roseville Manufactured Home Community", address: "Roseville, CA", image: `${BASE_PATH}/communities/screenshot-16-desktop-roseville-mhp.png` },
];

export default function FeaturedCommunities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="communities" className="py-24 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Communities We Serve
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We actively buy and sell mobile homes in these Sacramento-area communities and many more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {communities.map((community, i) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                boxShadow: "0 0 40px rgba(232,93,38,0.4), 0 0 80px rgba(232,93,38,0.15)",
                scale: 1.03,
                rotateY: 5,
                rotateX: -3,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-shadow group"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-sm mb-1 group-hover:text-brand-accent transition-colors">
                  {community.name}
                </h3>
                <p className="text-white/40 text-xs mb-3">{community.address}</p>
                <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs px-3 py-1 rounded-full font-medium">
                  We Buy & Sell Here
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 text-white/50 text-lg font-heading font-bold"
        >
          And More!
        </motion.p>
      </div>
    </section>
  );
}
