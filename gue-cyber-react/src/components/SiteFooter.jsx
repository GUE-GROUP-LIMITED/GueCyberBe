import logo from "../assets/logo.png";
import "./SiteChrome.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="nav-logo nav-logo-image footer-logo" aria-label="Gue Cyber home">
            <span className="logo-mark">
              <img src={logo} alt="Gue Cyber" />
            </span>
            <span className="brand-name">Gue Cyber</span>
          </a>
          <p>Cybersecurity consultancy for Belgian organisations. vCISO services, NIS2 compliance, penetration testing, and threat intelligence.</p>
          <div className="company-info">
            <p>Doorniksesteenweg 3B bus 101, 8580 Avelgem</p>
            <p>Branch unit: GUE CYBER</p>
            <p>Enterprise number: BE1037163392</p>
            <p>Branch unit number: 2.388.233.238</p>
            <p>IBAN: BE89 7380 5441 3685</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="/#services">vCISO as a Service</a></li>
            <li><a href="/#services">NIS2 Compliance</a></li>
            <li><a href="/#services">Penetration Testing</a></li>
            <li><a href="/#services">Incident Response</a></li>
            <li><a href="/#services">Security Training</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>PRODUCT</h4>
          <ul>
            <li><a href="https://insights.guecyber.com" target="_blank" rel="noreferrer">GueInsight Platform</a></li>
            <li><a href="/#contact">Request Demo</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="https://www.gabrielaloho.com" target="_blank" rel="noreferrer">Gabriel Aloho</a></li>
            <li><a href="https://www.linkedin.com/in/gabriel-aloho/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Gue Cyber · Registered Enterprise, Belgium · Avelgem, West Flanders</span>
        <span><a href="https://www.guecyber.com" target="_blank" rel="noreferrer">guecyber.com</a></span>
      </div>
    </footer>
  );
}
