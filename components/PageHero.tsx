type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, text, ctaLabel = 'Start a conversation', ctaHref = '/contact' }: PageHeroProps) {
  return (
    <section className="inner-hero section-pad">
      <div className="inner-hero-bg" aria-hidden="true" />
      <div className="inner-hero-content reveal">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <a className="btn btn-primary" href={ctaHref}>{ctaLabel} →</a>
      </div>
    </section>
  );
}
