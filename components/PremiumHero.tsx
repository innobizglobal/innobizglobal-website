'use client';

import { useEffect, useState } from 'react';

const heroSlides = [
  {
    eyebrow: '01 / InnobizAI',
    title: 'AI Business Assistants',
    accent: 'That Work Like A Real Team',
    text:
      'AI-powered assistants for sales, support, operations, follow-ups, and customer engagement — designed to reduce manual work and improve response speed.',
    cta: 'Consult Our Experts',
    secondaryCta: 'Explore AI Solutions',
    tab: 'AI Assistants',
    image: '/images/banners/banner-ai-assistants.webp',
  },
  {
    eyebrow: '02 / Workflow Automation',
    title: 'Workflow Automation',
    accent: 'That Removes Manual Work',
    text:
      'Automate approvals, data movement, CRM tasks, reporting, reminders, and internal operations with practical AI-enabled workflows.',
    cta: 'Automate Workflow',
    secondaryCta: 'Explore Services',
    tab: 'Automation',
    image: '/images/banners/banner-workflow-automation.webp',
  },
  {
    eyebrow: '03 / Product Engineering',
    title: 'Product Engineering',
    accent: 'For Scalable Digital Platforms',
    text:
      'Premium websites, web apps, portals, dashboards, and digital products engineered for speed, usability, automation, and long-term scale.',
    cta: 'Build With Innobiz',
    secondaryCta: 'View Capabilities',
    tab: 'Product Engineering',
    image: '/images/banners/banner-product-engineering.webp',
  },
  {
    eyebrow: '04 / Growth & Analytics',
    title: 'Growth & Analytics',
    accent: 'That Turn Data Into Decisions',
    text:
      'Connect campaign measurement, lead tracking, CRM visibility, dashboards, and growth insights into one clear management view.',
    cta: 'Drive Growth',
    secondaryCta: 'See Insights',
    tab: 'Growth Analytics',
    image: '/images/banners/banner-growth-analytics.webp',
  },
];

export function PremiumHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = heroSlides[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="top"
      className="v19-hero v20-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 92px)',
        overflow: 'hidden',
        display: 'grid',
        alignItems: 'center',
        padding: 'clamp(76px, 8vw, 116px) max(28px, 5.8vw) 50px',
        background:
          'radial-gradient(circle at 80% 42%, rgba(30,99,255,.28), transparent 34%), radial-gradient(circle at 62% 64%, rgba(255,138,0,.14), transparent 26%), linear-gradient(135deg,#060B14 0%,#0D1630 60%,#060B14 100%)',
      }}
    >
      <div
        key={current.image}
        className="v19-hero-bg v20-hero-bg"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${current.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: .36,
          filter: 'saturate(1.2) contrast(1.05) brightness(.72)',
          mixBlendMode: 'screen',
          zIndex: 0,
          transition: 'opacity .5s ease',
        }}
        aria-hidden="true"
      />

      <div
        className="v20-engine-orbit"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '8%',
          top: '22%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          border: '1px solid rgba(30,99,255,.16)',
          boxShadow: '0 0 120px rgba(30,99,255,.18), inset 0 0 80px rgba(255,138,0,.05)',
          zIndex: 1,
        }}
      />

      <div
        className="v19-hero-content reveal"
        style={{
          position: 'relative',
          zIndex: 3,
          width: 'min(690px, 52vw)',
          color: '#fff',
        }}
      >
        <p
          className="v19-eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            margin: '0 0 18px',
            padding: '10px 18px',
            borderRadius: 999,
            color: '#B8C2D6',
            background: 'rgba(30,99,255,.12)',
            border: '1px solid rgba(30,99,255,.24)',
            fontWeight: 900,
            fontSize: 13,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF8A00', boxShadow: '0 0 18px rgba(255,138,0,.65)' }} />
          {current.eyebrow}
        </p>
        <h1
          key={`${current.title}-${current.accent}`}
          style={{
            margin: '0 0 22px',
            color: '#fff',
            fontSize: 'clamp(2.75rem, 4.9vw, 5.15rem)',
            lineHeight: .96,
            letterSpacing: '-0.06em',
            fontWeight: 950,
          }}
        >
          {current.title}
          <br />
          <span
            style={{
              background: 'linear-gradient(100deg,#FFFFFF 0%,#1E63FF 52%,#FF8A00 105%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {current.accent}
          </span>
        </h1>
        <p
          className="v19-hero-text"
          style={{
            margin: 0,
            color: '#B8C2D6',
            fontSize: 'clamp(1.05rem, 1.25vw, 1.24rem)',
            lineHeight: 1.65,
            maxWidth: 640,
            fontWeight: 600,
          }}
        >
          {current.text}
        </p>

        <div className="v19-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 30 }}>
          <a
            className="v19-btn v19-btn-primary"
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              minHeight: 58,
              padding: '0 26px',
              borderRadius: 999,
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 900,
              background: 'linear-gradient(135deg,#0B2F8A 0%,#1E63FF 100%)',
              boxShadow: '0 22px 48px rgba(30,99,255,.25)',
            }}
          >
            {current.cta} <span>→</span>
          </a>
          <a
            className="v19-btn v19-btn-secondary"
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              minHeight: 58,
              padding: '0 26px',
              borderRadius: 999,
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 900,
              background: 'rgba(255,255,255,.06)',
              border: '1px solid rgba(255,255,255,.16)',
            }}
          >
            {current.secondaryCta} <span style={{ color: '#FF8A00' }}>→</span>
          </a>
        </div>

        <div
          className="v19-slide-controls"
          aria-label="Homepage banner selector"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 10,
            marginTop: 42,
            maxWidth: 720,
          }}
        >
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.tab}
              className={index === active ? 'active' : ''}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              style={{
                border: index === active ? '1px solid rgba(30,99,255,.55)' : '1px solid rgba(255,255,255,.12)',
                background: index === active
                  ? 'linear-gradient(135deg, rgba(30,99,255,.22), rgba(255,138,0,.10))'
                  : 'rgba(255,255,255,.065)',
                color: index === active ? '#fff' : '#B8C2D6',
                borderRadius: 18,
                padding: '12px 10px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 900,
                boxShadow: index === active ? '0 18px 38px rgba(30,99,255,.16)' : 'none',
              }}
            >
              <span style={{ display: 'block', fontSize: 12, opacity: .8, marginBottom: 4, color: index === active ? '#FF8A00' : '#7F8DAA' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              {slide.tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
