import "./mockupLanding.css";

export default function MockupLanding() {
  return (
    <div className="mockup-landing">
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-badge">🇧🇪 Zelfstandige · Avelgem, West Flanders · Belgium</div>
          <h1>
            <span className="hero-line">Your Cybersecurity</span>
            <span className="hero-line">Partner in <em>Belgium</em></span>
          </h1>
          <p className="hero-sub">
            We help Belgian SMEs and individuals with IT support, software development, and technology consultancy
            backed by an MSc in Information Security and a passion for building practical digital solutions.
          </p>
          <div className="hero-nis2">
            ℹ️ <strong>NIS2 &amp; GDPR awareness matters.</strong> We can help your team understand the basics and point you to the
            right resources and certified partners for full compliance delivery.
          </div>
          <div className="hero-actions">
            <a href="/assessment" className="btn-primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
              Book a Free Assessment
            </a>
            <a href="#gueinsight" className="btn-ghost">See GueInsight →</a>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Zelfstandige (Eenmanszaak) · Belgium
        </div>
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
          MSc Information Security &amp; Digital Forensics
        </div>
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 6.075-4.925 11-11 11S1 19.075 1 13c0-.65.062-1.285.18-1.9L12 14z" /></svg>
          BeCode &amp; VDAB Trained
        </div>
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
          English & Dutch Speaking
        </div>
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
          GueInsight — Own Threat Platform
        </div>
      </div>

      <section id="services" className="services-bg">
        <div className="section-label">// What We Do</div>
        <div className="section-title">Cybersecurity Services<br />Built for Belgian Organisations</div>
        <p className="section-sub">From practical IT support to software delivery and security awareness, we help small organisations move faster with direct technical support.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <div className="service-title">IT Consultancy</div>
            <p className="service-desc">Practical IT support and technology advice for individuals and small businesses. Software setup, systems help, hardware troubleshooting, and technology guidance.</p>
            <span className="service-tag">ZELFSTANDIGE · ON-DEMAND</span>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <div className="service-title">Software Development</div>
            <p className="service-desc">Full-stack development using .NET, Blazor, .NET MAUI, and web technologies. From small business websites to custom internal tools and cross-platform apps.</p>
            <span className="service-tag">.NET · BLAZOR · MAUI · WEB</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <div className="service-title">Software Testing &amp; QA</div>
            <p className="service-desc">Manual, exploratory, and regression testing for web and mobile applications. Clear bug reports with reproduction steps, screenshots, and videos.</p>
            <span className="service-tag">MANUAL · EXPLORATORY · REGRESSION</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🏗️</div>
            <div className="service-title">Cloud &amp; DevOps Support</div>
            <p className="service-desc">Help setting up Azure, GitHub Actions, CI/CD pipelines, and cloud infrastructure for small teams and projects. Practical, hands-on assistance.</p>
            <span className="service-tag">AZURE · GITHUB ACTIONS · CI/CD</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🚨</div>
            <div className="service-title">Security Awareness</div>
            <p className="service-desc">Basic security awareness guidance for small teams: good practices, password hygiene, phishing awareness, and understanding your digital risk. Backed by MSc-level knowledge.</p>
            <span className="service-tag">AWARENESS · EDUCATION · BASICS</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <div className="service-title">IT Training &amp; Mentoring</div>
            <p className="service-desc">Technology and software development training for individuals and teams. Experienced instructor with 500+ learners mentored through professional bootcamps.</p>
            <span className="service-tag">TRAINING · MENTORING · BOOTCAMP</span>
          </div>
        </div>
      </section>

      <section id="nis2">
        <div className="nis2-banner">
          <div className="nis2-text">
            <h3>ℹ️ Curious About NIS2 or GDPR?</h3>
            <p>NIS2 and GDPR affect many Belgian businesses. We can help you understand the basics and what questions to ask. For full compliance delivery, we can connect you with certified specialists.</p>
          </div>
          <a href="/assessment" className="btn-primary" style={{ flexShrink: 0 }}>Ask Us About NIS2 →</a>
        </div>
      </section>

      <section id="gueinsight" className="insight-section">
        <div className="insight-inner">
          <div>
            <div className="insight-badge">⚡ OUR PRODUCT</div>
            <div className="section-label">// Built In-House</div>
            <div className="section-title" style={{ marginBottom: "16px" }}>GueInsight</div>
            <p style={{ color: "var(--gray)", lineHeight: 1.75, marginBottom: "24px", fontSize: "1.05rem" }}>
              A subscription-based threat intelligence platform that gives your team and organisation real-time cybersecurity insights — built and operated entirely by Gue Cyber.
            </p>
            <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "32px" }}>
              Most cybersecurity consultants sell you their time. We also give you a tool. GueInsight delivers continuous threat analysis, security alerts, and intelligence reporting — so your team stays aware between engagements.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://insights.guecyber.com" target="_blank" rel="noreferrer" className="btn-primary">Try GueInsight →</a>
              <a href="#contact" className="btn-ghost">Request a Demo</a>
            </div>
          </div>
          <div className="insight-screen">
            <div className="screen-bar">
              <div className="screen-dot" style={{ background: "#FF5F57" }}></div>
              <div className="screen-dot" style={{ background: "#FFBD2E" }}></div>
              <div className="screen-dot" style={{ background: "#28CA41" }}></div>
              <div className="screen-url">insights.guecyber.com · Dashboard</div>
            </div>
            <div className="screen-body">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--cyan)", marginBottom: "16px" }}>
                THREAT INTELLIGENCE FEED — LIVE
              </div>
              <div className="screen-row"><span className="threat-label">Phishing Campaign Detected</span><span className="threat-badge high">HIGH</span></div>
              <div className="screen-row"><span className="threat-label">CVE-2025-4421 — Patch Available</span><span className="threat-badge med">MED</span></div>
              <div className="screen-row"><span className="threat-label">Suspicious Login Attempt</span><span className="threat-badge high">HIGH</span></div>
              <div className="screen-row"><span className="threat-label">SSL Certificate Expiring — 7d</span><span className="threat-badge med">MED</span></div>
              <div className="screen-row"><span className="threat-label">Firewall Rules — Last Updated</span><span className="threat-badge low">OK</span></div>
              <div className="screen-metric">
                <div>
                  <div className="metric-val">94</div>
                  <div className="metric-label">Security Score</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--gray)", fontFamily: "var(--font-mono)" }}>3 Alerts Active</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--gray)", marginTop: "4px" }}>Updated 2 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-label">// Why Gue Cyber</div>
        <div className="section-title">Direct, Personal Service<br />From Someone Who Builds</div>
        <p className="section-sub">You work directly with Gabriel, IT consultant, software developer, and MSc graduate in Information Security. No middlemen, no juniors, no overhead.</p>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">2026</div>
            <div className="why-title">Gue Cyber Belgium — Started May 2026</div>
            <p className="why-desc">Gue Cyber Belgium is a zelfstandige (eenmanszaak) established in May 2026 in Avelgem, West Flanders. IT consultancy and security awareness services backed by an MSc in Information Security &amp; Digital Forensics (UEL, 2025).</p>
          </div>
          <div className="why-card">
            <div className="why-num">MSc</div>
            <div className="why-title">Information Security & Digital Forensics</div>
            <p className="why-desc">Master's degree from the University of East London (2025), plus BeCode cybersecurity training and VDAB professional development in Belgium.</p>
          </div>
          <div className="why-card">
            <div className="why-num">🇧🇪</div>
            <div className="why-title">Based in Avelgem, West Flanders</div>
            <p className="why-desc">Operating locally in West Flanders. VDAB cybersecurity trained and BeCode certified. English native, Dutch basic (A2/B1). Serving clients in and around West Flanders.</p>
          </div>
          <div className="why-card">
            <div className="why-num">1×</div>
            <div className="why-title">Zelfstandige — You Work With Gabriel Directly</div>
            <p className="why-desc">Gue Cyber is a one-person eenmanszaak. When you contact us, you work directly with Gabriel, no middlemen and no juniors.</p>
          </div>
        </div>

        <div className="about-stats" style={{ marginTop: "56px", maxWidth: "680px" }}>
          <div className="stat-card"><div className="stat-val">2026</div><div className="stat-label">Gue Cyber Belgium established</div></div>
          <div className="stat-card"><div className="stat-val">NIS2</div><div className="stat-label">Compliance — our core focus for Belgian SMEs</div></div>
          <div className="stat-card"><div className="stat-val">EU</div><div className="stat-label">Serving clients across Belgium and Europe</div></div>
          <div className="stat-card"><div className="stat-val">EN/NL</div><div className="stat-label">Fully bilingual service delivery</div></div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="section-label">// Get Started</div>
        <div className="section-title">Ready to Secure<br />Your Organisation?</div>
        <p className="section-sub">Start with a free security assessment. We'll identify your biggest risks and show you exactly where to focus.</p>
        <div className="cta-actions">
          <a href="/assessment" className="btn-primary">📧 Book a Free Security Assessment</a>
          <a href="https://insights.guecyber.com" target="_blank" rel="noreferrer" className="btn-ghost">Try GueInsight →</a>
        </div>
        <p style={{ marginTop: "28px", fontSize: "0.82rem", color: "var(--gray)" }}>
          Or connect on <a href="https://www.linkedin.com/in/gabriel-aloho/" target="_blank" rel="noreferrer" style={{ color: "var(--cyan)", textDecoration: "none" }}>LinkedIn</a>
          {' '}· Based in Avelgem, West Flanders, Belgium
        </p>
      </section>

    </div>
  );
}
