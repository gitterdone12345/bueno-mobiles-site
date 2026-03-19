const items = [
  "$0 in Fees",
  "No Agent Required",
  "Sell As-Is",
  "Close in 7–30 Days",
  "Sacramento's Trusted Mobile Home Dealer",
  "Fast Cash Offers",
  "We Buy Any Condition",
];

export default function TrustBar() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/10 bg-brand-bg/80 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-white/60 text-sm px-6">
            {item}
            <span className="text-brand-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
