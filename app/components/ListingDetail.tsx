"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Listing } from "../buy/listings";
import { asset } from "../lib/basePath";

function formatPrice(price: number): string {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatSqft(sqft: number): string {
  return sqft.toLocaleString("en-US");
}

interface ListingDetailProps {
  listing: Listing;
  isOpen: boolean;
  onClose: () => void;
}

export default function ListingDetail({ listing, isOpen, onClose }: ListingDetailProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-x-[10%] lg:inset-y-8 z-50 overflow-hidden rounded-2xl border border-white/10 bg-brand-bg flex flex-col"
            style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,93,38,0.1)" }}
          >
            {/* Scrollable content area */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              {/* Photo gallery */}
              <div className="relative bg-brand-surface">
                {listing.photos.length > 0 ? (
                  <div className="flex overflow-x-auto gap-1 snap-x snap-mandatory scrollbar-hide">
                    {listing.photos.map((photo, i) => (
                      <div
                        key={i}
                        className="flex-none w-full sm:w-[60%] lg:w-[45%] aspect-[16/10] snap-start"
                      >
                        <img
                          src={asset(photo)}
                          alt={`${listing.address} - Photo ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[21/9] sm:aspect-[21/7] bg-gradient-to-br from-brand-surface via-brand-surface-light to-brand-surface">
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3 text-white/15">
                        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                        <span className="text-xs tracking-wider uppercase font-heading">Photo gallery coming soon</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer z-10"
                  aria-label="Close details"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Tags overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {listing.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black/50 backdrop-blur-md text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                  {listing.leaseToOwn && (
                    <span className="bg-amber-500/90 backdrop-blur-md text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg">
                      Lease to Own Available
                    </span>
                  )}
                </div>
              </div>

              {/* Detail body */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Price and address header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                        {listing.price === 0 ? "Contact for Pricing" : formatPrice(listing.price)}
                      </h2>
                      {listing.leaseToOwn && (
                        <span className="text-white/40 text-lg font-medium">OBO</span>
                      )}
                      {listing.priceReduction && (
                        <span className="text-red-400 text-sm font-heading font-bold flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                          ${(listing.priceReduction / 1000).toFixed(0)}k reduced
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-lg">
                      {listing.address}, {listing.city}, {listing.state} {listing.zip}
                    </p>
                    <p className="text-white/30 text-sm mt-1">{listing.community}</p>
                  </div>

                  {/* Quick-action buttons (top right on desktop) */}
                  <div className="flex gap-3 shrink-0">
                    {listing.zillowUrl && (
                      <a
                        href={listing.zillowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/5 border border-white/15 text-white/70 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        View on Zillow
                      </a>
                    )}
                    <a
                      href="tel:8589770977"
                      className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-heading font-bold hover:opacity-90 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Schedule a Tour
                    </a>
                  </div>
                </div>

                {/* Key stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { label: "Bedrooms", value: listing.beds, icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
                    { label: "Bathrooms", value: String(listing.baths), icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" },
                    ...(listing.sqft > 0 ? [{ label: "Sq Ft", value: formatSqft(listing.sqft), icon: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" }] : []),
                    { label: "Year Built", value: String(listing.yearBuilt), icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
                    { label: "Community", value: listing.seniorCommunity ? "55+" : "All Ages", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center"
                    >
                      <svg className="w-5 h-5 mx-auto mb-2 text-brand-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                      </svg>
                      <p className="text-white font-heading font-bold text-lg">{stat.value}</p>
                      <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">About This Home</h3>
                  <p className="text-white/60 leading-relaxed">{listing.description}</p>
                </div>

                {/* Features list - two columns */}
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-4">Features &amp; Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {listing.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-sm">
                        <svg className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community amenities */}
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-4">Community Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium px-4 py-2 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lot rent callout */}
                <div className="bg-brand-primary/[0.06] border border-brand-primary/15 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/80 font-heading font-bold text-sm mb-1">About Lot Rent</p>
                      <p className="text-white/50 text-sm leading-relaxed">{listing.lotRentNote}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 pb-4">
                  <a
                    href="tel:8589770977"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-3.5 rounded-xl text-sm font-heading font-bold hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Schedule a Tour — 858-977-0977
                  </a>
                  <a
                    href="mailto:hello@expressionhomes.com"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white/70 hover:text-white hover:bg-white/10 py-3.5 rounded-xl text-sm font-heading font-bold transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Email Us
                  </a>
                  {listing.zillowUrl && (
                    <a
                      href={listing.zillowUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white/70 hover:text-white hover:bg-white/10 py-3.5 px-6 rounded-xl text-sm font-heading font-bold transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Zillow
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
