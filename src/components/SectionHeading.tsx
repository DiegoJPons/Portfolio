import type { CSSProperties } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  accent: "cyan" | "amber";
  delayClass?: string;
  className?: string;
  style?: CSSProperties;
};

const accentStyles = {
  cyan: {
    line: "from-cyan-400/80 to-sky-600/40",
    glow: "bg-cyan-500/20",
    text: "text-cyan-200/90",
  },
  amber: {
    line: "from-amber-400/80 to-orange-600/40",
    glow: "bg-amber-500/15",
    text: "text-amber-200/90",
  },
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent,
  delayClass = "",
  className = "",
  style,
}: Props) {
  const a = accentStyles[accent];
  return (
    <div
      className={`relative ${delayClass} ${className}`.trim()}
      style={style}
    >
      <div
        className={`pointer-events-none absolute -left-4 top-0 h-full w-px bg-gradient-to-b ${a.line} opacity-80 md:-left-6`}
        aria-hidden
      />
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full ${a.glow} px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${a.text}`}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="font-['Outfit'] mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
        {description}
      </p>
    </div>
  );
}
