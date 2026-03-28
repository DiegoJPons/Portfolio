export type ProjectCategory = "web" | "systems";

/** Add screenshots under `public/projects/` then set `imageSrc` (e.g. `/projects/playlister.png`) and `imageAlt`. */

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
  /** Public repo link; omit if not public yet (use sourceNote). */
  githubUrl?: string;
  /** Shown instead of GitHub when the repo is private or not linkable. */
  sourceNote?: string;
  /** Screenshot or preview: place file in `public/projects/` and set e.g. `/projects/playlister.png`. */
  imageSrc?: string;
  imageAlt?: string;
  /** Multiple screenshots (shown stacked). Takes precedence over `imageSrc` when set. */
  imageGallery?: { src: string; alt: string }[];
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
    imageGallery: [
      {
        src: "/projects/playlister-landing.png",
        alt: "Landing page with guest, login, and create account",
      },
      {
        src: "/projects/playlister-playlists.png",
        alt: "Playlist search, filters, and playlist cards with actions",
      },
      {
        src: "/projects/playlister-play-modal.png",
        alt: "Play playlist modal with track list and embedded player",
      },
      {
        src: "/projects/playlister-songs.png",
        alt: "Songs catalog with search, sort, and YouTube player",
      },
    ],
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
    imageGallery: [
      {
        src: "/projects/spotify-home.png",
        alt: "Home view with playlists, Made For You, and playback bar",
      },
      {
        src: "/projects/spotify-album.png",
        alt: "Album view with track list and green play control",
      },
      {
        src: "/projects/spotify-admin.png",
        alt: "Music Manager dashboard with catalog stats and song table",
      },
      {
        src: "/projects/spotify-messages.png",
        alt: "Messages and friend activity with live chat and player",
      },
    ],
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
    imageGallery: [
      {
        src: "/projects/pokedex-browse.png",
        alt: "Pokédex browse grid with team sidebar and search",
      },
      {
        src: "/projects/pokedex-detail.png",
        alt: "Pokédex detail view with profile, stats, and evolution line",
      },
    ],
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
    imageGallery: [
      {
        src: "/projects/holdem-table.png",
        alt: "Six-seat poker table UI with pot, community cards, and ready/leave",
      },
      {
        src: "/projects/holdem-betting.png",
        alt: "Betting turn with amount input and check, bet, fold controls",
      },
      {
        src: "/projects/holdem-hand.png",
        alt: "Active hand with player stacks, hole cards, and board",
      },
    ],
  },
  {
    id: "png-parser",
    title: "PNG binary parser",
    timeframe: "Jan 2026 – Feb 2026",
    tagline:
      "CLI that parses PNGs to IEEE/ISO chunk specs, overlays one image on another, and hides or recovers secret messages via steganography.",
    highlights: [
      "IHDR, IDAT, IEND and ancillary chunks with correct binary layout; endianness and bitwise metadata for portable I/O.",
      "Overlay mode: composite a smaller PNG onto a base image with configurable placement.",
      "Steganography: encode messages into PNG output and decode hidden payloads from existing files.",
      "Criterion tests against malformed headers and corrupted streams.",
    ],
    stack: ["C", "Binary I/O", "Bitwise ops", "Criterion", "Specs"],
    category: "systems",
    sourceNote:
      "Coursework this semester — the repo stays private until the course ends. I’m happy to share access or walk through the code after that, or discuss it in an interview.",
    imageGallery: [
      {
        src: "/projects/png-parser-usage.png",
        alt: "CLI usage: flags for IHDR, chunk summary, palette, encode/decode, and overlay",
      },
      {
        src: "/projects/png-parser-ihdr.png",
        alt: "Printed IHDR fields for a palette PNG (width, height, bit depth, color type)",
      },
      {
        src: "/projects/png-parser-batman.png",
        alt: "Sample palette image output from the parser pipeline",
      },
      {
        src: "/projects/png-parser-arrow.png",
        alt: "RGBA-style asset with transparency checkerboard background",
      },
      {
        src: "/projects/png-parser-overlay.png",
        alt: "Composite overlay: smaller image blended over a base PNG",
      },
    ],
  },
  {
    id: "skyscrapers-cse220",
    title: "Skyscrapers puzzle (CSE 220)",
    timeframe: "Spring 2025",
    tagline:
      "Terminal Skyscrapers game and heuristic solver in C—strict stdin/stdout I/O for boards from 4×4 to 8×8.",
    highlights: [
      "Interactive game: board and perimeter “clue” keys from CLI args, scanf-driven prompts, and spec-accurate errors (occupied cells, duplicate heights, violated keys).",
      "2D char board and initialization from row-major state strings; win detection when the grid is legally complete.",
      "Solver: fill strategy using edge-clue rules and four placement heuristics (no brute-force backtracking required).",
    ],
    stack: ["C", "stdin/stdout", "2D arrays", "Algorithms"],
    category: "systems",
    githubUrl: "https://github.com/DiegoJPons/Skyscrapers",
    imageGallery: [
      {
        src: "/projects/skyscrapers-solver.png",
        alt: "Terminal output showing Skyscrapers board before and after solve",
      },
      {
        src: "/projects/skyscrapers-interactive.png",
        alt: "Interactive play with prompts, invalid-move error, and updated board",
      },
    ],
  },
];

export const webProjects = projects.filter((p) => p.category === "web");
export const systemsProjects = projects.filter((p) => p.category === "systems");
