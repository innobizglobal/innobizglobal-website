export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Innobiz Global home">
        <span className="brand-mark">IG</span>
        <span>
          <strong>Innobiz</strong>
          <em>Global Ventures</em>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/#services">Services</a>
        <a href="/#solutions">Solutions</a>
        <a href="/#industries">Industries</a>
        <a href="/#process">Process</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="header-cta" href="/#contact">Start a Project</a>
    </header>
  );
}
