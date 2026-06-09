// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit everything here. No code knowledge needed.
//  Lines marked  // TODO  are placeholders to confirm or fill in.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Sean W. Kelley",
  surnameInitial: "PhD",
  // The short eyebrow above your name, terminal-style.
  tag: "Human–AI interaction · behavioral science · mental health",
  // Location shown by the status dot.
  location: "Boston, MA", // TODO: confirm city
  status: "Open to research & data science roles", // TODO: edit or set to "" to hide
  // The big headline. Keep it one strong sentence.
  headline:
    "I measure how AI systems behave, and build tools that act on what I find.",
  // One supporting paragraph under the headline.
  subhead:
    "Postdoctoral researcher at Northeastern's Network Science Institute and co-founder of Myndgard. My research measures how language models behave — things like sycophancy, epistemic independence, and causal reasoning. At Myndgard, I build mental-health tools that clinicians use in their work.",
  email: "seanwk21@gmail.com",
  links: {
    scholar: "https://scholar.google.com/citations?user=ETfHI60AAAAJ&hl=en", // Google Scholar
    github: "https://github.com/seanwkelley", // GitHub profile
    linkedin: "https://www.linkedin.com/in/sean-w-kelley/", // LinkedIn
    arxiv: "", // set to your arXiv author page URL to show the button
    myndgard: "https://myndgard.com", // company site (distinct from the Discover product)
  },
};

export const about = [
  "I work across human–AI interaction and behavioral science. My PhD is in psychology, focused on computational psychiatry — building machine-learning and network models of mental health from real longitudinal data. That work led to first-author papers in Nature Communications, PNAS, and NPJ Digital Medicine.",
  "Now my research turns vague claims about how language models behave into numbers you can compare across models. I also co-founded Myndgard, where I build AI safety and mental-health tools that universities use with their counseling services.",
  "My work splits in two: research on how AI behaves, and products that put it to use where it matters most — mostly mental health.",
];

// ── Research — the evaluation / academic work ────────────────────────────────
export const research = [
  {
    id: "goalpref",
    title: "GoalPref-Bench",
    kind: "Evaluation harness",
    blurb:
      "A benchmark that tests whether nine language models stick to what a user actually wants or just agree with them. It turns a common worry about sycophancy into one number you can compare across models.",
    tags: ["LLM eval", "sycophancy", "9 models"],
    links: [{ label: "GitHub", href: "https://github.com/seanwkelley/GoalPref-Bench" }],
  },
  {
    id: "causal-coherence",
    title: "Causal-Coherence Probing",
    kind: "Framework + study",
    blurb:
      "Asks a model to forecast something and explain its reasoning as a causal diagram. It then works out which factors matter most and challenges them one at a time: does the model change its mind more when you push on an important factor than a minor one? Run across seven models and hundreds of questions, with reliability and placebo checks.",
    tags: ["causal reasoning", "DAGs", "7 models"],
    links: [
      { label: "Code & paper", href: "https://github.com/seanwkelley/LLM_Forecasting" },
      { label: "Interactive demo", href: "https://github.com/seanwkelley/causal-forecast-lab" },
    ],
  },
  {
    id: "epistemic-independence",
    title: "Personalization & Epistemic Independence",
    kind: "Controlled experiments",
    blurb:
      "Experiments on what happens when you personalize a model to a user. Personalizing makes it warmer and more emotionally in tune, but whether it also makes the model more agreeable depends on the role it's playing.",
    tags: ["personalization", "alignment", "arXiv 2026"],
    links: [{ label: "Read paper", href: "https://arxiv.org/abs/2603.00024" }], // TODO: confirm
  },
  {
    id: "creative-collaboration",
    title: "Personalized AI for Creative Work",
    kind: "Human–AI collaboration",
    blurb:
      "A study with hundreds of people testing whether a personalized AI helps with creative work. It did: people and the AI built on each other's ideas across a back-and-forth, instead of the AI just doing the work. I ran it end to end, from the question to the analysis.",
    tags: ["synergy", "creativity", "arXiv 2025"],
    links: [{ label: "Read paper", href: "https://arxiv.org/abs/2510.27681" }], // TODO: confirm
  },
];

// ── Building — the Myndgard / applied work ───────────────────────────────────
export const building = [
  {
    id: "discover",
    title: "Discover",
    status: "Deployed",
    blurb:
      "A 12-day, 38-module mental-health course. An AI pipeline writes the content for a range of student backgrounds and checks its own quality. 90% of students improved on mental-health measures.",
    tags: ["AI content pipeline", "psychoeducation"],
    href: "https://myndgard-discover.com",
  },
  {
    id: "share",
    title: "Share",
    status: "Deployed",
    blurb:
      "Monitors each student's mental health during the wait for care and flags those who are deteriorating to the clinic manager — so students getting worse are seen sooner, not triaged by who booked first. It also gives the therapist a pre-session summary. In production with university counseling services; 15–20% shorter initial sessions and fewer total sessions per student.",
    tags: ["waitlist monitoring", "deterioration detection", "clinician-in-the-loop", "university counseling"],
    href: "",
  },
  {
    id: "guardian",
    title: "Guardian",
    status: "In development",
    blurb:
      "Watches a teenager's conversations with AI companions for signs of harm, and runs on the device itself so the conversations never leave it.",
    tags: ["on-device", "AI safety", "adolescents"],
    href: "",
  },
  {
    id: "discover-family",
    title: "Discover Family",
    status: "In development",
    blurb:
      "A 10-module course that teaches teens (13+) to spot the ways AI companions can go wrong — flattery, growing attachment, blurred personas, being pulled away from real relationships, and bad responses in a crisis. Each module has scenarios to work through and an AI coach to talk them over with.",
    tags: ["AI companion safety", "adolescents", "PWA"],
    href: "https://myndgard-discover-family.onrender.com/",
  },
];

export const publications = [
  {
    authors: "Kelley, S. W., & Riedl, C.",
    year: "2026",
    title:
      "Personalization Increases Affective Alignment but Has Role-Dependent Effects on Epistemic Independence in LLMs.",
    venue: "arXiv:2603.00024",
    note: "under review",
    href: "https://arxiv.org/abs/2603.00024",
  },
  {
    authors: "Kelley, S., De Cremer, D., & Riedl, C.",
    year: "2025",
    title:
      "Personalized AI Scaffolds Synergistic Multi-Turn Collaboration in Creative Work.",
    venue: "arXiv:2510.27681",
    note: "under review",
    href: "https://arxiv.org/abs/2510.27681",
  },
  {
    authors: "Kelley, S. W., et al.",
    year: "2023",
    title:
      "Elevated emotion network connectivity is associated with fluctuations in depression.",
    venue: "PNAS, 120(45)",
    note: "",
    href: "https://www.pnas.org/doi/10.1073/pnas.2216499120",
  },
  {
    authors: "Kelley, S. W., & Gillan, C. M.",
    year: "2022",
    title:
      "Using language in social media posts to study the network dynamics of depression longitudinally.",
    venue: "Nature Communications, 13(1)",
    note: "",
    href: "https://www.nature.com/articles/s41467-022-28513-3",
  },
  {
    authors: "Kelley, S. W., et al.",
    year: "2022",
    title:
      "Machine learning of language use on Twitter reveals weak and non-specific predictions.",
    venue: "NPJ Digital Medicine, 5(1)",
    note: "",
    href: "https://www.nature.com/articles/s41746-022-00576-y",
  },
];

export const experience = [
  {
    role: "Postdoctoral Research Fellow, Human–AI Interaction",
    org: "Northeastern University · Network Science Institute",
    period: "Sep 2024 — Present",
  },
  {
    role: "Co-founder & Technical Lead",
    org: "Myndgard",
    period: "Dec 2022 — Present",
  },
  {
    role: "PhD Researcher, Computational Psychiatry",
    org: "Trinity College Dublin",
    period: "Oct 2018 — Dec 2022",
  },
];

export const education = [
  { degree: "PhD, Psychology", org: "Trinity College Dublin", year: "2023" },
  {
    degree: "MSc, Medical Neurosciences",
    org: "Charité — Universitätsmedizin Berlin",
    year: "2018",
  },
  {
    degree: "BS, Neuroscience & Behavioral Biology (Highest Honors)",
    org: "Emory University",
    year: "2016",
  },
];

export const grants = [
  { name: "Enterprise Ireland Commercialisation Fund", detail: "$629K · PI" },
  { name: "Enterprise Ireland Proof of Concept", detail: "$143K · PI" },
  { name: "Enterprise Ireland Feasibility Study", detail: "$16K · PI" },
  { name: "Schmidt Sciences — AI at Work", detail: "$10K · PI" },
  { name: "Trinity College Dublin Provost's PhD Award", detail: "$132K" },
  { name: "NeuroCure Cluster of Excellence Scholarship", detail: "$14K" },
  { name: "EIT Health Wild Card", detail: "1 of 8 EU startups" },
  { name: "Dogpatch Labs Founders Programme", detail: "Resident" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  LAB — self-contained mini-experiments. Each is a question → build → finding.
//  Full interactive writeups live as static pages under /public/experiments/.
// ─────────────────────────────────────────────────────────────────────────────
export const labIntro =
  "Side projects I build to answer questions I'm curious about. Usually quick: make something, run it, see if the idea holds up. Most go nowhere. The ones that found something interesting are below.";

export const experiments = [
  {
    id: "clinical-intake",
    title: "What can an LLM intake agent surface that the patient never volunteers?",
    eyebrow: "LLM evaluation · clinical intake · synthetic patients",
    status: "Write-up live",
    // The setup / what I built.
    method:
      "I set up a fake patient — a GPT-4o model that role-plays someone with a main complaint plus 4–5 hidden symptoms it will only mention if asked about them directly. Five different models then each play the clinician, running a 12-turn intake from the same plain “you are a clinician” prompt. That's 540 interviews in all (18 patient types × 5 models × 6 patients each), and two other models (Gemini 3 Flash and Claude Sonnet 4.6) score how many of the hidden symptoms each interview got the patient to reveal.",
    // The finding.
    finding:
      "What mattered was whether the model could reason — not its size, and not the prompt. Regular chat models found only 14–18% of the hidden symptoms. A small reasoning model found 27%, and a large one (Kimi K2.6) found 56%, about three times the next best, asking specific follow-up questions on its own without being told to. It did best on exactly the cases that are hardest to catch in real life: masked presentations like bipolar, postpartum, and somatic ones, where the chat models found almost nothing.",
    // Limitations.
    caveat:
      "The patients are simulated, so don't read too much into the exact percentages. The gap between the models is the real result: the reasoning ones ask questions the chat models don't.",
    stats: [
      { value: "14–18%", label: "standard chat models" },
      { value: "27%", label: "small reasoning (Qwen 3 8B)" },
      { value: "56%", label: "large reasoning (Kimi K2.6)" },
    ],
    tags: ["540-cell eval", "synthetic patients", "LLM-as-judge", "reasoning vs. chat"],
    // Links into the hosted static write-up.
    links: [
      { label: "Read the full analysis", href: "/experiments/clinical-intake/results.html", primary: true },
      { label: "Study design", href: "/experiments/clinical-intake/study_design.html" },
      { label: "Prompts", href: "/experiments/clinical-intake/prompts.html" },
    ],
  },
];
