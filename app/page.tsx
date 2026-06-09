import Reveal from "@/components/Reveal";
import {
  profile,
  about,
  research,
  building,
  publications,
  experience,
  education,
  grants,
} from "./content";

const ArrowUpRight = () => (
  <svg className="arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="dot" />
            sean.kelley
          </a>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#research">research</a>
            <a href="#building">building</a>
            <a href="/side-projects">side projects</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="shell">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <header className="hero">
          {profile.status && (
            <div className="status">
              <span className="live" />
              {profile.status} · {profile.location}
            </div>
          )}
          <h1>
            Sean W. Kelley<span className="cursor" />
            <br />
            <span className="ln2">{profile.tag}.</span>
          </h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-sub">{profile.subhead}</p>
          <div className="hero-meta">
            <a className="btn primary" href="#contact">
              Get in touch <ArrowUpRight />
            </a>
            <a className="btn" href="#research">
              See the work
            </a>
            {profile.links.scholar && (
              <a className="btn" href={profile.links.scholar} target="_blank" rel="noreferrer">
                Scholar <ArrowUpRight />
              </a>
            )}
          </div>
        </header>

        {/* ── About ─────────────────────────────────────────────────────────── */}
        <section id="about">
          <Reveal className="sec-head">
            <h2>What I do</h2>
            <span className="sec-index">01 / about</span>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-body">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="facts" delay={120}>
              <div className="row">
                <span className="k">Now</span>
                <span className="v">
                  Postdoctoral Fellow
                  <small>Northeastern · Network Science Institute</small>
                </span>
              </div>
              <div className="row">
                <span className="k">Founder</span>
                <span className="v">
                  Co-founder & Technical Lead
                  <small>
                    <a className="inline-link" href={profile.links.myndgard} target="_blank" rel="noreferrer">
                      Myndgard ↗
                    </a>
                  </small>
                </span>
              </div>
              <div className="row">
                <span className="k">Trained</span>
                <span className="v">
                  PhD, Computational Psychiatry
                  <small>Trinity College Dublin</small>
                </span>
              </div>
              <div className="row">
                <span className="k">Funding raised</span>
                <span className="v">
                  $790K+ as PI
                  <small>across 4 competitive grants</small>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Research ──────────────────────────────────────────────────────── */}
        <section id="research">
          <Reveal className="sec-head">
            <h2>Research & evaluation</h2>
            <span className="sec-index">02 / measuring model behavior</span>
          </Reveal>
          <div className="cards">
            {research.map((r, i) => (
              <Reveal key={r.id} className="card" delay={(i % 2) * 90}>
                <div className="card-top">
                  <span className="card-kind">{r.kind}</span>
                </div>
                <h3>{r.title}</h3>
                <p>{r.blurb}</p>
                <div className="tags">
                  {r.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                {r.links && r.links.length > 0 && (
                  <div className="card-links">
                    {r.links.map((l) => (
                      <a
                        key={l.href}
                        className="card-linkchip"
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Building ──────────────────────────────────────────────────────── */}
        <section id="building">
          <Reveal className="sec-head">
            <h2>Building</h2>
            <span className="sec-index">03 / shipped & in flight</span>
          </Reveal>
          <div className="cards">
            {building.map((b, i) => (
              <Reveal key={b.id} className="card" delay={(i % 2) * 90}>
                <div className="card-top">
                  <span className="card-kind">Myndgard</span>
                  <span className={`pill ${b.status === "Deployed" ? "deployed" : ""}`}>
                    {b.status}
                  </span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.blurb}</p>
                <div className="tags">
                  {b.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                {b.href && (
                  <>
                    <span className="extlink">
                      visit site <ArrowUpRight />
                    </span>
                    <a className="card-link" href={b.href} target="_blank" rel="noreferrer" aria-label={b.title} />
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Publications ──────────────────────────────────────────────────── */}
        <section id="writing">
          <Reveal className="sec-head">
            <h2>Selected publications</h2>
            <span className="sec-index">04 / peer-reviewed & preprint</span>
          </Reveal>
          <div className="pubs">
            {publications.map((p, i) => {
              const inner = (
                <>
                  <span className="year">{p.year}</span>
                  <span>
                    <span className="title">{p.title}</span>
                    <span className="authors">{p.authors}</span>
                  </span>
                  <span className="venue">
                    {p.venue}
                    {p.note && <span className="note">{p.note}</span>}
                  </span>
                </>
              );
              return (
                <Reveal key={i} className="pub-wrap" delay={i * 40}>
                  {p.href ? (
                    <a className="pub" href={p.href} target="_blank" rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div className="pub">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Side projects teaser ──────────────────────────────────────────── */}
        <section id="side-projects-teaser">
          <Reveal className="lab-teaser">
            <div>
              <span className="eyebrow">
                <span className="bar" /> side projects
              </span>
              <p className="lab-teaser-line">
                Mini-experiments — like measuring what an LLM intake agent can
                surface that a patient never volunteers.
              </p>
            </div>
            <a className="btn primary" href="/side-projects">
              See the side projects <ArrowUpRight />
            </a>
          </Reveal>
        </section>

        {/* ── Background ────────────────────────────────────────────────────── */}
        <section id="background">
          <Reveal className="sec-head">
            <h2>Background</h2>
            <span className="sec-index">05 / experience · education · grants</span>
          </Reveal>
          <Reveal className="dual">
            <div className="block">
              <h4>Experience</h4>
              {experience.map((e, i) => (
                <div className="line" key={i}>
                  <div className="lt">{e.role}</div>
                  <div className="lo">{e.org}</div>
                  <div className="lp">{e.period}</div>
                </div>
              ))}
              <div className="block" style={{ marginTop: 36 }}>
                <h4>Education</h4>
                {education.map((e, i) => (
                  <div className="line" key={i}>
                    <div className="lt">{e.degree}</div>
                    <div className="lo">
                      {e.org} · {e.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="block">
              <h4>Grants & awards</h4>
              {grants.map((g, i) => (
                <div className="grant-row" key={i}>
                  <span>{g.name}</span>
                  <span className="gd">{g.detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────────── */}
        <section id="contact" className="contact">
          <Reveal>
            <span className="eyebrow">
              <span className="bar" /> let&apos;s talk
            </span>
            <h2 style={{ marginTop: 22 }}>
              Building something that needs
              <br />
              rigor and a researcher?
            </h2>
            <a className="email-btn" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="social">
              {profile.links.linkedin && (
                <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight />
                </a>
              )}
              {profile.links.github && (
                <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight />
                </a>
              )}
              {profile.links.scholar && (
                <a className="btn" href={profile.links.scholar} target="_blank" rel="noreferrer">
                  Scholar <ArrowUpRight />
                </a>
              )}
              {profile.links.arxiv && (
                <a className="btn" href={profile.links.arxiv} target="_blank" rel="noreferrer">
                  arXiv <ArrowUpRight />
                </a>
              )}
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <span>© {profile.name} · {new Date().getFullYear()}</span>
          <a className="foot-link" href={profile.links.myndgard} target="_blank" rel="noreferrer">
            Myndgard ↗
          </a>
        </footer>
      </main>
    </>
  );
}
