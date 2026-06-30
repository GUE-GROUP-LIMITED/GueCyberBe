import logo from "../assets/logo.png";
import "./SiteChrome.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="nav-logo nav-logo-image footer-logo" aria-label="Gue Cyber home">
            <span className="logo-mark">
              <img src={logo} alt="" />
            </span>
            <span className="brand-name">Gue<span>Cyber</span></span>
          </a>
          <p>IT consultancy and technology services for individuals and SMEs in Belgium. Software development, IT support, security awareness, and the GueInsight platform.</p>
          <p style={{fontSize:'0.78rem', opacity:0.65, marginTop:'8px'}}>Doorniksesteenweg 3 bus B101 · 8580 Avelgem · BE · info@guecyber.com</p>
        </div>

        <div className="footer-links">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="/services">IT Consultancy</a></li>
            <li><a href="/services">Software Development</a></li>
            <li><a href="/services">Software Testing &amp; QA</a></li>
            <li><a href="/services">Cloud &amp; DevOps Support</a></li>
            <li><a href="/services">IT Training &amp; Mentoring</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>PRODUCT</h4>
          <ul>
            <li><a href="https://insights.guecyber.com" target="_blank" rel="noreferrer">GueInsight Platform</a></li>
            <li><a href="/contact">Request Demo</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="https://www.gabrielaloho.com" target="_blank" rel="noreferrer">Gabriel Aloho</a></li>
            <li><a href="https://www.linkedin.com/in/gabriel-aloho/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Gue Cyber · Zelfstandige (Eenmanszaak) · Ondernemingsnummer 1037.163.392 · Avelgem, West Flanders, Belgium</span>
        <span><a href="https://www.guecyber.com" target="_blank" rel="noreferrer">guecyber.com</a></span>
      </div>
    </footer>
  );
}
