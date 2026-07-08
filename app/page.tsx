import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import {
  impactCards,
  industries,
  portfolioCards,
  process,
  resources,
  services,
  solutions,
  technologies,
  testimonials,
} from '../lib/content';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section id="top" className="enterprise-hero">
        <div className="enterprise-bg" aria-hidden="true">
          <span className="light-streak streak-one" />
          <span className="light-streak streak-two" />
          <span className="light-streak streak-three" />
          <span className="circuit-dot dot-one" />
          <span className="circuit-dot dot-two" />
          <span className="circuit-dot dot-three" />
        </div>
        <div className="enterprise-hero-content reveal">
          <p className="kicker">AI • Digital Engineering • Business Transformation</p>
          <h1>AI, Digital & Business Transformation Services</h1>
          <p className="hero-text hero-centered-text">
            Innobiz Global helps ambitious businesses design scalable websites, applications, automation systems, CRM workflows, and digital growth engines that create measurable business impact.
          </p>
          <div className="hero-actions hero-actions-center">
            <a className="btn hero-white-cta" href="#contact">Consult Our Experts</a>
          </div>
        </div>
        <div className="enterprise-trust reveal delay-1" aria-label="Innobiz trusted capability strip">
          <div className="trust-title">
            <span />
            <strong>TRUSTED FOR PRACTICAL DIGITAL EXECUTION ACROSS GROWING BUSINESSES</strong>
            <span />
          </div>
          <div className="trust-logo-row">
            <span>AI Automation</span>
            <span>Web Platforms</span>
            <span>CRM Systems</span>
            <span>Commerce Ops</span>
            <span>Analytics</span>
            <span>Cloud Ready</span>
          </div>
        </div>
      </section>

      <section className="logo-marquee" aria-label="Innobiz capability strip">
        <span>Strategy</span>
        <span>Product</span>
        <span>Engineering</span>
        <span>Cloud</span>
        <span>Automation</span>
        <span>Growth</span>
      </section>

      <section id="company" className="section-pad company-section">
        <div className="showcase-card reveal company-card">
          <div>
            <p className="kicker">About Innobiz Global</p>
            <h2>Consulting clarity with product engineering execution.</h2>
            <p>
              Innobiz Global is positioned as a digital transformation partner for businesses that need more than a good-looking website. We connect strategy, product design, web development, CRM workflows, AI automation, campaigns, and analytics into one practical business growth engine.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
            alt="Consulting and technology team reviewing digital growth plans"
          />
        </div>
      </section>

      <section id="services" className="section-pad services-section">
        <div className="section-head reveal">
          <p className="kicker">Services</p>
          <h2>Menu structure and service depth inspired by premium digital engineering companies.</h2>
          <p>
            The service structure now follows a digital transformation company style: consulting, engineering, AI, cloud, CRM/ERP, and growth analytics — adapted for Innobiz Global.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" style={{ animationDelay: `${index * 80}ms` }} key={service.title}>
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <a href={`/services/${service.slug}`}>View service details →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="section-pad dark-band">
        <div className="section-head reveal">
          <p className="kicker">Solutions</p>
          <h2>Real platforms, real workflows, real business outcomes.</h2>
          <p>
            Innobiz connects website, CRM, campaigns, AI automation, and customer operations into a practical digital business engine.
          </p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card reveal" key={solution.title}>
              <img src={solution.image} alt={solution.title} />
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="section-pad split-section">
        <div className="split-copy reveal">
          <p className="kicker">Industries</p>
          <h2>Built for companies that want digital operations, not only pages.</h2>
          <p>
            The website now carries a wider industry menu similar to a technology services company, while keeping Innobiz focused on practical commercial use cases.
          </p>
          <div className="industry-pills">
            {industries.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="image-stack reveal delay-1">
          <img
            className="image-main"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
            alt="Technology and business team collaborating"
          />
          <img
            className="image-small"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=85"
            alt="Team planning a digital product roadmap"
          />
        </div>
      </section>

      <section id="portfolio" className="section-pad portfolio-section">
        <div className="section-head reveal">
          <p className="kicker">Portfolio / Case Studies</p>
          <h2>Case-study style storytelling for Innobiz capabilities.</h2>
          <p>
            These are structured as business outcome showcases. We can later replace them with verified client projects, logos, screenshots, and measurable results.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioCards.map((card) => (
            <article className="portfolio-card reveal" key={card.title}>
              <img src={card.image} alt={card.title} />
              <div>
                <span>{card.category}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="technologies" className="section-pad technologies-section dark-band">
        <div className="section-head reveal">
          <p className="kicker">Technologies</p>
          <h2>Technology stack for modern digital business execution.</h2>
        </div>
        <div className="tech-cloud reveal">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="section-pad impact-section">
        <div className="section-head reveal">
          <p className="kicker">Transformation Focus</p>
          <h2>Designed to show measurable business transformation.</h2>
        </div>
        <div className="impact-grid">
          {impactCards.map((card) => (
            <article className="impact-card reveal" key={card.title}>
              <strong>{card.stat}</strong>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-pad process-section">
        <div className="section-head reveal">
          <p className="kicker">How We Work</p>
          <h2>From idea to launch, then launch to scale.</h2>
        </div>
        <div className="timeline">
          {process.map(([title, text], index) => (
            <article className="timeline-item reveal" key={title} style={{ animationDelay: `${index * 70}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="resources" className="section-pad resources-section">
        <div className="section-head reveal">
          <p className="kicker">Resources</p>
          <h2>Guides and planning assets for digital execution.</h2>
        </div>
        <div className="resource-grid">
          {resources.map(([title, text]) => (
            <article className="resource-card reveal" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Request this guide →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="why-innobiz" className="section-pad testimonial-section">
        <div className="section-head reveal">
          <p className="kicker">Why Innobiz</p>
          <h2>Consulting clarity with technology execution.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <div className="contact-copy reveal">
          <p className="kicker">Contact Us</p>
          <h2>Let’s build your next digital growth engine.</h2>
          <p>
            Share your business idea, existing website, or operational challenge. Innobiz can convert it into a structured digital platform and growth workflow.
          </p>
          <div className="contact-points">
            <span>✓ Digital transformation roadmap</span>
            <span>✓ Product engineering and portals</span>
            <span>✓ AI automation and CRM workflows</span>
            <span>✓ Growth campaigns and analytics</span>
          </div>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
