import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buy & Sell Manufactured Homes | Bueno Mobiles",
  description:
    "Buy or sell manufactured homes in the Sacramento area. Bueno Mobiles offers cash for your mobile home and sells quality manufactured homes.",
  openGraph: {
    title: "Buy & Sell Manufactured Homes | Bueno Mobiles",
    description:
      "Buy or sell manufactured homes in the Sacramento area. Bueno Mobiles offers cash for your mobile home and sells quality manufactured homes.",
    siteName: "Bueno Mobiles",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-white antialiased font-body">
        {children}
      </body>
    </html>
  );
}
