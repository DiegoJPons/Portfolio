export type ProjectCategory = "web" | "systems";

export type Project = {
  id: string;
  title: string;
  timeframe: string;
  tagline: string;
  highlights: string[];
  stack: string[];
  category: ProjectCategory;
  featured?: boolean;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "playlister",
    title: "Playlister",
    timeframe: "Nov 2025 – Dec 2025",
    tagline:
      "Full-stack playlists app with JWT auth, MongoDB at scale, and Command-pattern Undo/Redo.",
    highlights: [
      "REST API and MongoDB schemas for large song libraries and user playlists.",
      "JWT auth and query-string filtering for search and private data.",
      "Global state and multi-level Undo/Redo (Command pattern); Material UI interface.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "JWT",
      "REST",
    ],
    category: "web",
    featured: true,
    liveUrl: "https://playlister-eight.vercel.app",
    githubUrl: "https://github.com/DiegoJPons/Playlister",
  },
  {
    id: "spotify-clone",
    title: "Spotify clone",
    timeframe: "Jun 2025",
    tagline:
      "Music streaming app with real-time controls, WebSockets, and usage analytics.",
    highlights: [
      "WebSockets for live messaging, presence, and concurrent listening.",
      "Real-time playback UI and aggregated analytics dashboards.",
      "Full stack with TypeScript, Clerk auth, and MongoDB.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Clerk",
      "WebSockets",
    ],
    category: "web",
    featured: true,
    githubUrl: "https://github.com/DiegoJPons/realtime-spotify-clone",
    liveUrl: "https://realtime-spotify-clone-3ldp.onrender.com/",
  },
  {
    id: "pokedex",
    title: "Pokédex",
    timeframe: "Jun 2025 – Jul 2025",
    tagline:
      "Pokémon reference and team builder with 1000+ entries and persistent teams.",
    highlights: [
      "Rich detail views: stats, type matchups, evolution chains.",
      "Express backend with Clerk auth and MongoDB for user teams.",
      "Reusable React components and responsive Tailwind layouts.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Clerk",
    ],
    category: "web",
    githubUrl: "https://github.com/DiegoJPons/Pokedex",
    liveUrl: "https://pokedex-mbe4.onrender.com/",
  },
  {
    id: "holdem",
    title: "Texas Hold’em concurrent server",
    timeframe: "Apr 2025 – May 2025",
    tagline:
      "Multi-client Linux server and CLI with a custom protocol for up to six players.",
    highlights: [
      "POSIX sockets and multi-processing for real-time gameplay.",
      "Hand-ranking and win logic with C structs and careful state management.",
      "Disconnect handling and persistence for session integrity.",
    ],
    stack: ["C", "POSIX sockets", "TCP/IP", "Multi-processing", "GDB"],
    category: "systems",
    githubUrl: "https://github.com/DiegoJPons/Texas-Hold-em",
  },
  {
    id: "png-parser",
    title: "PNG binary parser",
    timeframe: "Jan 2026 – Feb 2026",
    tagline:
      "CLI utility that parses and manipulates PNGs per IEEE/ISO chunk specs.",
    highlights: [
      "IHDR, IDAT, IEND and ancillary chunks with correct binary layout.",
      "Endianness and bitwise metadata for cross-platform correctness.",
      "Criterion tests against malformed headers and corrupted streams.",
    ],
    stack: ["C", "Binary I/O", "Bitwise ops", "Criterion", "Specs"],
    category: "systems",
    githubUrl: "https://github.com/DiegoJPons",
  },
  {
    id: "fs-emulator",
    title: "Linux filesystem emulator",
    timeframe: "Mar 2025 – Apr 2025",
    tagline:
      "CLI shell over an in-memory filesystem modeled with inodes and directory entries.",
    highlights: [
      "Nested structs for hierarchy; interactive POSIX-style commands (ls, cd, mkdir, touch).",
      "Manual malloc/free with Valgrind-clean operation.",
    ],
    stack: ["C", "Valgrind", "Data structures", "Linux/Unix"],
    category: "systems",
    githubUrl: "https://github.com/DiegoJPons/Linux-Filesystem-Emulator",
  },
];

export const webProjects = projects.filter((p) => p.category === "web");
export const systemsProjects = projects.filter((p) => p.category === "systems");
