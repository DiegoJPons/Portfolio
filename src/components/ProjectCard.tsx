import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { Project } from "../data/projects";

type Props = { project: Project; style?: CSSProperties; index?: number };

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const categoryTheme = {
  web: {
    ring: "hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_24px_48px_-28px_rgba(34,211,238,0.25)]",
    glow: "from-cyan-500/25 via-transparent to-violet-500/10",
    badge: "border-cyan-500/25 bg-cyan-500/10 text-cyan-200",
    dot: "before:bg-cyan-400",
    pill: "border-cyan-500/20 bg-cyan-950/40 text-cyan-200/90 hover:border-cyan-400/40",
    link: "text-cyan-300 hover:text-cyan-200",
    placeholder: "from-cyan-950/80 to-slate-950",
    placeholderAccent: "text-cyan-400/40",
  },
  systems: {
    ring: "hover:shadow-[0_0_0_1px_rgba(251,191,36,0.3),0_24px_48px_-28px_rgba(245,158,11,0.15)]",
    glow: "from-amber-500/20 via-transparent to-fuchsia-500/10",
    badge: "border-amber-500/25 bg-amber-500/10 text-amber-100",
    dot: "before:bg-amber-400",
    pill: "border-amber-500/20 bg-amber-950/35 text-amber-100/90 hover:border-amber-400/35",
    link: "text-amber-200/90 hover:text-amber-100",
    placeholder: "from-amber-950/70 to-slate-950",
    placeholderAccent: "text-amber-400/35",
  },
} as const;

function ImagePlaceholder({
  title,
  theme,
  hint,
}: {
  title: string;
  theme: (typeof categoryTheme)[keyof typeof categoryTheme];
  hint: string;
}) {
  const initial = title.charAt(0).toUpperCase();
  return (
    <div
      className={`flex h-full min-h-[200px] w-full flex-col items-center justify-center bg-gradient-to-br px-6 text-center md:min-h-[260px] ${theme.placeholder}`}
    >
      <span
        className={`font-['Outfit'] text-5xl font-extrabold ${theme.placeholderAccent}`}
      >
        {initial}
      </span>
      <p className="mt-3 max-w-[14rem] font-mono text-[11px] leading-relaxed text-slate-500">
        {hint}
      </p>
    </div>
  );
}

export function ProjectCard({ project, style, index = 0 }: Props) {
  const t = categoryTheme[project.category];
  const [imageFailed, setImageFailed] = useState(false);
  const [galleryFailed, setGalleryFailed] = useState<Record<number, boolean>>({});
  const [galleryIndex, setGalleryIndex] = useState(0);

  const alt = project.imageAlt ?? `${project.title} preview`;
  const gallery = project.imageGallery;
  const galleryAllFailed =
    Boolean(gallery?.length) &&
    gallery!.every((_, i) => galleryFailed[i]);

  const validGalleryIndices = useMemo(
    () =>
      gallery?.map((_, i) => i).filter((i) => !galleryFailed[i]) ?? [],
    [gallery, galleryFailed]
  );

  useEffect(() => {
    if (validGalleryIndices.length === 0) return;
    if (!validGalleryIndices.includes(galleryIndex)) {
      setGalleryIndex(validGalleryIndices[0]);
    }
  }, [validGalleryIndices, galleryIndex]);

  const goGalleryPrev = () => {
    if (validGalleryIndices.length < 2) return;
    const pos = validGalleryIndices.indexOf(galleryIndex);
    const i =
      pos <= 0
        ? validGalleryIndices[validGalleryIndices.length - 1]
        : validGalleryIndices[pos - 1];
    setGalleryIndex(i);
  };

  const goGalleryNext = () => {
    if (validGalleryIndices.length < 2) return;
    const pos = validGalleryIndices.indexOf(galleryIndex);
    const i =
      pos < 0 || pos >= validGalleryIndices.length - 1
        ? validGalleryIndices[0]
        : validGalleryIndices[pos + 1];
    setGalleryIndex(i);
  };

  const hasSingleImage =
    Boolean(project.imageSrc) &&
    !imageFailed &&
    !gallery?.length;
  const hasGallery =
    Boolean(gallery?.length) && !galleryAllFailed;

  const rowReverse = index % 2 === 1;

  return (
    <article
      style={style}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d1324] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition duration-300 ease-out hover:-translate-y-0.5 lg:flex-row lg:items-stretch ${t.ring} ${rowReverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br opacity-30 blur-3xl transition duration-500 group-hover:opacity-55 ${t.glow}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      {/* Image / preview column */}
      <div
        className={`relative w-full shrink-0 overflow-hidden border-b border-white/[0.06] lg:w-[min(44%,520px)] lg:border-b-0 lg:border-white/[0.06] ${rowReverse ? "lg:border-l" : "lg:border-r"}`}
      >
        <div className="relative flex aspect-[16/10] w-full min-h-[220px] items-center justify-center bg-[#060912] lg:aspect-auto lg:h-full lg:min-h-[280px]">
          {hasGallery && validGalleryIndices.length > 0 ? (
            <>
              <img
                src={gallery![galleryIndex].src}
                alt={gallery![galleryIndex].alt}
                loading="lazy"
                decoding="async"
                onError={() =>
                  setGalleryFailed((m) => ({ ...m, [galleryIndex]: true }))
                }
                className="max-h-full max-w-full object-contain object-center"
              />
              {validGalleryIndices.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goGalleryPrev}
                    className="absolute left-2 top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0d1324]/85 text-white shadow-lg backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-[#0d1324] hover:text-cyan-200"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={goGalleryNext}
                    className="absolute right-2 top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0d1324]/85 text-white shadow-lg backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-[#0d1324] hover:text-cyan-200"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight />
                  </button>
                  <p
                    className="pointer-events-none absolute bottom-3 left-1/2 z-[2] -translate-x-1/2 rounded-full bg-black/45 px-2.5 py-0.5 font-mono text-[10px] font-medium tabular-nums text-slate-300 backdrop-blur-sm"
                    aria-live="polite"
                  >
                    {validGalleryIndices.indexOf(galleryIndex) + 1} /{" "}
                    {validGalleryIndices.length}
                  </p>
                </>
              ) : null}
            </>
          ) : hasSingleImage ? (
            <img
              src={project.imageSrc}
              alt={alt}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="max-h-full max-w-full object-contain object-center"
            />
          ) : (
            <ImagePlaceholder
              title={project.title}
              theme={t}
              hint={
                project.imageSrc || gallery?.length
                  ? "Screenshot missing or failed to load — check public/projects/ paths in projects.ts"
                  : "Drop a screenshot in public/projects/ and set imageSrc or imageGallery in projects.ts"
              }
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#0d1324]/90 via-transparent to-transparent opacity-60 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0d1324]/50"
            aria-hidden
          />
        </div>
      </div>

      {/* Content column */}
      <div className="relative flex min-w-0 flex-1 flex-col justify-center p-6 md:p-8 lg:py-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest ${t.badge}`}
          >
            {project.category === "web" ? "Web" : "Systems"}
          </span>
          <span className="text-xs text-slate-500">{project.timeframe}</span>
        </div>
        <h3 className="font-['Outfit'] text-xl font-bold tracking-tight text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
          {project.tagline}
        </p>
        <ul className="mt-5 flex max-w-3xl list-none flex-col gap-2.5 p-0 text-sm text-slate-300">
          {project.highlights.map((line) => (
            <li
              key={line}
              className={`relative pl-3.5 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:content-[''] ${t.dot}`}
            >
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`rounded-lg border px-2 py-0.5 font-mono text-[10px] font-medium transition ${t.pill}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6">
          {project.liveUrl || project.githubUrl ? (
            <div className="flex flex-wrap gap-5">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition ${t.link}`}
                >
                  Live demo
                  <ExternalIcon />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  GitHub
                  <ExternalIcon />
                </a>
              ) : null}
            </div>
          ) : null}
          {project.sourceNote ? (
            <p className="m-0 text-sm leading-relaxed text-slate-500">
              {project.sourceNote}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
