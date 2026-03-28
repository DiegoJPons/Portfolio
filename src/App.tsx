import { ProjectCard } from "./components/ProjectCard";
import { systemsProjects, webProjects } from "./data/projects";

const LINKS = {
  email: "mailto:diegojean1995@gmail.com",
  github: "https://github.com/DiegoJPons",
  linkedin: "https://linkedin.com/in/diego-pons-",
} as const;

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/[0.06] blur-[80px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-white"
          >
            Diego Pons
          </a>
          <nav className="flex items-center gap-5 text-sm text-slate-400">
            <a href="#web" className="transition hover:text-white">
              Web
            </a>
            <a href="#systems" className="transition hover:text-white">
              Systems
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5 pb-24 pt-16 md:pt-24">
        <section className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-400/90">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Full-stack web & systems work
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            CS @ Stony Brook (May 2027). I build React/Node apps and low-level C
            tools—network servers, binary parsers, and filesystem models.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl border border-slate-600/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="rounded-xl border border-transparent px-5 py-2.5 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </section>

        <section id="web" className="mt-24 scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Web applications
          </h2>
          <p className="mt-2 max-w-xl text-slate-400">
            Full-stack TypeScript and React, with auth, APIs, and real-time
            features where it matters.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="systems" className="mt-24 scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Systems & low-level
          </h2>
          <p className="mt-2 max-w-xl text-slate-400">
            C on Linux: sockets, binary formats, and careful memory and state
            management. Demos are typically local or via README—repos tell the
            story.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemsProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border-subtle)] py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <span>Diego Pons · Stony Brook University</span>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <a href={LINKS.github} className="hover:text-slate-300">
              GitHub
            </a>
            <a href={LINKS.linkedin} className="hover:text-slate-300">
              LinkedIn
            </a>
            <a href={LINKS.email} className="hover:text-slate-300">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
