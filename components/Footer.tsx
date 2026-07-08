export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="/#top" aria-label="Innobiz Global home">
          <span className="brand-mark">IG</span>
          <span>
            <strong>Innobiz</strong>
            <em>Global Ventures</em>
          </span>
        </a>
        <p>Digital transformation, product engineering, AI automation, portal operations, CRM workflows, and analytics-led growth for ambitious businesses.</p>
      </div>
      <div className="footer-columns">
        <div>
          <h4>Company</h4>
          <a href="/#company">About</a>
          <a href="/#process">How We Work</a>
          <a href="/#why-innobiz">Why Innobiz</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="/#services">Services</a>
          <a href="/#industries">Industries</a>
          <a href="/#portfolio">Portfolio</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="/#contact">Contact</a>
          <a href="/#resources">Resources</a>
          <a href="mailto:hello@innobizglobal.com">hello@innobizglobal.com</a>
        </div>
      </div>
    </footer>
  );
}
