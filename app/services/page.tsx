import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { SiteHeader } from '../../components/SiteHeader';
import { services } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Innobiz Global digital transformation, product engineering, AI automation, cloud, CRM, and growth analytics services.',
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Digital services built around business outcomes."
        text="Explore strategy, engineering, automation, CRM, cloud, and growth services designed to turn websites into operating systems."
      />
      <section className="section-pad inner-listing-section">
        <div className="section-head reveal">
          <p className="kicker">Service Lines</p>
          <h2>Choose the capability you want to explore.</h2>
        </div>
        <div className="service-grid page-card-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.slug}>
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <a href={`/services/${service.slug}`}>Open service page →</a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
