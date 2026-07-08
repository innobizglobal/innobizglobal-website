import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { PageHero } from '../../../components/PageHero';
import { ContentImageBlock, CTASection, FeatureGrid } from '../../../components/PageSections';
import { SiteHeader } from '../../../components/SiteHeader';
import { portfolioCards } from '../../../lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return portfolioCards.map((card) => ({ slug: card.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const card = portfolioCards.find((item) => item.slug === params.slug);
  if (!card) return { title: 'Portfolio' };
  return { title: card.title, description: card.text };
}

export default function PortfolioDetailPage({ params }: Props) {
  const card = portfolioCards.find((item) => item.slug === params.slug);
  if (!card) notFound();

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow={card.category} title={card.title} text={card.text} />
      <ContentImageBlock title="Business context" text={card.text} image={card.image} alt={card.title} />
      <section className="section-pad inner-detail-section dark-band">
        <div className="section-head reveal"><p className="kicker">Highlights</p><h2>Key business outcomes and capabilities.</h2></div>
        <FeatureGrid items={card.highlights} />
      </section>
      <section className="section-pad inner-detail-section">
        <div className="section-head reveal"><p className="kicker">Modules</p><h2>Platform components that can be built.</h2></div>
        <FeatureGrid items={card.modules} />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
