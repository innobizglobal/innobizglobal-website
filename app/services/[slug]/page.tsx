import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { PageHero } from '../../../components/PageHero';
import { ContentImageBlock, CTASection, FeatureGrid } from '../../../components/PageSections';
import { SiteHeader } from '../../../components/SiteHeader';
import { services } from '../../../lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return { title: 'Service' };
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Innobiz Service" title={service.title} text={service.short} />
      <ContentImageBlock title={service.title} text={service.pageIntro || service.description} image={service.image} alt={service.title} />
      <section className="section-pad inner-detail-section dark-band">
        <div className="section-head reveal">
          <p className="kicker">What We Deliver</p>
          <h2>Practical capabilities for real business execution.</h2>
        </div>
        <FeatureGrid items={service.features} />
      </section>
      <section className="section-pad inner-detail-section">
        <div className="section-head reveal">
          <p className="kicker">Outcomes</p>
          <h2>What the business should gain.</h2>
        </div>
        <FeatureGrid items={service.outcomes} />
      </section>
      <section className="section-pad inner-detail-section dark-band">
        <div className="section-head reveal">
          <p className="kicker">Delivery Process</p>
          <h2>How this service is usually delivered.</h2>
        </div>
        <div className="timeline">
          {service.process.map((step, index) => (
            <article className="timeline-item reveal" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step}</h3><p>Each step is aligned to business priorities, user needs, and practical launch readiness.</p></div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
