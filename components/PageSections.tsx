export function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="inner-feature-grid">
      {items.map((item, index) => (
        <article className="inner-feature-card reveal" key={item} style={{ animationDelay: `${index * 70}ms` }}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{item}</h3>
          <p>Structured for clear ownership, faster execution, and measurable digital business improvement.</p>
        </article>
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="section-pad page-cta-section">
      <div className="page-cta-card reveal">
        <p className="kicker">Next Step</p>
        <h2>Let’s convert this into a practical digital roadmap.</h2>
        <p>Share the business model, current website or process challenge, and the outcome you want. Innobiz can convert it into a structured plan and build path.</p>
        <a className="btn btn-primary" href="/contact">Contact Innobiz →</a>
      </div>
    </section>
  );
}

export function ContentImageBlock({ title, text, image, alt }: { title: string; text: string; image: string; alt: string }) {
  return (
    <section className="section-pad inner-split-section">
      <div className="inner-copy reveal">
        <p className="kicker">Overview</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <img className="inner-page-image reveal delay-1" src={image} alt={alt} />
    </section>
  );
}
