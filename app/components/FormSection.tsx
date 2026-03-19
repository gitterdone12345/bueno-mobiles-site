"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-brand-surface" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Ready to Get Your<br />Cash Offer?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Takes less than 2 minutes. No obligation.
          </p>
          <div
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10"
            style={{ boxShadow: "0 0 60px rgba(232,93,38,0.3)" }}
          >
            <div id="cta-form" className="space-y-4">
              <p className="text-white/60 text-center">Contact us to get started</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 w-full outline-none focus:border-brand-primary/50 transition-colors" />
                <input type="tel" placeholder="Phone Number" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 w-full outline-none focus:border-brand-primary/50 transition-colors" />
                <input type="email" placeholder="Email" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 w-full outline-none focus:border-brand-primary/50 transition-colors" />
                <input type="text" placeholder="Property Address" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 w-full outline-none focus:border-brand-primary/50 transition-colors" />
              </div>
              <button className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white font-heading font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-lg">
                Get My Cash Offer
              </button>
            </div>
            <p className="text-white/30 text-xs mt-6 text-center">
              🔒 We respect your privacy. Your info is never sold or shared.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
