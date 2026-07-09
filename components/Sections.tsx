import Link from 'next/link';
import { homeServices } from '@/data/site';

export function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading">
          <span>What we build</span>
          <h2>Digital systems that connect strategy, technology, automation, and growth.</h2>
          <p>Innobiz Global helps you move from fragmented manual work to integrated business systems that support real execution.</p>
        </div>
        <div className="cards-grid">
          {homeServices.map(([title, text], index) => (
            <Link className="service-card" key={title} href={`/services/${title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
              <div className="card-num">{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ['Discover', 'Map the business goal, users, workflows, and growth opportunities.'],
    ['Design', 'Shape the user experience, system architecture, and automation logic.'],
    ['Develop', 'Build the website, app, portal, dashboard, CRM, or workflow system.'],
    ['Scale', 'Launch, measure, improve, and expand the system with data-driven decisions.']
  ];
  return (
    <section className="section soft-section">
      <div className="container split-section">
        <div>
          <span className="section-kicker">How we work</span>
          <h2>Consulting-first execution, built for practical business impact.</h2>
          <p>We do not start by writing code blindly. We first understand how your business works, then design the right digital growth engine.</p>
          <Link href="/about/how-we-work" className="text-link">View our approach →</Link>
        </div>
        <div className="timeline">
          {steps.map(([title, text], index) => (
            <div className="timeline-item" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section final-cta">
      <div className="container final-cta-card">
        <span>Ready to build?</span>
        <h2>Let’s turn your business idea into a scalable digital system.</h2>
        <p>Share your requirement and Innobiz Global will help you shape the right roadmap across website, app, CRM, automation, or growth analytics.</p>
        <Link href="/contact" className="btn btn-primary">Start a discussion <span>→</span></Link>
      </div>
    </section>
  );
}
