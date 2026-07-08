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
    >
      <div
        key={current.image}
        className="v19-hero-bg"
        style={{ backgroundImage: `url(${current.image})` }}
        aria-hidden="true"
      />

      <div className="v19-hero-motion" aria-hidden="true">
        <span className="v19-line line-one" />
        <span className="v19-line line-two" />
        <span className="v19-glow glow-one" />
        <span className="v19-glow glow-two" />
      </div>

      <div className="v19-hero-content reveal">
        <p className="v19-eyebrow">{current.eyebrow}</p>
        <h1 key={current.title}>{current.title}</h1>
        <p className="v19-hero-text">{current.text}</p>

        <div className="v19-actions">
          <a className="v19-btn v19-btn-primary" href="/contact">
            {current.cta} <span>→</span>
          </a>
          <a className="v19-btn v19-btn-secondary" href="/services">
            {current.secondaryCta} <span>→</span>
          </a>
        </div>

        <div className="v19-slide-controls" aria-label="Homepage banner selector">
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
    </section>
  );
}
