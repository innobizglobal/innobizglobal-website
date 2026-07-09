export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <img src="/images/innobiz-logo-footer.png" width="260" height="150" alt="Innobiz Global Ventures" />
          <p>AI, digital, automation, portals, CRM, and growth systems for ambitious businesses.</p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/resources">Resources</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="/services">Digital Transformation</a>
          <a href="/innobizai">AI Automation</a>
          <a href="/explore-innobiz-digital">Explore Innobiz Digital</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:hello@innobizglobal.com">hello@innobizglobal.com</a>
          <a href="/contact">Start a project</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Innobiz Global Ventures. All rights reserved.</div>
    </footer>
  );
}
