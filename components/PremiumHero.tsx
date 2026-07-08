'use client';

import { useEffect, useMemo, useState } from 'react';

const heroSlides = [
  {
    eyebrow: '01 / AI & Automation',
    title: 'AI, Digital & Automation Services',
    text:
      'We help businesses accelerate digital transformation with AI-powered workflows, intelligent automation, and data-driven solutions built for scale.',
    cta: 'Consult Our Experts',
    metric: '35%+',
    metricLabel: 'manual effort reduced',
    tab: 'AI Automation',
  },
  {
    eyebrow: '02 / Product Engineering',
    title: 'Digital Products Built for Growth',
    text:
      'From websites and mobile apps to portals and dashboards, Innobiz builds practical digital platforms that convert, operate, and scale.',
    cta: 'Build My Platform',
    metric: '4x',
    metricLabel: 'faster launch cycles',
    tab: 'Product Engineering',
  },
  {
    eyebrow: '03 / CRM & Operations',
    title: 'Connected CRM, ERP & Workflow Systems',
    text:
      'Unify leads, enquiries, orders, customer support, reporting, and follow-ups into one connected operating system for your business.',
    cta: 'Map My Workflow',
    metric: '24/7',
    metricLabel: 'automated follow-up',
    tab: 'CRM Operations',
  },
  {
    eyebrow: '04 / Digital Growth',
    title: 'Data-Led Growth Engines for Brands',
    text:
      'Turn campaigns, landing pages, analytics, email, WhatsApp, and sales outreach into a measurable growth engine for your business.',
    cta: 'Plan Growth Strategy',
    metric: '360°',
    metricLabel: 'digital growth view',
    tab: 'Growth Systems',
  },
];

const trustMarks = ['NovaTech', 'Prime Retail', 'Axis Foods', 'CloudMint', 'BluePeak', 'UrbanGrid'];

export function PremiumHero() {
  const [active, setActive] = useState(0);
  const current = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const activeClass = useMemo(() => `hero-slide-${active + 1}`, [active]);

  return (
    <section id="top" className={`enterprise-hero v14-hero v15-hero ${activeClass}`}>
      <div className="v14-hero-ambient v15-hero-ambient" aria-hidden="true">
        <span className="v14-beam beam-one" />
        <span className="v14-beam beam-two" />
        <span className="v14-beam beam-three" />
        <span className="v14-orb orb-one" />
        <span className="v14-orb orb-two" />
        <span className="v14-orb orb-three" />
        <span className="v14-data-spike spike-one" />
        <span className="v14-data-spike spike-two" />
        <span className="v14-data-spike spike-three" />
      </div>

      <div className="enterprise-hero-content v14-hero-content v15-hero-content reveal">
        <p className="v15-hero-eyebrow">{current.eyebrow}</p>
        <h1 key={current.title}>{current.title}</h1>
        <p className="hero-text hero-centered-text v14-hero-text v15-hero-text">{current.text}</p>

        <div className="hero-actions hero-actions-center v15-hero-actions">
          <a className="btn hero-white-cta v14-hero-cta v15-hero-cta" href="#contact">
            {current.cta} <span>→</span>
          </a>
          <a className="v15-secondary-link" href="#services">Explore services</a>
        </div>

        <div className="v15-capability-switcher" aria-label="Hero service switcher">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.tab}
              className={index === active ? 'active' : ''}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {slide.tab}
            </button>
          ))}
        </div>
      </div>

      <aside className="v15-hero-metric" aria-label="Highlighted impact metric">
        <span>{current.metric}</span>
        <p>{current.metricLabel}</p>
      </aside>

      <div className="enterprise-trust v14-trust v15-trust reveal delay-1" aria-label="Innobiz trusted capability strip">
        <div className="trust-title v14-trust-title v15-trust-title">
          <span />
          <strong>TRUSTED BY GROWING BUSINESSES, ENTERPRISES AND INNOVATORS</strong>
          <span />
        </div>
        <div className="trust-logo-row v14-logo-row v15-logo-row">
          {trustMarks.map((mark, index) => (
            <span className={`wordmark mark-${index + 1}`} key={mark}>{mark}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
