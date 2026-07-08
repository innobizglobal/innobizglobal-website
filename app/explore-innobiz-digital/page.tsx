import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { CTASection, FeatureGrid } from '../../components/PageSections';
import { SiteHeader } from '../../components/SiteHeader';
import { solutions, technologies } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Explore Innobiz Digital',
  description: 'Explore Innobiz Digital solutions including portals, AI assistants, CRM engines, automation workflows, and analytics.',
};

export default function ExploreInnobizDigitalPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Explore Innobiz Digital"
        title="Connected digital systems for growth, operations, and automation."
        text="This page brings together the practical digital platforms Innobiz can build: portals, AI assistants, CRM engines, dashboards, campaigns, and integrations."
      />
      <section className="section-pad inner-listing-section">
        <div className="section-head reveal"><p className="kicker">Digital Solutions</p><h2>Platforms and workflows that work together.</h2></div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card reveal" key={solution.slug}>
              <img src={solution.image} alt={solution.title} />
              <div><h3>{solution.title}</h3><p>{solution.text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad technologies-section dark-band">
        <div className="section-head reveal"><p className="kicker">Technology</p><h2>Tools and platforms used to deliver modern digital businesses.</h2></div>
        <div className="tech-cloud reveal">
          {technologies.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </section>
      <section className="section-pad inner-detail-section">
        <div className="section-head reveal"><p className="kicker">What This Enables</p><h2>One digital operating model instead of disconnected tools.</h2></div>
        <FeatureGrid items={['Premium customer-facing website', 'CRM and lead management', 'AI-assisted team workflows', 'Analytics and reporting visibility']} />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
