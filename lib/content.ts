export const PROFILE = {
  name: "Matyáš Mlnařík",
  displayName: ["MATYÁŠ", "MLNAŘÍK"],
  role: "Lead Developer & Hardware Engineer",
  location: "Czech Republic",
  email: "mlnarikmatyas206@gmail.com",
} as const;

export const SECTIONS = [
  { id: "index", label: "Index", num: "00" },
  { id: "hope-to-see", label: "Hope To See", num: "01" },
  { id: "stack", label: "Stack", num: "02" },
  { id: "hardware", label: "Hardware", num: "03" },
  { id: "mindset", label: "Mindset", num: "04" },
] as const;

export const AWARDS = [
  {
    name: "Česká hlavička",
    kind: "National Award",
    note: "Ocenění za technický a vědecký talent.",
    year: "—",
  },
  {
    name: "Social Impact Awards",
    kind: "Winners",
    note: "SIA — vítězové v kategorii společenského dopadu.",
    year: "—",
  },
  {
    name: "Samsung Solve for Tomorrow",
    kind: "Finalists",
    note: "Finále národního inovačního programu.",
    year: "—",
  },
  {
    name: "Moonshot Awards",
    kind: "Awarded",
    note: "Ocenění za ambiciózní technologický projekt.",
    year: "—",
  },
  {
    name: "SOČ",
    kind: "Středoškolská odborná činnost",
    note: "Odborná obhajoba výzkumné a vývojové práce.",
    year: "—",
  },
] as const;

/** A rendered editor line: either a comment, or a key/value entry. */
export type StackLine =
  | { c: string; k?: undefined; v?: undefined }
  | { c?: undefined; k: string; v: string };

export type StackTab = {
  id: string;
  file: string;
  lang: string;
  title: string;
  lines: StackLine[];
};

export const STACK_TABS: StackTab[] = [
  {
    id: "core",
    file: "core.stack.ts",
    lang: "typescript",
    title: "Core Stack",
    lines: [
      { c: "// production surface — shipped, not prototyped" },
      { k: "framework", v: "Next.js — App Router, RSC, edge routes" },
      { k: "ui", v: "React 19 — modular, semantic, accessible" },
      { k: "styling", v: "Tailwind CSS — design tokens, zero dead CSS" },
      { k: "data", v: "Supabase — Postgres + Auth + Storage" },
      { k: "security", v: "RLS policies — row-level access on every table" },
      { k: "runtime", v: "Node.js — API layer, jobs, tooling" },
      { k: "deploy", v: "Vercel — preview per branch, instant rollback" },
    ],
  },
  {
    id: "ai",
    file: "ai.workflow.ts",
    lang: "typescript",
    title: "AI-Driven Workflow",
    lines: [
      { c: "// AI as leverage, not autopilot — review stays human" },
      { k: "editor", v: "Cursor — agentní refaktoring přímo v repu" },
      { k: "agent", v: "Claude Code — plánování, review, migrace" },
      { k: "prototype", v: "Lovable — rychlá validace UI konceptů" },
      { k: "local", v: "Ollama — lokální modely, offline a bez úniku dat" },
      { k: "loop", v: "spec → generate → review → test → ship" },
    ],
  },
  {
    id: "infra",
    file: "infra.config.yaml",
    lang: "yaml",
    title: "Infrastructure",
    lines: [
      { c: "# vlastní dev prostředí, dostupné odkudkoliv" },
      { k: "tunnels", v: "VS Code tunnels — remote dev na jakémkoliv stroji" },
      { k: "edge_node", v: "Raspberry Pi — 24/7 dev & build server" },
      { k: "local_env", v: "reprodukovatelné lokální prostředí, dockerized" },
      { k: "network", v: "IoT segment, statické routy, monitoring" },
      { k: "backup", v: "verzované snapshoty + off-site kopie" },
    ],
  },
];

export const HARDWARE = [
  {
    num: "01",
    title: "Custom Machine Building",
    tag: "MECHATRONICS",
    body: "Návrh a stavba strojů od rámu po firmware. Krokové motory, lineární vedení, kalibrace geometrie a řídicí elektronika.",
    items: ["CNC routery", "Laserové gravírky", "Pásové pily / sawmills", "Stepper drivery", "Lineární vedení"],
  },
  {
    num: "02",
    title: "Industrial Design & Manufacturing",
    tag: "FABRICATION",
    body: "Práce s materiálem v reálném měřítku — těžké ocelové profily, masivní dřevo a tištěné přípravky, které drží toleranci.",
    items: [
      "Těžké ocelové profily",
      "Masivní dřevo",
      "Restaurování — kyselina šťavelová",
      "3D tištěné jigy a přípravky",
      "Techta — heavy-duty tool brand",
    ],
  },
  {
    num: "03",
    title: "Architecture & Renovation",
    tag: "DATA / ANALYSIS",
    body: "Architektonická a rozpočtová analýza historických objektů. Surová data, čitelně strukturovaná — od záměru po realizovatelný odhad.",
    items: ["Pasport objektu", "Rozpočtová analýza", "Fázování rekonstrukce", "Dokumentace stavu"],
  },
] as const;

export const PASSIONS = [
  {
    cmd: "cat sports.log",
    title: "Competitive Sports",
    meta: "HOCKEY · GOLF · FLOORBALL · TENNIS",
    body: "Kombinace vysokorychlostní týmové dynamiky, fyzické výdrže a absolutní mechanické přesnosti.",
    metrics: [
      { k: "tempo", v: "high" },
      { k: "precision", v: "absolute" },
      { k: "mode", v: "team + solo" },
    ],
  },
  {
    cmd: "run gametheory --solve",
    title: "Poker & Game Theory",
    meta: "RISK · PROBABILITY · STRATEGY",
    body: "Řízení rizika, výpočet pravděpodobností a strategicko-analytické myšlení pod tlakem neúplné informace.",
    metrics: [
      { k: "model", v: "EV-driven" },
      { k: "input", v: "incomplete" },
      { k: "bias", v: "controlled" },
    ],
  },
  {
    cmd: "arm && throttle up",
    title: "FPV Drones",
    meta: "CUSTOM BUILDS · MOTION",
    body: "Vysokorychlostní přesnost, vlastní hardwarové buildy a čtení dynamiky pohybu v reálném čase.",
    metrics: [
      { k: "build", v: "custom" },
      { k: "latency", v: "minimal" },
      { k: "control", v: "manual" },
    ],
  },
  {
    cmd: "systemctl status home.iot",
    title: "IoT & Home Automation",
    meta: "RASPBERRY PI · SENSOR NETWORKS",
    body: "Rozšíření Raspberry Pi expertízy do vlastních smart home systémů a senzorových sítí.",
    metrics: [
      { k: "nodes", v: "distributed" },
      { k: "cloud", v: "optional" },
      { k: "uptime", v: "24/7" },
    ],
  },
] as const;

export const MANIFESTO = [
  { text: "Software a hardware nejsou dvě disciplíny.", accent: false },
  { text: "Je to jeden systém — kód, který ovládá pohyb,", accent: false },
  { text: "a materiál, který drží toleranci.", accent: true },
] as const;
