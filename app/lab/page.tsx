import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { profile, labIntro, experiments } from "../content";

export const metadata: Metadata = {
  title: `Lab — ${profile.name}`,
  description: labIntro,
};

const ArrowUpRight = () => (
  <svg className="arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function Lab() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="brand">
            <span className="dot" />
            sean.kelley
          </a>
          <div className="nav-links">
            <a href="/#about">about</a>
            <a href="/#research">research</a>
            <a href="/#building">building</a>
            <a href="/lab">lab</a>
            <a href="/#contact">contact</a>
          </div>
        </div>
      </nav>

      <main className="shell">
        <header className="hero" style={{ paddingBottom: "clamp(32px,5vh,56px)" }}>
          <a href="/" className="back">
            ← back to home
          </a>
          <span className="eyebrow" style={{ marginTop: 22 }}>
            <span className="bar" /> lab · experiments
          </span>
          <h1 style={{ fontSize: "clamp(40px,7vw,78px)", marginTop: 18 }}>
            Things I built
            <br />
            <span className="ln2">to answer a question.</span>
          </h1>
          <p className="hero-sub">{labIntro}</p>
        </header>

        {experiments.map((x, i) => (
          <section key={x.id} id={x.id} style={{ borderTop: "1px solid var(--hair)" }}>
            <Reveal>
              <div className="exp-head">
                <span className="card-kind">{x.eyebrow}</span>
                <span className="pill deployed">{x.status}</span>
              </div>
              <h2 className="exp-title">{x.title}</h2>
            </Reveal>

            <div className="exp-grid">
              <Reveal className="exp-body" delay={80}>
                <div className="qa">
                  <h4>What I built</h4>
                  <p>{x.method}</p>
                </div>
                <div className="qa qa-key">
                  <h4>What I found</h4>
                  <p>{x.finding}</p>
                </div>
                <div className="qa">
                  <h4>Limitations</h4>
                  <p className="muted">{x.caveat}</p>
                </div>
                <div className="exp-links">
                  {x.links.map((l) => (
                    <a
                      key={l.href}
                      className={`btn ${l.primary ? "primary" : ""}`}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal className="exp-side" delay={160}>
                <div className="stat-stack">
                  {x.stats.map((s) => (
                    <div className="stat" key={s.label}>
                      <span className="stat-v">{s.value}</span>
                      <span className="stat-l">{s.label}</span>
                    </div>
                  ))}
                  <span className="stat-note">hidden-symptom coverage, same prompt</span>
                </div>
                <div className="tags exp-tags">
                  {x.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        ))}

        <footer className="footer">
          <span>© {profile.name} · {new Date().getFullYear()}</span>
          <a href="/">home →</a>
        </footer>
      </main>
    </>
  );
}
