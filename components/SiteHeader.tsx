import { menuGroups } from '../lib/navigation';

const mainLinks = [
  { label: 'InnobizAI', href: '/innobizai', chevron: true },
  { label: 'About', href: '/about', chevron: true },
  { label: 'Services', href: '/services', chevron: true },
  { label: 'Industries', href: '/industries', chevron: true },
  { label: 'Portfolio', href: '/portfolio', chevron: true },
  { label: 'Resources', href: '/resources', chevron: true },
  { label: 'Explore Innobiz Digital', href: '/explore-innobiz-digital', chevron: false },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-logo" href="/" aria-label="Innobiz Global Ventures home">
          <img
            src="/images/innobiz-logo-header.png"
            width="170"
            height="98"
            alt="Innobiz Global Ventures"
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {mainLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              <span>{link.label}</span>
              {link.chevron ? <span className="nav-chevron" aria-hidden="true">⌄</span> : null}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="/contact">Contact Us</a>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {mainLinks.slice(0, 6).map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
