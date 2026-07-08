import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { SiteHeader } from '../../components/SiteHeader';
import { aiPages, services } from '../../lib/content';

export const metadata: Metadata = {
  title: 'InnobizAI',
  description: 'InnobizAI solutions for business assistants, workflow automation, AI outreach, support intelligence, and communication automation.',
};

export default function InnobizAIPage() {
  const aiService = services.find((item) => item.slug === 'ai-automation-solutions');
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="InnobizAI"
        title="Practical AI workflows for everyday business operations."
        text="InnobizAI focuses on business assistants, enquiry intelligence, outreach systems, support summaries, communication automation, and workflow visibility."
      />
      {aiService ? (
        <section className="section-pad inner-split-section">
          <div className="inner-copy reveal">
            <p className="kicker">AI Automation</p>
            <h2>{aiService.title}</h2>
            <p>{aiService.description}</p>
            <a className="btn btn-primary" href="/services/ai-automation-solutions">View AI service →</a>
          </div>
          <img className="inner-page-image reveal delay-1" src={aiService.image} alt="AI automation" />
        </section>
      ) : null}
      <section className="section-pad inner-listing-section dark-band">
        <div className="section-head reveal"><p className="kicker">AI Use Cases</p><h2>Choose the AI workflow you want to explore.</h2></div>
        <div className="service-grid page-card-grid">
          {aiPages.map((page) => (
            <article className="service-card reveal" key={page.slug}>
              <span>AI</span>
              <h3>{page.title}</h3>
              <p>{page.summary}</p>
              <a href={`/innobizai/${page.slug}`}>Open AI page →</a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
