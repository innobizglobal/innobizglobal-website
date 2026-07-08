import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { SiteHeader } from '../../components/SiteHeader';
import { resources } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Planning resources for digital roadmaps, automation opportunities, and launch readiness from Innobiz Global.',
};

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Resources"
        title="Planning assets for digital execution."
        text="Use these resource pages to understand what should be prepared before building websites, portals, CRM workflows, and automation systems."
      />
      <section className="section-pad inner-listing-section">
        <div className="section-head reveal"><p className="kicker">Resource Hub</p><h2>Explore useful planning guides.</h2></div>
        <div className="resource-grid page-card-grid">
          {resources.map((resource) => (
            <article className="resource-card reveal" key={resource.slug}>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <a href={`/resources/${resource.slug}`}>Open resource →</a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
