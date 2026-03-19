"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { asset } from "./lib/basePath";

const cards = [
  {
    title: "Sell Your Home",
    subtitle: "Get a fast cash offer",
    description:
      "We buy manufactured homes in any condition. No agents, no repairs, no fees. Get a competitive cash offer within 48 hours.",
    href: "/sell",
    cta: "Get My Cash Offer",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    gradient: "from-brand-primary/20 to-brand-primary/5",
    border: "border-brand-primary/30 hover:border-brand-primary/60",
    glow: "hover:shadow-[0_0_60px_rgba(232,93,38,0.3)]",
  },
  {
    title: "Buy a Home",
    subtitle: "Browse available listings",
    description:
      "Find quality manufactured homes for sale in the Sacramento area. New and pre-owned homes in 55+ communities.",
    href: "/buy",
    cta: "Browse Homes",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    gradient: "from-brand-accent/20 to-brand-accent/5",
    border: "border-brand-accent/30 hover:border-brand-accent/60",
    glow: "hover:shadow-[0_0_60px_rgba(45,156,219,0.3)]",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-bg via-[#0d1a28] to-[#0a1520]">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-[-30%] animate-ken-burns bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${asset("/hero-bg.png")}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-bg/60 to-brand-bg/90" />
        </div>

        {/* Glow orbs */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div
            className="animate-float-1 absolute top-[-100px] right-[10%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(232,93,38,0.2) 0%, transparent 70%)" }}
          />
          <div
            className="animate-float-2 absolute bottom-[-50px] left-[5%] w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(45,156,219,0.15) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-[2] max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-brand-accent uppercase tracking-[0.2em] text-sm font-heading font-bold mb-4">
              Sacramento Area
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Buy & Sell<br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#f0854a] to-brand-accent"
                style={{ filter: "drop-shadow(0 2px 15px rgba(232,93,38,0.5))" }}
              >
                Manufactured Homes
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Whether you&apos;re looking to sell your mobile home for cash or find your next home,
              Bueno Mobiles is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              >
                <Link
                  href={card.href}
                  className={`block bg-gradient-to-b ${card.gradient} border ${card.border} ${card.glow} backdrop-blur-sm rounded-3xl p-10 transition-all duration-300 group`}
                >
                  <div className="text-white/80 group-hover:text-white transition-colors mb-4">
                    {card.icon}
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl text-white mb-2">
                    {card.title}
                  </h2>
                  <p className="text-brand-accent text-sm font-heading font-bold mb-4">
                    {card.subtitle}
                  </p>
                  <p className="text-white/50 leading-relaxed mb-8">
                    {card.description}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-6 py-3 rounded-lg font-heading font-bold text-sm group-hover:opacity-90 transition-opacity">
                    {card.cta} →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
