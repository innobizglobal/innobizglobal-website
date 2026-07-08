import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { PageHero } from '../../../components/PageHero';
import { CTASection, FeatureGrid } from '../../../components/PageSections';
import { SiteHeader } from '../../../components/SiteHeader';
import { aiPages } from '../../../lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return aiPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = aiPages.find((item) => item.slug === params.slug);
  if (!page) return { title: 'InnobizAI' };
  return { title: page.title, description: page.summary };
}

export default function AIUseCasePage({ params }: Props) {
  const page = aiPages.find((item) => item.slug === params.slug);
  if (!page) notFound();

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow={page.eyebrow} title={page.title} text={page.summary} ctaLabel={page.cta || 'Discuss this AI workflow'} />
      <section className="section-pad inner-detail-section">
        <div className="section-head reveal"><p className="kicker">Overview</p><h2>{page.description}</h2></div>
        <FeatureGrid items={page.bullets} />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
