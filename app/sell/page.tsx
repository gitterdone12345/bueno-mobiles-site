import { Metadata } from "next";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import WaveDivider from "../components/WaveDivider";
import TrustBar from "../components/TrustBar";
import HowItWorks from "../components/HowItWorks";
import BuyerTypes from "../components/BuyerTypes";
import ByTheNumbers from "../components/ByTheNumbers";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import ServiceAreaMap from "../components/ServiceAreaMap";
import FeaturedCommunities from "../components/FeaturedCommunities";
import ComparisonTable from "../components/ComparisonTable";
import FormSection from "../components/FormSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sell Your Mobile Home for Cash | Bueno Mobiles",
  description:
    "Get a cash offer for your manufactured home in the Sacramento area. No agents, no repairs, no fees. Bueno Mobiles buys mobile homes fast.",
};

export default function SellPage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <WaveDivider color="primary" />
        <TrustBar />
        <HowItWorks />
        <WaveDivider color="accent" />
        <BuyerTypes />
        <ByTheNumbers />
        <WaveDivider color="primary" />
        <WhyUs />
        <Testimonials />
        <WaveDivider color="accent" />
        <ServiceAreaMap />
        <FeaturedCommunities />
        <ComparisonTable />
        <FormSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
