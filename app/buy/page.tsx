import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BuyContent from "./BuyContent";

export const metadata: Metadata = {
  title: "Manufactured Homes for Sale | Bueno Mobiles",
  description:
    "Browse quality manufactured homes for sale in the Sacramento area. New and pre-owned mobile homes in 55+ communities.",
};

export default function BuyPage() {
  return (
    <>
      <NavBar />
      <main>
        <BuyContent />
      </main>
      <Footer />
    </>
  );
}
