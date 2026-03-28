import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { systemsProjects, webProjects } from "./data/projects";
import type { CSSProperties } from "react";

const LINKS = {
  email: "mailto:diegojean1995@gmail.com",
  github: "https://github.com/DiegoJPons",
  linkedin: "https://linkedin.com/in/diego-pons-",
} as const;

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(34,211,238,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_60%,rgba(167,139,250,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(251,191,36,0.06),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 0%, black 20%, transparent 75%)",
          }}
        />
        <div className="bg-noise absolute inset-0" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#070a12]/75 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-['Outfit'] text-sm font-bold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/25 to-violet-500/20 ring-1 ring-white/10 transition group-hover:ring-cyan-400/30">
              <span className="font-mono text-xs font-bold text-cyan-200">DP</span>
            </span>
            Diego Pons
          </a>
          <nav className="flex items-center gap-1 sm:gap-2">
            {[
              ["Web", "#web"],
              ["Systems", "#systems"],
              ["GitHub", LINKS.github],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="rounded-lg px-3 py-2 font-mono text-xs font-medium uppercase tracking-wider text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-28 pt-14 md:px-8 md:pt-20">
        <section className="relative">
          <div className="animate-fade-in max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              Open to opportunities
            </p>
            <h1 className="font-['Outfit'] mt-8 text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight">
              <span className="text-slate-100">Full-stack web</span>
              <br />
              <span className="hero-gradient">&amp; systems engineering</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              CS @{" "}
              <span className="text-slate-300">Stony Brook</span> (May 2027).
              I ship React and Node apps and low-level{" "}
              <span className="text-amber-200/80">C</span> tools—network
              servers, binary parsers, and filesystem models.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-7 py-3.5 font-['Outfit'] text-sm font-bold text-slate-950 shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)] transition hover:shadow-[0_0_56px_-8px_rgba(34,211,238,0.7)]"
              >
                <span className="relative z-10">View GitHub</span>
                <span className="absolute inset-0 bg-white/25 opacity-0 transition group-hover:opacity-100" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-2xl border border-white/[0.12] bg-white/[0.03] px-7 py-3.5 font-['Outfit'] text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-cyan-500/30 hover:bg-white/[0.06]"
              >
                LinkedIn
              </a>
              <a
                href={LINKS.email}
                className="rounded-2xl px-4 py-3.5 font-mono text-sm font-medium text-slate-500 transition hover:text-slate-300"
              >
                Email →
              </a>
            </div>
          </div>

          {/* Decorative stats / chips */}
          <div className="mt-16 flex flex-wrap gap-3 md:mt-20">
            {["React & TypeScript", "Node & Express", "MongoDB", "C & POSIX"].map(
              (chip, i) => (
                <span
                  key={chip}
                  className="animate-fade-up rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-2 font-mono text-xs text-slate-400"
                  style={{
                    animationDelay: `${150 + i * 70}ms`,
                  }}
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </section>

        <section id="web" className="mt-28 scroll-mt-28 md:mt-36">
          <SectionHeading
            eyebrow="01 — Web"
            title="Applications"
            description="Full-stack TypeScript and React, with auth, APIs, and real-time features where it matters."
            accent="cyan"
            delayClass="animate-fade-up"
            style={{ animationDelay: "80ms" } satisfies CSSProperties}
          />
          <div className="mt-14 flex flex-col gap-10 lg:gap-12">
            {webProjects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                style={{
                  animation: "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: `${120 + i * 90}ms`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        </section>

        <section id="systems" className="mt-28 scroll-mt-28 md:mt-36">
          <SectionHeading
            eyebrow="02 — Systems"
            title="Low-level & infrastructure"
            description="C on Linux: sockets, binary formats, and careful memory and state management. Demos are often local—repos and READMEs carry the details."
            accent="amber"
            delayClass="animate-fade-up"
            style={{ animationDelay: "80ms" } satisfies CSSProperties}
          />
          <div className="mt-14 flex flex-col gap-10 lg:gap-12">
            {systemsProjects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                style={{
                  animation: "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: `${120 + i * 90}ms`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/[0.06] bg-[#05070d]/80 py-12 backdrop-blur-sm">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
          aria-hidden
        />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <p className="font-['Outfit'] text-base font-semibold text-white">
              Diego Pons
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Stony Brook University · Computer Science
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-mono text-sm">
            <a
              href={LINKS.github}
              className="text-slate-400 transition hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              className="text-slate-400 transition hover:text-cyan-300"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="text-slate-400 transition hover:text-cyan-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
