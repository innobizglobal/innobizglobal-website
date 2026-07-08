import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { SiteHeader } from '../../components/SiteHeader';
import { portfolioCards } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Outcome-style portfolio pages for Innobiz Global digital platforms, commerce workflows, and AI outreach systems.',
};

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Portfolio"
        title="Case-study style work for practical digital transformation."
        text="These pages show the kind of platforms, workflows, dashboards, and automation systems Innobiz can design and build."
      />
      <section className="section-pad inner-listing-section">
        <div className="section-head reveal"><p className="kicker">Outcome Stories</p><h2>Explore digital product and automation work.</h2></div>
        <div className="portfolio-grid page-card-grid">
          {portfolioCards.map((card) => (
            <article className="portfolio-card reveal" key={card.slug}>
              <img src={card.image} alt={card.title} />
              <div>
                <span>{card.category}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href={`/portfolio/${card.slug}`}>Open case study →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
