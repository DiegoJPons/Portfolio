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

function ImagePlaceholder({ title, hint }: { title: string; hint: string }) {
  const initial = title.charAt(0).toUpperCase();
  return (
    <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center bg-zinc-100 px-6 text-center md:min-h-[260px]">
      <span className="text-4xl font-semibold text-zinc-300">{initial}</span>
      <p className="mt-3 max-w-[14rem] font-mono text-[11px] leading-relaxed text-zinc-500">
        {hint}
      </p>
    </div>
  );
}

export function ProjectCard({ project, style, index = 0 }: Props) {
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
      className={`flex w-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 lg:flex-row lg:items-stretch ${rowReverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden border-b border-zinc-200 lg:w-[min(44%,520px)] lg:border-b-0 ${rowReverse ? "lg:border-l lg:border-zinc-200" : "lg:border-r lg:border-zinc-200"}`}
      >
        <div className="relative flex aspect-[16/10] w-full min-h-[220px] items-center justify-center bg-zinc-100 lg:aspect-auto lg:h-full lg:min-h-[280px]">
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
                    className="absolute left-2 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={goGalleryNext}
                    className="absolute right-2 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight />
                  </button>
                  <p
                    className="pointer-events-none absolute bottom-3 left-1/2 z-[2] -translate-x-1/2 rounded bg-white/90 px-2 py-0.5 font-mono text-[10px] font-medium tabular-nums text-zinc-600 shadow-sm"
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
              hint={
                project.imageSrc || gallery?.length
                  ? "Screenshot missing or failed to load — check public/projects/ paths in projects.ts"
                  : "Drop a screenshot in public/projects/ and set imageSrc or imageGallery in projects.ts"
              }
            />
          )}
        </div>
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col justify-center p-6 md:p-8 lg:py-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-zinc-600">
            {project.category === "web" ? "Web" : "Low-level"}
          </span>
          <span className="text-xs text-zinc-500">{project.timeframe}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
          {project.tagline}
        </p>
        <ul className="mt-5 flex max-w-3xl list-none flex-col gap-2.5 p-0 text-sm text-zinc-700">
          {project.highlights.map((line) => (
            <li
              key={line}
              className="relative pl-3.5 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-zinc-400 before:content-['']"
            >
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-6">
          {project.liveUrl || project.githubUrl ? (
            <div className="flex flex-wrap gap-5">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500"
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 underline decoration-zinc-200 underline-offset-4 hover:text-zinc-900"
                >
                  GitHub
                  <ExternalIcon />
                </a>
              ) : null}
            </div>
          ) : null}
          {project.sourceNote ? (
            <p className="m-0 text-sm leading-relaxed text-zinc-500">
              {project.sourceNote}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
