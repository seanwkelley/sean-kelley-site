// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit everything here. No code knowledge needed.
//  Lines marked  // TODO  are placeholders to confirm or fill in.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Sean W. Kelley",
  surnameInitial: "PhD",
  // The short eyebrow above your name, terminal-style.
  tag: "AI evaluation · behavioral science",
  // Location shown by the status dot.
  location: "Boston, MA", // TODO: confirm city
  status: "Open to research & data science roles", // TODO: edit or set to "" to hide
  // The big headline. Keep it one strong sentence.
  headline:
    "I build rigorous evaluations for how AI systems behave — and the tools that put that science into practice.",
  // One supporting paragraph under the headline.
  subhead:
    "Postdoctoral researcher at Northeastern's Network Science Institute and co-founder of Myndgard. I turn fuzzy concerns about model behavior — sycophancy, epistemic independence, causal coherence — into measurable benchmarks, and ship AI tools for mental health that clinicians actually use.",
  email: "seanwk21@gmail.com",
  phone: "+1 310 567 6740", // TODO: remove if you'd rather not list it publicly
  links: {
    scholar: "https://scholar.google.com/citations?user=ETfHI60AAAAJ&hl=en", // Google Scholar
    github: "", // TODO: GitHub URL
    linkedin: "https://www.linkedin.com/in/sean-w-kelley/", // LinkedIn
    arxiv: "", // set to your arXiv author page URL to show the button
    myndgard: "https://myndgard.com", // company site (distinct from the Discover product)
  },
};

export const about = [
  "I'm an interdisciplinary researcher working at the seam between AI evaluation and human behavior. My PhD is in psychology with a computational-psychiatry focus — building machine-learning and network models of mental health from real longitudinal data, with first-author work in Nature Communications, PNAS, and NPJ Digital Medicine.",
  "Today I design evaluation harnesses that operationalize nebulous claims about LLM behavior into comparable, reproducible metrics across frontier models. Alongside that, I co-founded Myndgard, where the same rigor goes into shipping AI safety and psychoeducation tools deployed with university counseling services.",
  "The throughline: take something everyone worries about but no one measures, make it measurable, then build the thing that acts on the measurement.",
];

// ── Research — the evaluation / academic work ────────────────────────────────
export const research = [
  {
    id: "goalpref",
    title: "GoalPref-Bench",
    kind: "Evaluation harness",
    blurb:
      "A benchmark measuring how nine frontier LLMs trade a user's actual goals against sycophantic agreement — turning a core alignment worry into a single comparable cross-model metric.",
    tags: ["LLM eval", "sycophancy", "9 models"],
    href: "https://github.com/seanwkelley/GoalPref-Bench",
  },
  {
    id: "causal-coherence",
    title: "Causal-Coherence Probing",
    kind: "Framework + study",
    blurb:
      "Elicits structured causal models from LLMs, computes the graph-theoretic importance of each factor, then generates targeted challenges to test whether belief updates track structural significance. Run across seven models and hundreds of forecasting questions with test–retest reliability and placebo controls.",
    tags: ["causal reasoning", "DAGs", "7 models"],
    href: "https://github.com/seanwkelley/causal-forecast-lab",
  },
  {
    id: "epistemic-independence",
    title: "Personalization & Epistemic Independence",
    kind: "Controlled experiments",
    blurb:
      "Experiments on how personalization reshapes a model's epistemic independence and affective alignment — finding that personalization increases affective alignment but has role-dependent effects on sycophancy.",
    tags: ["personalization", "alignment", "arXiv 2026"],
    href: "https://arxiv.org/abs/2603.00024", // TODO: confirm
  },
  {
    id: "creative-collaboration",
    title: "Personalized AI for Creative Work",
    kind: "Human–AI collaboration",
    blurb:
      "A study with hundreds of participants showing that personalized AI scaffolds synergistic, multi-turn human–AI collaboration in creative tasks. Owned end to end, from research question through analysis and writeup.",
    tags: ["synergy", "creativity", "arXiv 2025"],
    href: "https://arxiv.org/abs/2510.27681", // TODO: confirm
  },
];

// ── Building — the Myndgard / applied work ───────────────────────────────────
export const building = [
  {
    id: "discover",
    title: "Discover",
    status: "Deployed",
    blurb:
      "A 12-day, 38-module psychoeducation product driven by an AI content pipeline with persona-based diversity sampling and automated quality checks. 90% of students showed measurable mental-health improvement.",
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
      "An on-device AI safety agent that monitors adolescent conversations with AI companions for emerging harm, designed to run privately on the device rather than in the cloud.",
    tags: ["on-device", "AI safety", "adolescents"],
    href: "",
  },
  {
    id: "discover-family",
    title: "Discover Family",
    status: "In development",
    blurb:
      "A 10-module web curriculum that teaches adolescents (13+) to recognize specific risk patterns in AI-companion conversations — sycophancy, parasocial attachment, persona dynamics, isolation, and crisis-response failures — with scripted scenarios, an LLM reflection coach, and opt-in adaptive practice sandboxes.",
    tags: ["AI companion safety", "adolescents", "PWA"],
    href: "", // TODO: live URL once it's public (Render service is up; subdomain TBD)
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
  { name: "Schmidt Sciences — AI at Work", detail: "$10K · PI" },
  { name: "Trinity College Dublin Provost's PhD Award", detail: "$132K" },
  { name: "NeuroCure Cluster of Excellence Scholarship", detail: "$14K · Medical Neurosciences" },
  { name: "EIT Health Wild Card", detail: "1 of 8 EU startups" },
  { name: "Dogpatch Labs Founders Programme", detail: "Resident" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  LAB — self-contained mini-experiments. Each is a question → build → finding.
//  Full interactive writeups live as static pages under /public/experiments/.
// ─────────────────────────────────────────────────────────────────────────────
export const labIntro =
  "Short experiments I run to probe a question end to end — build the harness, measure something, see what falls out. Exploratory by design; some are dead ends, the interesting ones are written up below.";

export const experiments = [
  {
    id: "clinical-intake",
    title: "What can an LLM intake agent surface that the patient never volunteers?",
    eyebrow: "LLM evaluation · clinical intake · synthetic patients",
    status: "Write-up live",
    // The setup / what I built.
    method:
      "I built a synthetic-patient harness: a GPT-4o model role-plays a patient with a presenting complaint plus 4–5 hidden symptom domains it will only reveal if asked specifically (a strict disclosure rule). Five LLM “clinicians” each run a 12-turn intake on the same minimal “you are a clinician” prompt. 540 cells (18 phenotypes × 5 models × 6 profiles), dual-judged by Gemini 3 Flash and Claude Sonnet 4.6, scoring how many hidden domains each interview actually surfaces.",
    // The finding.
    finding:
      "Reasoning is the variable that matters — not model size, and not the prompt. Standard chat models surfaced only 14–18% of hidden symptoms; a small reasoning model reached 27%, and a large one (Kimi K2.6) reached 56% — roughly 3× the next best — spontaneously asking symptom-specific questions across nearly all domains without being told to. The gains concentrated exactly where it counts clinically: masked presentations like bipolar, postpartum, and somatic cases, where chat models scored near zero.",
    // Limitations.
    caveat:
      "Patients are simulated, so the absolute percentages aren't real-world forecasts; the supported claim is relative — reasoning models produce probing behavior the chat models simply don't.",
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
