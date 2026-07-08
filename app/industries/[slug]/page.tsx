import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { PageHero } from '../../../components/PageHero';
import { ContentImageBlock, CTASection, FeatureGrid } from '../../../components/PageSections';
import { SiteHeader } from '../../../components/SiteHeader';
import { industries } from '../../../lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) return { title: 'Industry' };
  return { title: industry.title, description: industry.short };
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) notFound();

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Industry" title={industry.title} text={industry.short} />
      <ContentImageBlock title={`Digital solutions for ${industry.title}`} text={industry.description} image={industry.image} alt={industry.title} />
      <section className="section-pad inner-detail-section dark-band">
        <div className="section-head reveal"><p className="kicker">Common Needs</p><h2>Where digital systems usually create value.</h2></div>
        <FeatureGrid items={industry.needs} />
      </section>
      <section className="section-pad inner-detail-section">
        <div className="section-head reveal"><p className="kicker">Innobiz Solutions</p><h2>What we can build for this industry.</h2></div>
        <FeatureGrid items={industry.solutions} />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
