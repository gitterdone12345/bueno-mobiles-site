"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "../lib/basePath";

const navTabs = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img
            src={asset("/logo.png")}
            alt="Bueno Mobiles"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav tabs */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
          {navTabs.map((tab) => {
            const isActive = pathname?.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-5 py-2 rounded-md text-sm font-heading font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-primary text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:9162323031"
            className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            916-232-3031
          </a>
          <Link
            href={pathname?.startsWith("/buy") ? "/buy" : "/sell"}
            className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-heading font-bold hover:opacity-90 transition-opacity"
          >
            {pathname?.startsWith("/buy") ? "Browse Homes" : "Get My Offer"}
          </Link>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brand-bg/95 backdrop-blur-md border-b border-white/10 px-6 pb-4">
          {navTabs.map((tab) => {
            const isActive = pathname?.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 transition-colors text-sm border-b border-white/5 last:border-0 font-heading font-bold ${
                  isActive ? "text-brand-primary" : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
