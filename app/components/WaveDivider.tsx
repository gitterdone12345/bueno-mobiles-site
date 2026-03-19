interface WaveDividerProps {
  color: "primary" | "accent";
  flip?: boolean;
}

export default function WaveDivider({ color, flip = false }: WaveDividerProps) {
  const fillClass = color === "primary" ? "fill-brand-primary/20" : "fill-brand-accent/20";

  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        className={`w-full h-[60px] sm:h-[80px] animate-wave ${fillClass}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}
