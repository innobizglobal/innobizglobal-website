import { menuGroups } from '../lib/navigation';

export function SiteHeader() {
  return (
    <header className="site-header premium-header v14-header v16-header v19-header">
      <a className="brand premium-brand v14-brand v16-brand" href="/" aria-label="Innobiz Global Ventures home">
        <img
          className="v16-nav-logo v19-nav-logo"
          src="/images/innobiz-logo-nav.png"
          alt="Innobiz Global Ventures"
        />
      </a>

      <nav className="desktop-nav premium-nav v14-nav v19-nav" aria-label="Main navigation">
        {menuGroups.map((group) => (
          <div className="nav-item v19-nav-item" key={group.label}>
            <a className="nav-link v19-nav-link" href={group.href}>
              <span>{group.label}</span>
              <span className="nav-chevron" aria-hidden="true">⌄</span>
            </a>
            <div className="mega-menu" role="menu" aria-label={`${group.label} menu`}>
              <div className="mega-intro">
                <span>{group.label}</span>
                <strong>Explore Innobiz {group.label.toLowerCase()}</strong>
                <p>{group.intro}</p>
              </div>
              <div className="mega-columns">
                {group.columns.map((column) => (
                  <div className="mega-column" key={column.title}>
                    <h4>{column.title}</h4>
                    {column.links.map(([label, href]) => (
                      <a href={href} key={`${group.label}-${label}`}>{label}</a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <a className="nav-link no-chevron explore-link v19-explore-link" href="/explore-innobiz-digital">Explore Innobiz Digital</a>
      </nav>

      <a className="header-cta premium-cta v14-header-cta v19-header-cta" href="/contact"><span>→</span> Contact Us</a>
    </header>
  );
}
