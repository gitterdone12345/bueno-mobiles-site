import Link from "next/link";

export const metadata = { title: "Terms of Service | Bueno Mobiles" };

export default function Terms() {
  return (
    <main className="min-h-screen bg-brand-bg text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-brand-accent text-sm mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="font-heading font-extrabold text-4xl mb-8">Terms of Service</h1>
        <div className="text-white/60 space-y-4 leading-relaxed">
          <p>Last updated: March 2026</p>
          <p>By using the Bueno Mobiles website, you agree to these terms. Please read them carefully.</p>
          <h2 className="text-white font-heading font-bold text-xl mt-8">Use of Service</h2>
          <p>Bueno Mobiles buys and sells manufactured homes directly. Submitting a form is free and creates no obligation to sell.</p>
          <h2 className="text-white font-heading font-bold text-xl mt-8">No Guarantees</h2>
          <p>We cannot guarantee the timing or value of offers you receive. Results may vary based on market conditions and property details.</p>
          <h2 className="text-white font-heading font-bold text-xl mt-8">Contact Us</h2>
          <p>Questions? Email us at <a href="mailto:hello@mail.buenomobiles.com" className="text-brand-accent hover:underline">hello@mail.buenomobiles.com</a>.</p>
        </div>
      </div>
    </main>
  );
}
