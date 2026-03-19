"use client";
import { motion } from "framer-motion";
import { asset } from "../lib/basePath";

const trustBadges = ["✓ $0 Fees", "✓ Sell As-Is", "✓ Fast Closing"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-bg via-[#1a0a2e] to-[#0a1628]">
      {/* AI-generated hero background with Ken Burns flyover */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-[-30%] animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url('${asset('/hero-bg.png')}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-brand-bg/70" />
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="animate-float-1 absolute top-[-100px] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,93,38,0.35) 0%, transparent 70%)" }} />
        <div className="animate-float-2 absolute bottom-[-50px] left-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,156,219,0.25) 0%, transparent 70%)" }} />
        <div className="animate-float-3 absolute top-[40%] right-[35%] w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,77,30,0.2) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-[2] max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Single glass panel wrapping all hero content */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12"
          style={{ boxShadow: "0 0 80px rgba(232,93,38,0.15)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — headline + trust */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-brand-accent uppercase tracking-[0.2em] text-sm font-heading font-bold mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
                Sacramento Area Mobile Home Experts
              </p>
              <h1
                className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)" }}
              >
                Get a Cash Offer<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b87aff] via-[#a06cf0] to-brand-accent" style={{ filter: "drop-shadow(0 2px 15px rgba(232,93,38,0.7))" }}>
                  for Your Mobile Home
                </span>
              </h1>
              <p className="text-white text-lg mb-8 leading-relaxed max-w-lg" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}>
                No agents. No repairs. No fees. Tell us about your mobile home and receive a competitive cash offer within 48 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-brand-primary/20 border border-brand-primary/30 text-white text-sm px-4 py-2 rounded-full font-bold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — form panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8"
                style={{ boxShadow: "0 0 40px rgba(232,93,38,0.15)" }}>
                <h2 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Get Your Free Cash Offer
                </h2>
                <p className="text-white/50 text-sm mb-6">Takes less than 2 minutes. No obligation.</p>

                <div id="hero-form" className="space-y-4">
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

                <p className="text-white/30 text-xs mt-4 text-center">
                  🔒 We respect your privacy. Your info is never sold.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
