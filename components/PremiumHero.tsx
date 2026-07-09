'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    label: 'AI Assistants',
    eyebrow: 'AI Business Assistants',
    title: 'AI Business Assistants That Work Like A Real Team',
    text: 'Deploy intelligent AI assistants for sales, support, operations, enquiry handling, follow-ups, and daily business workflows.',
    primary: 'Consult Our Experts',
    secondary: 'Explore AI Solutions',
    image: '/images/hero-ai-assistants.jpg',
  },
  {
    label: 'Automation',
    eyebrow: 'Workflow Automation',
    title: 'Workflow Automation That Removes Manual Work',
    text: 'Automate approvals, CRM tasks, data movement, notifications, reporting, and internal processes with practical business-first workflows.',
    primary: 'Automate Your Workflow',
    secondary: 'View Services',
    image: '/images/hero-automation.jpg',
  },
  {
    label: 'Engineering',
    eyebrow: 'Product Engineering',
    title: 'Product Engineering For Scalable Digital Platforms',
    text: 'Build websites, portals, dashboards, applications, and digital products with clean user experience and future-ready architecture.',
    primary: 'Build With Innobiz',
    secondary: 'View Capabilities',
    image: '/images/hero-product.jpg',
  },
  {
    label: 'Growth',
    eyebrow: 'Growth & Analytics',
    title: 'Growth & Analytics That Turn Data Into Decisions',
    text: 'Use dashboards, campaign insights, lead tracking, and business intelligence to improve performance and scale with clarity.',
    primary: 'Drive Growth',
    secondary: 'See Insights',
    image: '/images/hero-growth.jpg',
  },
];

export function PremiumHero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="premium-hero" id="top" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.92) 32%, rgba(255,255,255,.28) 63%, rgba(255,255,255,.08) 100%), url(${slide.image})` }}>
      <div className="hero-content">
        <div className="hero-badge"><span>{String(active + 1).padStart(2, '0')}</span>{slide.eyebrow}</div>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/contact">{slide.primary} <span>→</span></a>
          <a className="btn btn-secondary" href="/services">{slide.secondary} <span>→</span></a>
        </div>
      </div>
      <div className="hero-selector" aria-label="Banner selector">
        {slides.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={index === active ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
          </button>
        ))}
      </div>
    </section>
  );
}
