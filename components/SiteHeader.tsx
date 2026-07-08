'use client';

import { useState } from 'react';
import { menuGroups } from '../lib/navigation';

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      className="site-header premium-header v14-header v16-header v19-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        minHeight: 96,
        padding: '10px max(28px, 5.2vw)',
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(13,42,99,0.10)',
        boxShadow: '0 18px 50px rgba(7, 22, 52, 0.06)',
      }}
    >
      <a
        className="brand premium-brand v14-brand v16-brand"
        href="/"
        aria-label="Innobiz Global Ventures home"
        style={{ display: 'inline-flex', alignItems: 'center', flex: '0 0 auto', textDecoration: 'none' }}
      >
        <img
          className="v16-nav-logo v19-nav-logo"
          src="/images/innobiz-global-ventures-logo.png"
          alt="Innobiz Global Ventures"
          width="188"
          height="82"
          style={{
            width: 178,
            maxWidth: 178,
            height: 76,
            maxHeight: 76,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </a>

      <nav
        className="desktop-nav premium-nav v14-nav v19-nav"
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 26,
          flex: '1 1 auto',
          minWidth: 0,
        }}
      >
        {menuGroups.map((group) => (
          <div
            className="nav-item v19-nav-item"
            key={group.label}
            onMouseEnter={() => setOpenMenu(group.label)}
            onMouseLeave={() => setOpenMenu(null)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
          >
            <a
              className="nav-link v19-nav-link"
              href={group.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                color: '#101b34',
                fontSize: 16,
                fontWeight: 800,
                lineHeight: 1,
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              <span>{group.label}</span>
              <span
                className="nav-chevron"
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 14,
                  height: 14,
                  fontSize: 14,
                  lineHeight: 1,
                  transform: openMenu === group.label ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform .2s ease',
                  color: '#132348',
                }}
              >
                ▾
              </span>
            </a>

            <div
              className="mega-menu"
              role="menu"
              aria-label={`${group.label} menu`}
              style={{
                display: openMenu === group.label ? 'grid' : 'none',
                gridTemplateColumns: '260px 1fr',
                gap: 26,
                position: 'absolute',
                left: '50%',
                top: 34,
                transform: 'translateX(-50%)',
                width: 760,
                maxWidth: 'calc(100vw - 72px)',
                padding: 24,
                borderRadius: 26,
                background: 'rgba(255,255,255,0.98)',
                border: '1px solid rgba(13,42,99,0.12)',
                boxShadow: '0 30px 90px rgba(10, 31, 73, 0.16)',
              }}
            >
              <div className="mega-intro" style={{ padding: 18, borderRadius: 20, background: 'linear-gradient(135deg, rgba(10,86,241,.08), rgba(255,122,0,.08))' }}>
                <span style={{ color: '#0a56f1', fontWeight: 900, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}>{group.label}</span>
                <strong style={{ display: 'block', marginTop: 10, color: '#071634', fontSize: 22, lineHeight: 1.1 }}>Explore Innobiz {group.label.toLowerCase()}</strong>
                <p style={{ margin: '12px 0 0', color: '#526074', lineHeight: 1.55 }}>{group.intro}</p>
              </div>
              <div className="mega-columns" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 18 }}>
                {group.columns.map((column) => (
                  <div className="mega-column" key={column.title}>
                    <h4 style={{ margin: '0 0 12px', color: '#071634', fontSize: 14, textTransform: 'uppercase', letterSpacing: '.12em' }}>{column.title}</h4>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {column.links.map(([label, href]) => (
                        <a
                          href={href}
                          key={`${group.label}-${label}`}
                          style={{ color: '#263a62', textDecoration: 'none', fontWeight: 700, padding: '8px 0' }}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <a
          className="nav-link no-chevron explore-link v19-explore-link"
          href="/explore-innobiz-digital"
          style={{
            color: '#5d6678',
            fontSize: 16,
            fontWeight: 800,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}
        >
          Explore Innobiz Digital
        </a>
      </nav>

      <a
        className="header-cta premium-cta v14-header-cta v19-header-cta"
        href="/contact"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          minHeight: 54,
          padding: '0 24px',
          borderRadius: 999,
          color: '#fff',
          fontWeight: 900,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          background: 'linear-gradient(135deg,#0a56f1 0%,#116cff 55%,#ff7a00 140%)',
          boxShadow: '0 18px 42px rgba(10,86,241,.22)',
        }}
      >
        Contact Us
      </a>
    </header>
  );
}
