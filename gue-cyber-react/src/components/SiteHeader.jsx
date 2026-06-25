import logo from "../assets/logo.png";
import "./SiteChrome.css";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav>
        <a href="/" className="nav-logo nav-logo-image" aria-label="Gue Cyber home">
          <span className="logo-mark">
            <img src={logo} alt="" />
          </span>
          <span className="brand-name">Gue<span>Cyber</span></span>
        </a>

        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/services#gueinsight">GueInsight</a></li>
          <li><a href="/services#nis2">NIS2</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <a href="/assessment" className="nav-cta">
          <span className="nav-cta-desktop">Book a Security Assessment</span>
          <span className="nav-cta-mobile">Book Assessment</span>
        </a>
      </nav>
    </header>
  );
}
