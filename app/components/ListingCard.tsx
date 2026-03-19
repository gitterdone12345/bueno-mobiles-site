"use client";

import { motion } from "framer-motion";
import type { Listing } from "../buy/listings";
import { asset } from "../lib/basePath";

function formatPrice(price: number): string {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatSqft(sqft: number): string {
  return sqft.toLocaleString("en-US");
}

interface ListingCardProps {
  listing: Listing;
  onViewDetails?: (id: string) => void;
  index?: number;
}

export default function ListingCard({ listing, onViewDetails, index = 0 }: ListingCardProps) {
  const tagColors: Record<string, string> = {
    "New 2025": "bg-brand-accent/20 text-brand-accent border-brand-accent/30",
    "Price Reduced": "bg-red-500/15 text-red-400 border-red-400/30",
    "55+": "bg-purple-500/15 text-purple-400 border-purple-400/30",
    Renovated: "bg-emerald-500/15 text-emerald-400 border-emerald-400/30",
    "Lease to Own": "bg-amber-500/15 text-amber-400 border-amber-400/30",
    "Near BART": "bg-sky-500/15 text-sky-400 border-sky-400/30",
    "New Build": "bg-brand-accent/20 text-brand-accent border-brand-accent/30",
    Customizable: "bg-teal-500/15 text-teal-400 border-teal-400/30",
    "Financing Available": "bg-emerald-500/15 text-emerald-400 border-emerald-400/30",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col"
      style={{ boxShadow: "0 0 0 0 rgba(232,93,38,0)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 40px rgba(232,93,38,0.15), 0 0 0 1px rgba(232,93,38,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 0 rgba(232,93,38,0)";
      }}
    >
      {/* Photo area */}
      <div className="relative aspect-video overflow-hidden">
        {listing.photos.length > 0 ? (
          <img
            src={asset(listing.photos[0])}
            alt={`${listing.address} - ${listing.city}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-surface via-brand-surface-light to-brand-surface flex items-center justify-center">
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            {/* Home icon placeholder */}
            <div className="relative flex flex-col items-center gap-3 text-white/20">
              <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs tracking-wider uppercase font-heading">Photos coming soon</span>
            </div>
          </div>
        )}

        {/* Price reduction ribbon */}
        {listing.priceReduction && (
          <div className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-sm text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Reduced ${(listing.priceReduction / 1000).toFixed(0)}k
          </div>
        )}

        {/* Lease to own badge */}
        {listing.leaseToOwn && (
          <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg shadow-lg">
            Lease to Own
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Price */}
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-2xl font-heading font-extrabold text-white">
            {listing.price === 0 ? "Contact for Pricing" : formatPrice(listing.price)}
          </span>
          {listing.leaseToOwn && (
            <span className="text-white/40 text-sm font-medium">OBO</span>
          )}
        </div>

        {/* Address */}
        <p className="text-white/60 text-sm mb-3">
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-1 text-sm text-white/70 mb-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="font-medium">{listing.beds} bd</span>
          </div>
          <span className="text-white/20 mx-1">|</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <span className="font-medium">{listing.baths} ba</span>
          </div>
          {listing.sqft > 0 && (
            <>
              <span className="text-white/20 mx-1">|</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
                <span className="font-medium">{formatSqft(listing.sqft)} sqft</span>
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {listing.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-heading font-bold px-2.5 py-1 rounded-full border ${
                tagColors[tag] || "bg-white/10 text-white/60 border-white/15"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Community */}
        <p className="text-white/40 text-xs mb-2 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {listing.community}
        </p>

        {/* Lot rent notice */}
        <p className="text-white/30 text-[11px] leading-relaxed mb-5 pl-5 border-l-2 border-brand-primary/20">
          {listing.lotRentNote}
        </p>

        {/* Spacer to push CTA down */}
        <div className="mt-auto" />

        {/* CTA */}
        <button
          onClick={() => onViewDetails?.(listing.id)}
          className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-3 rounded-xl text-sm font-heading font-bold hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group/btn"
        >
          View Details
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
}
