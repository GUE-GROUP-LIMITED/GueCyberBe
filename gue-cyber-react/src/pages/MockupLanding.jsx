import "./mockupLanding.css";

export default function MockupLanding() {
  return (
    <div className="mockup-landing">
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-badge">🇧🇪 Registered Enterprise · Belgium</div>
          <h1>Your Cybersecurity<br />Partner in <em>Belgium</em></h1>
          <p className="hero-sub">
            We protect SMEs and organisations from cyber threats through vCISO services,
            NIS2 compliance consulting, penetration testing, and our own threat intelligence platform — GueInsight.
          </p>
          <div className="hero-nis2">
            ⚠️ <strong>NIS2 is now in force across the EU.</strong> Belgian businesses must comply — or face fines up to €10M.
            We help you get there, fast.
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
          Registered Belgian Enterprise
        </div>
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
          15+ Years in Cybersecurity
        </div>
        <div className="trust-item">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 6.075-4.925 11-11 11S1 19.075 1 13c0-.65.062-1.285.18-1.9L12 14z" /></svg>
          MSc Information Security & Digital Forensics
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
        <p className="section-sub">From executive security leadership to hands-on penetration testing — we cover the full spectrum so your business stays protected and compliant.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <div className="service-title">vCISO as a Service</div>
            <p className="service-desc">Get executive-level cybersecurity leadership without the full-time cost. We act as your Virtual CISO — setting strategy, managing risk, and reporting to your board.</p>
            <span className="service-tag">FRACTIONAL · ON-DEMAND</span>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <div className="service-title">NIS2 Compliance</div>
            <p className="service-desc">NIS2 is now law. We assess your current posture, identify gaps, and implement the controls you need to comply — and stay compliant.</p>
            <span className="service-tag">NIS2 · CYFUN · ISO 27001</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <div className="service-title">Penetration Testing</div>
            <p className="service-desc">We simulate real-world attacks against your systems, applications, and infrastructure to find vulnerabilities before attackers do.</p>
            <span className="service-tag">NETWORK · WEB APP · CLOUD</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🏗️</div>
            <div className="service-title">Security Architecture</div>
            <p className="service-desc">Design and review of your security architecture — from network segmentation and identity management to cloud security and DevSecOps practices.</p>
            <span className="service-tag">ARCHITECTURE · REVIEW · DESIGN</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🚨</div>
            <div className="service-title">Incident Response</div>
            <p className="service-desc">Contain threats fast, preserve evidence, and recover with confidence. We provide both IR planning and hands-on support when incidents happen.</p>
            <span className="service-tag">IR PLANNING · RESPONSE · RECOVERY</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <div className="service-title">Security Awareness Training</div>
            <p className="service-desc">Your staff are your first line of defence. We deliver practical training programmes that change behaviour and reduce your human-factor risk.</p>
            <span className="service-tag">STAFF · MANAGEMENT · BOARD</span>
          </div>
        </div>
      </section>

      <section id="nis2">
        <div className="nis2-banner">
          <div className="nis2-text">
            <h3>⚠️ Is Your Business NIS2 Compliant?</h3>
            <p>The NIS2 Directive is now enforced across Belgium. Organisations in critical sectors face fines of up to <strong style={{ color: "#FF7070" }}>€10 million</strong> for non-compliance. Many Belgian SMEs don't know where to start — we do.</p>
          </div>
          <a href="/assessment" className="btn-primary" style={{ flexShrink: 0 }}>Get a NIS2 Assessment →</a>
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
        <div className="section-title">Senior Expertise,<br />Without the Overhead</div>
        <p className="section-sub">You work directly with the founder — a 15-year cybersecurity veteran — not a junior analyst.</p>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">15+</div>
            <div className="why-title">Years of Founder Experience</div>
            <p className="why-desc">Founded Gue Cyber in 2010. Decades of hands-on experience across information security, digital forensics, and security architecture.</p>
          </div>
          <div className="why-card">
            <div className="why-num">MSc</div>
            <div className="why-title">Information Security & Digital Forensics</div>
            <p className="why-desc">Master's degree from the University of East London, with ongoing research in AI, NLP, and privacy-preserving machine learning.</p>
          </div>
          <div className="why-card">
            <div className="why-num">🇧🇪</div>
            <div className="why-title">Registered in Belgium</div>
            <p className="why-desc">Gue Cyber is a registered Belgian enterprise based in Avelgem (West Flanders). VDAB cybersecurity certified. English and Dutch speaking.</p>
          </div>
          <div className="why-card">
            <div className="why-num">1×</div>
            <div className="why-title">Founder-Led, Always</div>
            <p className="why-desc">When you engage Gue Cyber, you get Gabriel directly. No handoffs to juniors. Senior expertise on every engagement.</p>
          </div>
        </div>

        <div className="about-stats" style={{ marginTop: "56px", maxWidth: "680px" }}>
          <div className="stat-card"><div className="stat-val">2010</div><div className="stat-label">Year Gue Cyber was founded</div></div>
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
