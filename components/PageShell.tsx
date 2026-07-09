import Link from 'next/link';

export default function PageShell({ page }: { page: { title: string; eyebrow: string; intro: string; bullets: string[]; cta?: string } }) {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="page-orb orb-one" />
        <div className="page-orb orb-two" />
        <div className="container page-hero-grid">
          <div>
            <div className="eyebrow">{page.eyebrow}</div>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions"><Link href="/contact" className="btn btn-primary">{page.cta || 'Talk to us'} <span>→</span></Link></div>
          </div>
          <div className="page-panel">
            {page.bullets.map((bullet, index) => (
              <div className="page-bullet" key={bullet}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <div className="content-card">
            <h2>What Innobiz brings</h2>
            <p>We combine business consulting, premium user experience, modern engineering, automation, CRM thinking, and analytics into one practical delivery model.</p>
          </div>
          <div className="content-card">
            <h2>How it helps</h2>
            <p>Your team gets better visibility, reduced manual work, smoother customer journeys, and systems that can grow as the business scales.</p>
          </div>
          <div className="content-card">
            <h2>Next step</h2>
            <p>Start with a discovery discussion. We will identify the right digital roadmap, required modules, integrations, and delivery priorities.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
