import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { systemsProjects, webProjects } from "./data/projects";

const LINKS = {
  email: "mailto:diegojean1995@gmail.com",
  github: "https://github.com/DiegoJPons",
  linkedin: "https://linkedin.com/in/diego-pons-",
  resumePdf: "/resume.pdf",
} as const;

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold text-zinc-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded border border-zinc-300 bg-white font-mono text-xs font-semibold text-zinc-600">
              DP
            </span>
            Diego Pons
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-1">
            {[
              ["Resume", "#resume"],
              ["Web", "#web"],
              ["Low-level", "#systems"],
              ["GitHub", LINKS.github],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="rounded-md px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
        <section className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Portfolio
          </p>
          <h1 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-snug tracking-tight text-zinc-900">
            Full-stack web apps
            <br />
            Command-line C programs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            I&apos;m a CS student at{" "}
            <span className="text-zinc-800">Stony Brook</span> (class of
            2027). Most of what&apos;s here is coursework and personal
            projects: full-stack apps with React and Node, plus command-line C
            programs—socket servers, a PNG parser, and a filesystem emulator.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="rounded-md px-3 py-2.5 text-sm text-zinc-500 transition hover:text-zinc-800"
            >
              Email
            </a>
            <a
              href="#resume"
              className="rounded-md px-3 py-2.5 text-sm text-zinc-500 transition hover:text-zinc-800"
            >
              Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {["React & TypeScript", "Node & Express", "MongoDB", "C & POSIX"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs text-zinc-600"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </section>

        <section id="resume" className="mt-16 scroll-mt-24 md:mt-20">
          <div className="flex flex-col justify-between gap-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:gap-10 md:p-8">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Resume
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900 md:text-2xl">
                PDF
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
                Stony Brook CS, projects, and skills. Open in your browser or
                download for applications.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={LINKS.resumePdf}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                View PDF
              </a>
              <a
                href={LINKS.resumePdf}
                download="Diego-Pons-Resume.pdf"
                className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                Download
              </a>
            </div>
          </div>
        </section>

        <section id="web" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionHeading
            eyebrow="01 — Web"
            title="Applications"
            description="TypeScript and React with Node backends: auth, APIs, and real-time features where useful."
          />
          <div className="mt-12 flex flex-col gap-12 md:gap-14">
            {webProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        <section id="systems" className="mt-16 scroll-mt-24 md:mt-24">
          <SectionHeading
            eyebrow="02 — C"
            title="Coursework-style projects"
            description="C on Linux: sockets, binary formats, and careful memory use—coursework and personal work, not production infrastructure."
          />
          <div className="mt-12 flex flex-col gap-12 md:gap-14">
            {systemsProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <p className="text-sm font-medium text-zinc-900">Diego Pons</p>
            <p className="mt-1 text-sm text-zinc-500">
              Stony Brook University · Computer Science
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href={LINKS.github}
              className="text-zinc-600 transition hover:text-zinc-900"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              className="text-zinc-600 transition hover:text-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="text-zinc-600 transition hover:text-zinc-900"
            >
              Email
            </a>
            <a
              href={LINKS.resumePdf}
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-600 transition hover:text-zinc-900"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
