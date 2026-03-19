import Link from "next/link";
import { asset } from "../lib/basePath";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <img
              src={asset('/logo.png')}
              alt="Bueno Mobiles"
              className="h-9 w-auto object-contain mb-3"
            />
            <p className="text-white/40 text-sm">Sacramento&apos;s Mobile Home Dealer</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors w-fit">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors w-fit">
              Terms of Service
            </Link>
          </div>

          <div className="space-y-1 text-sm text-white/50">
            <p className="text-white/70 font-medium">Bueno Mobiles</p>
            <a href="mailto:hello@mail.buenomobiles.com" className="hover:text-white transition-colors block">
              hello@mail.buenomobiles.com
            </a>
            <a href="tel:9162323031" className="hover:text-white transition-colors block">
              916-232-3031
            </a>
            <p>CA Dealer License: [placeholder]</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
          © 2026 Bueno Mobiles. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
