'use client';

import { useEffect, useState } from 'react';

const heroSlides = [
  {
    eyebrow: '01 / InnobizAI',
    title: 'AI Business Assistants That Work Like A Real Team',
    text:
      'Intelligent AI assistants that support sales, service, operations, follow-ups, and customer engagement across your business.',
    cta: 'Consult Our Experts',
    secondaryCta: 'Explore Solutions',
    tab: 'AI Assistants',
    image: '/images/banners/banner-ai-assistants.webp',
  },
  {
    eyebrow: '02 / Workflow Automation',
    title: 'Workflow Automation That Removes Manual Work',
    text:
      'Automate approvals, data movement, CRM tasks, internal operations, and reporting workflows with practical AI-powered systems.',
    cta: 'Automate Workflow',
    secondaryCta: 'Explore Services',
    tab: 'Automation',
    image: '/images/banners/banner-workflow-automation.webp',
  },
  {
    eyebrow: '03 / Product Engineering',
    title: 'Product Engineering For Scalable Digital Platforms',
    text:
      'We design and build high-performance websites, apps, portals, dashboards, and digital products with future-ready architecture.',
    cta: 'Build With Innobiz',
    secondaryCta: 'View Capabilities',
    tab: 'Product Engineering',
    image: '/images/banners/banner-product-engineering.webp',
  },
  {
    eyebrow: '04 / Growth & Analytics',
    title: 'Growth & Analytics That Turn Data Into Decisions',
    text:
      'From dashboards and campaign measurement to lead tracking and business insights, we help you optimize and scale with clarity.',
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
      className="v19-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 96px)',
        overflow: 'hidden',
        display: 'grid',
        alignItems: 'center',
        padding: 'clamp(70px, 8vw, 110px) max(28px, 5.8vw) 46px',
        background: '#f7fbff',
      }}
    >
      <div
        key={current.image}
        className="v19-hero-bg"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${current.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 1,
          zIndex: 0,
          transition: 'opacity .5s ease',
        }}
        aria-hidden="true"
      />

      <div
        className="v19-hero-content reveal"
        style={{
          position: 'relative',
          zIndex: 2,
          width: 'min(650px, 50vw)',
          color: '#071634',
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
            color: '#0a56f1',
            background: 'rgba(10,86,241,.08)',
            border: '1px solid rgba(10,86,241,.18)',
            fontWeight: 900,
            fontSize: 13,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
          }}
        >
          {current.eyebrow}
        </p>
        <h1
          key={current.title}
          style={{
            margin: '0 0 22px',
            color: '#071634',
            fontSize: 'clamp(2.7rem, 4.8vw, 5.2rem)',
            lineHeight: 0.98,
            letterSpacing: '-0.055em',
            fontWeight: 950,
          }}
        >
          {current.title}
        </h1>
        <p
          className="v19-hero-text"
          style={{
            margin: 0,
            color: '#4d5d73',
            fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
            lineHeight: 1.65,
            maxWidth: 620,
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
              background: 'linear-gradient(135deg,#0a56f1 0%,#116cff 60%,#ff7a00 140%)',
              boxShadow: '0 22px 48px rgba(10,86,241,.22)',
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
              color: '#0a56f1',
              fontWeight: 900,
              background: 'rgba(255,255,255,.78)',
              border: '1px solid rgba(10,86,241,.24)',
              boxShadow: '0 18px 40px rgba(10,31,73,.08)',
            }}
          >
            {current.secondaryCta} <span>→</span>
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
            maxWidth: 660,
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
                border: index === active ? '1px solid rgba(10,86,241,.45)' : '1px solid rgba(13,42,99,.12)',
                background: index === active ? '#fff' : 'rgba(255,255,255,.58)',
                color: index === active ? '#0a56f1' : '#5d6678',
                borderRadius: 18,
                padding: '12px 10px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 900,
                boxShadow: index === active ? '0 18px 38px rgba(10,86,241,.12)' : 'none',
              }}
            >
              <span style={{ display: 'block', fontSize: 12, opacity: .8, marginBottom: 4 }}>{String(index + 1).padStart(2, '0')}</span>
              {slide.tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
