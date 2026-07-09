import Link from 'next/link';
import { navGroups } from '@/data/site';

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Innobiz Global home">
          <img src="/images/innobiz-logo-nav.png" alt="Innobiz Global Ventures" width="387" height="68" className="brand-logo" />
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div className="nav-item" key={group.label}>
              <Link href={group.href} className="nav-link">
                <span>{group.label}</span>
                <span className="chev" aria-hidden="true">⌄</span>
              </Link>
              <div className="mega-menu" role="menu">
                <div className="mega-intro">
                  <strong>Explore Innobiz {group.label.toLowerCase()}</strong>
                  <p>{group.description}</p>
                </div>
                <div className="mega-columns">
                  {group.columns?.map((col) => (
                    <div key={col.title} className="mega-col">
                      <h4>{col.title}</h4>
                      {col.links.map((link) => (
                        <Link key={link.href} href={link.href}>{link.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/explore-innobiz-digital" className="nav-link explore-link">Explore Innobiz Digital</Link>
        </nav>
        <Link href="/contact" className="contact-btn"><span>Contact Us</span></Link>
      </div>
    </header>
  );
}
