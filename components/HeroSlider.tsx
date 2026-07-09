'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { heroSlides } from '@/data/site';

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="hero" id="top" aria-label="Innobiz Global hero banner">
      {heroSlides.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt=""
          className={`hero-bg ${index === active ? 'is-active' : ''}`}
          aria-hidden="true"
        />
      ))}
      <div className="hero-shade" />
      <div className="hero-content container">
        <div className="hero-copy">
          <div className="eyebrow">{slide.eyebrow}</div>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link href={slide.href} className="btn btn-primary">{slide.primary}<span>→</span></Link>
            <Link href="/services" className="btn btn-secondary">{slide.secondary}<span>→</span></Link>
          </div>
        </div>
        <div className="hero-tabs" role="tablist" aria-label="Hero banner slides">
          {heroSlides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              className={`hero-tab ${index === active ? 'active' : ''}`}
              onClick={() => setActive(index)}
              aria-selected={index === active}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.eyebrow.split('/')[1]?.trim()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
