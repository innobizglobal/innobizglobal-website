export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand v16-footer-brand" href="/" aria-label="Innobiz Global Ventures home">
          <img
            className="v16-footer-logo"
            src="/images/innobiz-logo-nav.png"
            alt="Innobiz Global Ventures"
          />
        </a>
        <p>Digital transformation, product engineering, AI automation, portal operations, CRM workflows, and analytics-led growth for ambitious businesses.</p>
      </div>
      <div className="footer-columns">
        <div>
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/about/how-we-work">How We Work</a>
          <a href="/about/why-innobiz">Why Innobiz</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="/services">Services</a>
          <a href="/industries">Industries</a>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="/contact">Contact</a>
          <a href="/resources">Resources</a>
          <a href="mailto:hello@innobizglobal.com">hello@innobizglobal.com</a>
        </div>
      </div>
    </footer>
  );
}
