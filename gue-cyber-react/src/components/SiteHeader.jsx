import logo from "../assets/logo.png";
import "./SiteChrome.css";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav>
        <a href="/" className="nav-logo nav-logo-image" aria-label="Gue Cyber home">
          <span className="logo-mark">
            <img src={logo} alt="Gue Cyber" />
          </span>
          <span className="brand-name">Gue Cyber</span>
        </a>

        <ul className="nav-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#gueinsight">GueInsight</a></li>
          <li><a href="/#nis2">NIS2</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <a href="/assessment" className="nav-cta">Book a Security Assessment</a>
      </nav>
    </header>
  );
}
