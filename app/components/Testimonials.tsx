"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Bueno Mobiles gave me a fair cash offer and closed in under two weeks. Easiest home sale I've ever had.",
    name: "Maria R.",
    city: "Sacramento, CA",
  },
  {
    quote: "I was worried nobody would buy my older mobile home, but they made an offer the same day I called. No hassle at all.",
    name: "James T.",
    city: "Citrus Heights, CA",
  },
  {
    quote: "They handled all the paperwork and I didn't have to fix a thing. Highly recommend Bueno Mobiles.",
    name: "Linda K.",
    city: "Elk Grove, CA",
  },
  {
    quote: "Sold my doublewide in 10 days. The process was incredibly simple. Best decision I've made.",
    name: "Robert M.",
    city: "Roseville, CA",
  },
  {
    quote: "After months trying to sell on my own, Bueno Mobiles got it done in a week. Wish I'd called sooner.",
    name: "Patricia S.",
    city: "Folsom, CA",
  },
  {
    quote: "Professional, fair, and fast. They made selling my manufactured home completely stress-free.",
    name: "David W.",
    city: "Rancho Cordova, CA",
  },
  {
    quote: "I needed to relocate fast for work. Bueno Mobiles made it possible to sell my home in under a week.",
    name: "Sarah L.",
    city: "Antioch, CA",
  },
  {
    quote: "Great experience from start to finish. Fair price and they closed on my timeline. Couldn't ask for more.",
    name: "Michael C.",
    city: "Davis, CA",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the testimonials for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-brand-surface-light overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl text-white text-center"
        >
          What Sellers Are Saying
        </motion.h2>
      </div>

      {/* Auto-scrolling testimonial strip */}
      <div className="relative">
        <div className="flex animate-testimonial-scroll">
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 w-[350px] sm:w-[400px] mx-3"
            >
              <div className="bg-white/8 border border-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/15 hover:border-brand-primary/40 hover:shadow-[0_0_40px_rgba(232,93,38,0.3)] transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-brand-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-heading font-bold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-surface-light to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-surface-light to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
