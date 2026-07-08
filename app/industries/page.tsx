import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { SiteHeader } from '../../components/SiteHeader';
import { industries } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Innobiz Global industry pages for healthcare, wellness, ecommerce, pharma, labs, travel, manufacturing, and professional services.',
};

export default function IndustriesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Industries"
        title="Digital operating systems for growth-focused industries."
        text="Each industry page explains the digital journeys, workflows, and automation opportunities Innobiz can build."
      />
      <section className="section-pad inner-listing-section">
        <div className="section-head reveal"><p className="kicker">Industry Focus</p><h2>Explore industry-specific solutions.</h2></div>
        <div className="portfolio-grid page-card-grid">
          {industries.map((industry) => (
            <article className="portfolio-card reveal" key={industry.slug}>
              <img src={industry.image} alt={industry.title} />
              <div>
                <span>Industry</span>
                <h3>{industry.title}</h3>
                <p>{industry.short}</p>
                <a href={`/industries/${industry.slug}`}>Open industry page →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
