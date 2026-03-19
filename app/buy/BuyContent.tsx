"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ListingCard from "../components/ListingCard";
import ListingDetail from "../components/ListingDetail";
import { listings } from "./listings";
import type { Listing } from "./listings";

const trustItems = [
  { icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z", label: "Financing Available" },
  { icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z", label: "55+ Communities" },
  { icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z", label: "New & Pre-owned" },
];

export default function BuyContent() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleViewDetails = useCallback((id: string) => {
    setExpandedId(id);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setExpandedId(null);
    document.body.style.overflow = "";
  }, []);

  const expandedListing: Listing | undefined = expandedId
    ? listings.find((l) => l.id === expandedId)
    : undefined;

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-[#0d1a2a] to-brand-bg" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-200px] left-[20%] w-[600px] h-[600px] rounded-full animate-float-1"
            style={{ background: "radial-gradient(circle, rgba(232,93,38,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[-100px] right-[10%] w-[400px] h-[400px] rounded-full animate-float-2"
            style={{ background: "radial-gradient(circle, rgba(45,156,219,0.1) 0%, transparent 70%)" }}
          />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-brand-accent uppercase tracking-[0.2em] text-sm font-heading font-bold mb-4">
              Sacramento Area Listings
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                New Home
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
              Quality manufactured homes in established communities. Browse our current inventory and schedule a tour today.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5"
                >
                  <svg className="w-4 h-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-white/60 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter / count bar */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-3.5"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-white/60 text-sm font-medium">
              <span className="text-white font-heading font-bold">{listings.length}</span> homes available
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <span>Sacramento &amp; East Bay</span>
          </div>
        </motion.div>
      </section>

      {/* Listings grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {listings.map((listing, i) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onViewDetails={handleViewDetails}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Don&apos;t see what you&apos;re looking for?
            </h3>
            <p className="text-white/40 text-sm mb-6">
              We source homes regularly and may have options not yet listed. Let us know what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:8589770977"
                className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-6 py-3 rounded-xl text-sm font-heading font-bold hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call 858-977-0977
              </a>
              <a
                href="mailto:hello@expressionhomes.com"
                className="flex items-center gap-2 bg-white/5 border border-white/15 text-white/70 hover:text-white px-6 py-3 rounded-xl text-sm font-heading font-bold transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detail modal */}
      {expandedListing && (
        <ListingDetail
          listing={expandedListing}
          isOpen={!!expandedId}
          onClose={handleClose}
        />
      )}
    </>
  );
}
