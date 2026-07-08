import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { CTASection, FeatureGrid } from '../../components/PageSections';
import { SiteHeader } from '../../components/SiteHeader';
import { aboutPages, process } from '../../lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Innobiz Global Ventures, our consulting-first approach, delivery model, and digital growth philosophy.',
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About Innobiz"
        title="Consulting clarity with product engineering execution."
        text="Innobiz Global helps businesses turn ideas, websites, CRM, automation, campaigns, and reporting into one practical digital growth engine."
      />
      <section className="section-pad inner-split-section">
        <div className="inner-copy reveal">
          <p className="kicker">Company</p>
          <h2>We build business systems, not only web pages.</h2>
          <p>Our work combines strategic thinking, premium design, development, automation, CRM workflows, analytics, and post-launch improvement. The result is a digital presence that supports real operations.</p>
        </div>
        <img className="inner-page-image reveal delay-1" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85" alt="Innobiz consulting and technology team" />
      </section>
      <section className="section-pad inner-detail-section dark-band">
        <div className="section-head reveal"><p className="kicker">Our Method</p><h2>From idea to launch, then launch to scale.</h2></div>
        <div className="timeline">
          {process.map(([title, text], index) => (
            <article className="timeline-item reveal" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad inner-listing-section">
        <div className="section-head reveal"><p className="kicker">Explore More</p><h2>Individual pages under About.</h2></div>
        <FeatureGrid items={aboutPages.map((page) => page.title)} />
        <div className="page-link-row reveal">
          {aboutPages.map((page) => <a className="btn btn-ghost" href={`/about/${page.slug}`} key={page.slug}>{page.title}</a>)}
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
