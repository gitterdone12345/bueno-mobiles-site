import { render, screen } from "@testing-library/react";
import NavBar from "../app/components/NavBar";
import HeroSection from "../app/components/HeroSection";

describe("NavBar", () => {
  it("renders logo image", () => {
    render(<NavBar />);
    expect(screen.getByRole("img", { name: /expression homes/i })).toBeInTheDocument();
  });

  it("renders phone number link", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: /858-977-0977/i })).toHaveAttribute(
      "href",
      "tel:8589770977"
    );
  });

  it("renders CTA button", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: /get my offers/i })).toBeInTheDocument();
  });

  it("renders navigation anchor links", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: /how it works/i })).toHaveAttribute("href", "#how-it-works");
    expect(screen.getByRole("link", { name: /communities/i })).toHaveAttribute("href", "#communities");
    expect(screen.getByRole("link", { name: /faq/i })).toHaveAttribute("href", "#faq");
  });

  it("renders hamburger button on mobile", () => {
    render(<NavBar />);
    expect(screen.getByRole("button", { name: /toggle navigation/i })).toBeInTheDocument();
  });
});

describe("HeroSection", () => {
  it("renders main headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent(/get 2 cash offers/i);
  });

  it("renders hero-form placeholder", () => {
    render(<HeroSection />);
    expect(document.getElementById("hero-form")).toBeInTheDocument();
  });

  it("renders trust badges", () => {
    render(<HeroSection />);
    expect(screen.getByText(/\$0 fees/i)).toBeInTheDocument();
  });

  it("renders hero background image", () => {
    render(<HeroSection />);
    const bgDiv = document.querySelector(".animate-ken-burns");
    expect(bgDiv).toBeInTheDocument();
  });
});

import TrustBar from "../app/components/TrustBar";

describe("TrustBar", () => {
  it("renders trust signals", () => {
    render(<TrustBar />);
    expect(screen.getAllByText(/\$0 in Fees/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2 Offers in 48 Hours/i).length).toBeGreaterThan(0);
  });
});

import HowItWorks from "../app/components/HowItWorks";

describe("HowItWorks", () => {
  it("renders 3 step cards", () => {
    render(<HowItWorks />);
    expect(screen.getByText(/submit your info/i)).toBeInTheDocument();
    expect(screen.getByText(/we find you buyers/i)).toBeInTheDocument();
    expect(screen.getByText(/pick your best offer/i)).toBeInTheDocument();
  });
});

import WhyUs from "../app/components/WhyUs";

describe("WhyUs", () => {
  it("renders section heading", () => {
    render(<WhyUs />);
    expect(screen.getByText(/why sellers choose/i)).toBeInTheDocument();
  });

  it("renders key value props", () => {
    render(<WhyUs />);
    expect(screen.getByText(/no real estate agents/i)).toBeInTheDocument();
    expect(screen.getByText(/2 competing offers/i)).toBeInTheDocument();
  });
});

import Testimonials from "../app/components/Testimonials";

describe("Testimonials", () => {
  it("renders 3 testimonial cards", () => {
    render(<Testimonials />);
    // Carousel doubles items for seamless scroll — use getAllByText
    expect(screen.getAllByText(/Maria R/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/James T/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Linda K/).length).toBeGreaterThanOrEqual(1);
  });
});

import FormSection from "../app/components/FormSection";

describe("FormSection", () => {
  it("renders cta-form placeholder", () => {
    render(<FormSection />);
    expect(document.getElementById("cta-form")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<FormSection />);
    expect(screen.getByText(/ready to find out/i)).toBeInTheDocument();
  });
});

import FAQ from "../app/components/FAQ";

describe("FAQ", () => {
  it("renders 6 FAQ items", () => {
    render(<FAQ />);
    expect(screen.getAllByRole("button").length).toBe(6);
  });

  it("answer is not rendered by default (accordion closed)", () => {
    render(<FAQ />);
    // AnimatePresence removes the element from DOM when closed
    expect(screen.queryByText(/no commissions/i)).not.toBeInTheDocument();
  });
});

import Footer from "../app/components/Footer";

describe("Footer", () => {
  it("renders contact email", () => {
    render(<Footer />);
    expect(screen.getByText(/hello@expressionhomes.com/i)).toBeInTheDocument();
  });

  it("renders privacy policy link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy");
  });

  it("renders terms of service link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /terms of service/i })).toHaveAttribute("href", "/terms");
  });
});

import WaveDivider from "../app/components/WaveDivider";

describe("WaveDivider", () => {
  it("renders an SVG element", () => {
    const { container } = render(<WaveDivider color="purple" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies flip class when flipped", () => {
    const { container } = render(<WaveDivider color="teal" flip />);
    expect(container.firstChild).toHaveClass("rotate-180");
  });
});

import BuyerTypes from "../app/components/BuyerTypes";

describe("BuyerTypes", () => {
  it("renders section heading", () => {
    render(<BuyerTypes />);
    expect(screen.getByText(/who buys your home/i)).toBeInTheDocument();
  });

  it("renders 3 buyer type cards", () => {
    render(<BuyerTypes />);
    expect(screen.getByText(/cash renovators/i)).toBeInTheDocument();
    expect(screen.getByText(/buy & hold investors/i)).toBeInTheDocument();
    expect(screen.getByText(/community operators/i)).toBeInTheDocument();
  });
});

import ServiceAreaMap from "../app/components/ServiceAreaMap";

describe("ServiceAreaMap", () => {
  it("renders section heading", () => {
    render(<ServiceAreaMap />);
    expect(screen.getByText(/where we buy/i)).toBeInTheDocument();
  });

  it("renders all 5 county labels", () => {
    render(<ServiceAreaMap />);
    expect(screen.getByText("San Bernardino")).toBeInTheDocument();
    expect(screen.getByText("Riverside")).toBeInTheDocument();
    expect(screen.getByText("San Diego")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.getByText("Los Angeles")).toBeInTheDocument();
  });
});

import ByTheNumbers from "../app/components/ByTheNumbers";

describe("ByTheNumbers", () => {
  it("renders all 3 stat labels", () => {
    render(<ByTheNumbers />);
    expect(screen.getByText(/offers in 48 hours/i)).toBeInTheDocument();
    expect(screen.getByText(/fees or commissions/i)).toBeInTheDocument();
    expect(screen.getByText(/years experience/i)).toBeInTheDocument();
  });
});

import FeaturedCommunities from "../app/components/FeaturedCommunities";

describe("FeaturedCommunities", () => {
  it("renders section heading", () => {
    render(<FeaturedCommunities />);
    expect(screen.getByText(/communities we serve/i)).toBeInTheDocument();
  });

  it("renders 8 community cards", () => {
    render(<FeaturedCommunities />);
    expect(screen.getByText(/santiago hillside estates/i)).toBeInTheDocument();
    expect(screen.getByText(/cypress inn/i)).toBeInTheDocument();
    expect(screen.getAllByText(/we buy homes here/i).length).toBe(8);
  });
});

import ComparisonTable from "../app/components/ComparisonTable";

describe("ComparisonTable", () => {
  it("renders section heading", () => {
    render(<ComparisonTable />);
    expect(screen.getByText(/see how we compare/i)).toBeInTheDocument();
  });

  it("renders all 3 column headers", () => {
    render(<ComparisonTable />);
    // Component renders both desktop and mobile views — use getAllByText
    expect(screen.getAllByText("Expression Homes").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Traditional Agent").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("FSBO").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all comparison criteria", () => {
    render(<ComparisonTable />);
    // Component renders both desktop and mobile views — use getAllByText
    expect(screen.getAllByText(/time to sell/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/effort/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/certainty/i).length).toBeGreaterThanOrEqual(1);
  });
});
