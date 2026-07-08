import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { SiteHeader } from '../../../components/SiteHeader';
import { getService, services } from '../../../lib/content';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);
  if (!service) {
    return { title: 'Service | Innobiz Global Ventures' };
  }

  return {
    title: `${service.title} | Innobiz Global Ventures`,
    description: service.short,
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />

      <section className="service-hero section-pad">
        <div className="service-hero-copy reveal">
          <p className="kicker">{service.eyebrow} • Innobiz Service</p>
          <h1>{service.title}</h1>
          <p className="hero-text">{service.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/#contact">Discuss this service</a>
            <a className="btn btn-ghost" href="/#services">Back to services</a>
          </div>
        </div>
        <div className="service-hero-image reveal delay-1">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      <section className="section-pad detail-section">
        <div className="detail-card reveal">
          <p className="kicker">Expected Outcomes</p>
          <h2>What this helps you achieve.</h2>
          <div className="detail-list three-col">
            {service.outcomes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="detail-grid">
          <article className="detail-card reveal">
            <p className="kicker">Included</p>
            <h2>Core capabilities.</h2>
            <ul>
              {service.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card reveal delay-1">
            <p className="kicker">Method</p>
            <h2>How we approach it.</h2>
            <ul>
              {service.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-pad cta-band">
        <div className="showcase-card reveal">
          <div>
            <p className="kicker">Next Step</p>
            <h2>Ready to plan this for your business?</h2>
            <p>Share your current requirement and Innobiz can convert it into a clear roadmap, platform structure, and implementation plan.</p>
          </div>
          <a className="btn btn-primary" href="/#contact">Start an enquiry</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
