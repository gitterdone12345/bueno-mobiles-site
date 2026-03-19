import Link from "next/link";

export const metadata = { title: "Privacy Policy | Bueno Mobiles" };

export default function Privacy() {
  return (
    <main className="min-h-screen bg-brand-bg text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-brand-accent text-sm mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="font-heading font-extrabold text-4xl mb-8">Privacy Policy</h1>
        <div className="text-white/60 space-y-4 leading-relaxed">
          <p>Last updated: March 2026</p>
          <p>Bueno Mobiles ("we", "us", or "our") respects your privacy. This policy explains how we collect, use, and protect your information when you use our website.</p>
          <h2 className="text-white font-heading font-bold text-xl mt-8">Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, phone number, email address, and property details when you submit a form on our site.</p>
          <h2 className="text-white font-heading font-bold text-xl mt-8">How We Use Your Information</h2>
          <p>We use your information to evaluate your mobile home and provide you with a cash offer. We do not sell your personal information to third parties.</p>
          <h2 className="text-white font-heading font-bold text-xl mt-8">Contact Us</h2>
          <p>Questions? Email us at <a href="mailto:hello@mail.buenomobiles.com" className="text-brand-accent hover:underline">hello@mail.buenomobiles.com</a>.</p>
        </div>
      </div>
    </main>
  );
}
