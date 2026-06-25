import "./mockupLanding.css";

const services = [
  {
    icon: "🛡️",
    title: "IT Consultancy",
    description:
      "Practical support for device setup, troubleshooting, software rollouts, and technology decisions for individuals and small teams.",
    tag: "ZELFSTANDIGE · ON-DEMAND",
  },
  {
    icon: "📋",
    title: "Software Development",
    description:
      "Custom internal tools, websites, and cross-platform apps using .NET, Blazor, .NET MAUI, and modern web technologies.",
    tag: ".NET · BLAZOR · MAUI · WEB",
  },
  {
    icon: "🔍",
    title: "Software Testing & QA",
    description:
      "Manual, exploratory, and regression testing with structured bug reports, evidence, and clear reproduction steps.",
    tag: "MANUAL · EXPLORATORY · REGRESSION",
  },
  {
    icon: "🏗️",
    title: "Cloud & DevOps Support",
    description:
      "Hands-on setup of Azure services, GitHub Actions, CI/CD pipelines, and lightweight cloud environments for growing teams.",
    tag: "AZURE · GITHUB ACTIONS · CI/CD",
  },
  {
    icon: "🚨",
    title: "Security Awareness",
    description:
      "Clear, practical guidance on phishing, passwords, MFA, device hygiene, and day-to-day digital risk for small organisations.",
    tag: "AWARENESS · EDUCATION · BASICS",
  },
  {
    icon: "🎓",
    title: "IT Training & Mentoring",
    description:
      "Structured training and one-to-one mentoring for software development, tooling, and digital skills improvement.",
    tag: "TRAINING · MENTORING · BOOTCAMP",
  },
];

const deliverySteps = [
  {
    title: "Assess the current setup",
    text: "We start with the systems, workflows, and constraints you already have instead of forcing a generic stack.",
  },
  {
    title: "Prioritise practical fixes",
    text: "The first recommendations focus on what reduces friction, risk, or manual effort fastest for your size of business.",
  },
  {
    title: "Implement with you",
    text: "Support does not stop at advice. We can help configure, test, document, and hand over the result cleanly.",
  },
  {
    title: "Leave you with clarity",
    text: "Every engagement should end with a clearer system, a defined next step, and less operational uncertainty.",
  },
];

export default function Services() {
  return (
    <div className="mockup-landing page-shell">
      <section className="page-hero">
        <div className="page-grid"></div>
        <div className="page-glow"></div>
        <div className="page-wrap">
          <div className="page-copy">
            <div className="hero-badge">🇧🇪 Services · Belgium · Direct Technical Delivery</div>
            <h1>Services Built For Real-World Operations, Not Slide Decks</h1>
            <p>
              Gue Cyber supports Belgian SMEs and individuals with practical IT consultancy, software delivery, testing,
              cloud setup, and security awareness. The focus is straightforward: make technology more usable, more
              reliable, and easier to operate.
            </p>
            <div className="hero-actions" style={{ marginTop: "32px" }}>
              <a href="/assessment" className="btn-primary">Book a Free Assessment</a>
              <a href="/contact" className="btn-ghost">Discuss Your Project</a>
            </div>
          </div>

          <aside className="page-panel">
            <div className="section-label">// Engagement Style</div>
            <h2>What to expect</h2>
            <p>
              Small teams usually need direct execution, clear guidance, and someone who can move between business needs
              and technical detail without overhead.
            </p>
            <ul className="page-list">
              <li><strong>Direct collaboration</strong>No account layers or handoffs before the work starts.</li>
              <li><strong>Flexible scope</strong>Suitable for one-off fixes, short projects, or ongoing support.</li>
              <li><strong>Practical outcomes</strong>Recommendations are tied to implementation, not just reports.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="services" className="services-bg compact-section">
        <div className="section-label">// Service Areas</div>
        <div className="section-title">Technical Support Across Delivery, Operations, and Security</div>
        <p className="section-sub">
          The work spans immediate operational support and longer-term build projects, with the same design language and
          practical delivery approach used across the site.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <p className="service-desc">{service.description}</p>
              <span className="service-tag">{service.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="nis2" className="compact-section">
        <div className="nis2-banner">
          <div className="nis2-text">
            <h3>NIS2 and GDPR, Explained Without the Noise</h3>
            <p>
              If you are unsure what applies to your business, Gue Cyber can help you understand the baseline, identify
              the obvious gaps, and connect you with specialist partners where formal compliance delivery is needed.
            </p>
          </div>
          <a href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Ask About Compliance Support</a>
        </div>
      </section>

      <section id="gueinsight" className="insight-section compact-section">
        <div className="insight-inner">
          <div>
            <div className="insight-badge">⚡ PRODUCT</div>
            <div className="section-label">// GueInsight</div>
            <div className="section-title">A Tool That Keeps Working Between Engagements</div>
            <p style={{ color: "var(--gray)", lineHeight: 1.75, marginBottom: "24px", fontSize: "1.05rem" }}>
              GueInsight is the in-house platform used to deliver continuous visibility, alerts, and threat-oriented
              reporting instead of relying only on ad hoc consulting time.
            </p>
            <div className="page-note">
              Useful when you want a clearer operational picture between meetings, especially for small teams without a
              dedicated internal security function.
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
              <a href="https://insights.guecyber.com" target="_blank" rel="noreferrer" className="btn-primary">Try GueInsight</a>
              <a href="/contact" className="btn-ghost">Request a Demo</a>
            </div>
          </div>
          <div className="insight-screen">
            <div className="screen-bar">
              <div className="screen-dot" style={{ background: "#FF5F57" }}></div>
              <div className="screen-dot" style={{ background: "#FFBD2E" }}></div>
              <div className="screen-dot" style={{ background: "#28CA41" }}></div>
              <div className="screen-url">insights.guecyber.com · Operational View</div>
            </div>
            <div className="screen-body">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--cyan)", marginBottom: "16px" }}>
                SIGNALS · STATUS · TIMELINE
              </div>
              <div className="screen-row"><span className="threat-label">Suspicious login activity</span><span className="threat-badge high">HIGH</span></div>
              <div className="screen-row"><span className="threat-label">Open-source dependency update</span><span className="threat-badge med">MED</span></div>
              <div className="screen-row"><span className="threat-label">Certificate renewal approaching</span><span className="threat-badge med">MED</span></div>
              <div className="screen-row"><span className="threat-label">Backup verification completed</span><span className="threat-badge low">OK</span></div>
              <div className="screen-row"><span className="threat-label">Mail security posture reviewed</span><span className="threat-badge low">OK</span></div>
              <div className="screen-metric">
                <div>
                  <div className="metric-val">94</div>
                  <div className="metric-label">Operational score</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--gray)", fontFamily: "var(--font-mono)" }}>3 active items</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--gray)", marginTop: "4px" }}>Updated 2 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compact-section">
        <div className="section-label">// Delivery Process</div>
        <div className="section-title">A Lean Way To Get Work Moving</div>
        <div className="page-columns" style={{ marginTop: "40px" }}>
          {deliverySteps.map((step) => (
            <div className="why-card" key={step.title}>
              <div className="why-title">{step.title}</div>
              <p className="why-desc">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="section-label">// Start Here</div>
        <div className="section-title">Need Support, Delivery, or a Clear Technical Direction?</div>
        <p className="section-sub">Start with an assessment or send a project outline. The first step should reduce uncertainty, not add more of it.</p>
        <div className="cta-actions">
          <a href="/assessment" className="btn-primary">Book a Free Assessment</a>
          <a href="/contact" className="btn-ghost">Contact Gue Cyber</a>
        </div>
      </section>
    </div>
  );
}
