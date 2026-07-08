import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { PageHero } from '../../../components/PageHero';
import { CTASection, FeatureGrid } from '../../../components/PageSections';
import { SiteHeader } from '../../../components/SiteHeader';
import { resources } from '../../../lib/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const resource = resources.find((item) => item.slug === params.slug);
  if (!resource) return { title: 'Resource' };
  return { title: resource.title, description: resource.text };
}

export default function ResourceDetailPage({ params }: Props) {
  const resource = resources.find((item) => item.slug === params.slug);
  if (!resource) notFound();

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Resource" title={resource.title} text={resource.text} ctaLabel="Request this guide" />
      <section className="section-pad inner-detail-section">
        <div className="section-head reveal"><p className="kicker">Inside This Resource</p><h2>What this guide helps you plan.</h2></div>
        <FeatureGrid items={resource.sections} />
      </section>
      <section className="section-pad dark-band resource-detail-copy">
        <div className="showcase-card reveal">
          <div>
            <p className="kicker">How to Use It</p>
            <h2>Use this as a pre-build checklist.</h2>
            <p>Before starting development, this resource helps identify objectives, stakeholders, content, workflows, automation points, analytics needs, and post-launch operating responsibilities.</p>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
