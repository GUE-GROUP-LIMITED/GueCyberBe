import "./mockupLanding.css";

const credentials = [
  {
    title: "MSc Information Security & Digital Forensics",
    text: "Academic grounding that supports practical advisory work across IT, software, and security awareness.",
  },
  {
    title: "BeCode and VDAB training",
    text: "Additional professional development in cybersecurity and technical delivery within the Belgian context.",
  },
  {
    title: "Instructor and mentor experience",
    text: "Experience guiding hundreds of learners through software development, tooling, and technical problem solving.",
  },
  {
    title: "Founder-led delivery",
    text: "Clients work directly with Gabriel, which keeps communication shorter and implementation more direct.",
  },
];

const principles = [
  {
    title: "Practical first",
    text: "Advice should map to implementation and be realistic for the size of the organisation receiving it.",
  },
  {
    title: "Clear communication",
    text: "Technical work is most useful when decisions, tradeoffs, and next steps are easy to understand.",
  },
  {
    title: "Build and support",
    text: "The work spans strategy, implementation, QA, and operational help rather than stopping at diagnosis.",
  },
];

export default function About() {
  return (
    <div className="mockup-landing page-shell">
      <section className="page-hero">
        <div className="page-grid"></div>
        <div className="page-glow"></div>
        <div className="page-wrap">
          <div className="page-copy">
            <div className="hero-badge">🇧🇪 About Gue Cyber · Founder-Led · Belgium</div>
            <h1>Direct, Personal Service From Someone Who Builds</h1>
            <p>
              Gue Cyber is a Belgium-based zelfstandige focused on practical IT consultancy, software development,
              testing support, and security awareness. The model is intentionally lean: direct access, less overhead,
              and delivery anchored in real technical work.
            </p>
            <div className="hero-actions" style={{ marginTop: "32px" }}>
              <a href="/contact" className="btn-primary">Start a Conversation</a>
              <a href="/services" className="btn-ghost">View Services</a>
            </div>
          </div>

          <aside className="page-panel">
            <div className="section-label">// Snapshot</div>
            <h2>Gue Cyber today</h2>
            <ul className="page-list">
              <li><strong>Founded in Belgium</strong>Operating from Avelgem, West Flanders as a one-person business.</li>
              <li><strong>Cross-functional work</strong>IT support, software delivery, QA, cloud setup, and security guidance.</li>
              <li><strong>Built around clarity</strong>Small teams benefit most from fewer layers and faster communication.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="compact-section">
        <div className="section-label">// Background</div>
        <div className="section-title">Technical Delivery With Security Context</div>
        <p className="section-sub">
          The goal is not to present a large-agency profile. It is to offer a founder-led service model where technical,
          product, and operational discussions can happen in one place.
        </p>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">2026</div>
            <div className="why-title">Gue Cyber Belgium</div>
            <p className="why-desc">Established in Avelgem as a zelfstandige focused on practical digital support and technical delivery.</p>
          </div>
          <div className="why-card">
            <div className="why-num">MSc</div>
            <div className="why-title">Security and Forensics</div>
            <p className="why-desc">A formal information security background supports the advisory side of broader IT and software work.</p>
          </div>
          <div className="why-card">
            <div className="why-num">500+</div>
            <div className="why-title">Learners Mentored</div>
            <p className="why-desc">Training and mentoring experience shapes how technical guidance is communicated to clients.</p>
          </div>
          <div className="why-card">
            <div className="why-num">1×</div>
            <div className="why-title">Founder-Led Model</div>
            <p className="why-desc">No handoff chain. The same person discussing the work is the one shaping and delivering it.</p>
          </div>
        </div>

        <div className="about-stats" style={{ marginTop: "56px", maxWidth: "720px" }}>
          <div className="stat-card"><div className="stat-val">EN/NL</div><strong>Languages</strong><div className="stat-label">Working with English and Dutch-speaking clients in Belgium.</div></div>
          <div className="stat-card"><div className="stat-val">SME</div><strong>Client fit</strong><div className="stat-label">Built for smaller organisations that need direct, adaptable support.</div></div>
          <div className="stat-card"><div className="stat-val">QA</div><strong>Delivery range</strong><div className="stat-label">From product support and testing through to implementation help.</div></div>
          <div className="stat-card"><div className="stat-val">EU</div><strong>Context</strong><div className="stat-label">Belgium-based with EU regulatory awareness including NIS2 and GDPR basics.</div></div>
        </div>
      </section>

      <section className="services-bg compact-section">
        <div className="section-label">// Credentials</div>
        <div className="section-title">Relevant Experience, Kept Close To The Work</div>
        <div className="page-columns" style={{ marginTop: "40px" }}>
          {credentials.map((credential) => (
            <div className="service-card" key={credential.title}>
              <div className="service-title">{credential.title}</div>
              <p className="service-desc">{credential.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="compact-section">
        <div className="section-label">// Working Principles</div>
        <div className="section-title">How Gue Cyber Approaches Client Work</div>
        <div className="page-columns" style={{ marginTop: "40px" }}>
          {principles.map((principle) => (
            <div className="why-card" key={principle.title}>
              <div className="why-title">{principle.title}</div>
              <p className="why-desc">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="section-label">// Next Step</div>
        <div className="section-title">If You Need A Direct Technical Partner, Start There</div>
        <p className="section-sub">The fastest way to work out fit is a short conversation around your current problem, project, or delivery bottleneck.</p>
        <div className="cta-actions">
          <a href="/contact" className="btn-primary">Contact Gue Cyber</a>
          <a href="/assessment" className="btn-ghost">Book an Assessment</a>
        </div>
      </section>
    </div>
  );
}
