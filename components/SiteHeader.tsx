'use client';

import { useState } from 'react';
import { menuGroups } from '../lib/navigation';

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      className="site-header premium-header v20-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        minHeight: 92,
        padding: '10px max(24px, 5vw)',
        background: 'rgba(6, 11, 20, .94)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,.10)',
        boxShadow: '0 18px 60px rgba(0,0,0,.35)',
      }}
    >
      <a
        className="brand premium-brand v20-brand"
        href="/"
        aria-label="Innobiz Global Ventures home"
        style={{ display: 'inline-flex', alignItems: 'center', flex: '0 0 auto', textDecoration: 'none' }}
      >
        <img
          className="v20-nav-logo"
          src="/images/innobiz-logo-nav.png"
          alt="Innobiz Global Ventures"
          width="190"
          height="64"
          style={{
            width: 190,
            maxWidth: 190,
            height: 64,
            maxHeight: 64,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </a>

      <nav
        className="desktop-nav premium-nav v20-nav"
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
            className="nav-item v20-nav-item"
            key={group.label}
            onMouseEnter={() => setOpenMenu(group.label)}
            onMouseLeave={() => setOpenMenu(null)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
          >
            <a
              className="nav-link v20-nav-link"
              href={group.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                color: openMenu === group.label ? '#1E63FF' : 'rgba(255,255,255,.88)',
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
                  color: openMenu === group.label ? '#FF8A00' : '#B8C2D6',
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
                top: 36,
                transform: 'translateX(-50%)',
                width: 780,
                maxWidth: 'calc(100vw - 72px)',
                padding: 24,
                borderRadius: 26,
                background: 'rgba(9,18,39,.98)',
                border: '1px solid rgba(255,255,255,.13)',
                boxShadow: '0 30px 90px rgba(0,0,0,.50)',
                color: '#fff',
              }}
            >
              <div
                className="mega-intro"
                style={{
                  padding: 18,
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, rgba(30,99,255,.14), rgba(255,138,0,.10))',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <span style={{ color: '#FF8A00', fontWeight: 900, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}>
                  {group.label}
                </span>
                <strong style={{ display: 'block', marginTop: 10, color: '#fff', fontSize: 22, lineHeight: 1.1 }}>
                  Explore Innobiz {group.label.toLowerCase()}
                </strong>
                <p style={{ margin: '12px 0 0', color: '#B8C2D6', lineHeight: 1.55 }}>{group.intro}</p>
              </div>
              <div className="mega-columns" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 18 }}>
                {group.columns.map((column) => (
                  <div className="mega-column" key={column.title}>
                    <h4 style={{ margin: '0 0 12px', color: '#B8C2D6', fontSize: 14, textTransform: 'uppercase', letterSpacing: '.12em' }}>
                      {column.title}
                    </h4>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {column.links.map(([label, href]) => (
                        <a
                          href={href}
                          key={`${group.label}-${label}`}
                          style={{ color: 'rgba(255,255,255,.88)', textDecoration: 'none', fontWeight: 760, padding: '8px 0' }}
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
          className="nav-link no-chevron explore-link v20-explore-link"
          href="/explore-innobiz-digital"
          style={{
            color: '#B8C2D6',
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
        className="header-cta premium-cta v20-header-cta"
        href="/contact"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          minHeight: 52,
          padding: '0 24px',
          borderRadius: 999,
          color: '#fff',
          fontWeight: 900,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          background: 'linear-gradient(135deg,#0B2F8A 0%,#1E63FF 100%)',
          boxShadow: '0 18px 42px rgba(30,99,255,.28)',
        }}
      >
        Contact Us
      </a>
    </header>
  );
}
