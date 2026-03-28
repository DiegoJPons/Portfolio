import type { Project } from "../data/projects";

type Props = { project: Project };

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

export function ProjectCard({ project }: Props) {
  return (
    <article
      className="group flex h-full flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-sky-400/25 hover:shadow-[0_20px_50px_-24px_rgba(56,189,248,0.15)]"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-sky-300/90">
          {project.category === "web" ? "Web" : "Systems"}
        </span>
        <span className="text-xs text-slate-500">{project.timeframe}</span>
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {project.tagline}
      </p>
      <ul className="mt-4 flex flex-1 list-none flex-col gap-2 p-0 text-sm text-slate-300">
        {project.highlights.map((line) => (
          <li key={line} className="relative pl-3.5 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-sky-400/70">
            {line}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-600/40 bg-slate-900/50 px-2 py-0.5 font-mono text-[11px] text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--color-border-subtle)] pt-5">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition hover:text-sky-300"
          >
            Live demo
            <ExternalIcon />
          </a>
        ) : null}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
        >
          GitHub
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}
