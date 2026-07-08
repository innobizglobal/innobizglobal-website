import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { impactCards, industries, process, services, solutions, testimonials } from '../lib/content';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero section-pad">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="kicker">Digital Growth • AI Automation • Portal Operations</p>
            <h1>Building Digital Businesses That Scale.</h1>
            <p className="hero-text">
              Innobiz Global Ventures helps brands launch premium digital platforms, automate customer journeys, manage online operations, and convert ideas into scalable business systems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Book a Strategy Call</a>
              <a className="btn btn-ghost" href="#services">Explore Services</a>
            </div>
            <div className="trust-strip" aria-label="Capability highlights">
              <span>AI Workflows</span>
              <span>CRM Systems</span>
              <span>E-commerce Ops</span>
              <span>Analytics</span>
            </div>
          </div>
          <div className="hero-visual reveal delay-1">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Business team working on a digital strategy dashboard"
            />
            <div className="floating-card card-a">
              <strong>+ Digital Pipeline</strong>
              <span>Lead → CRM → Follow-up → Sale</span>
            </div>
            <div className="floating-card card-b">
              <strong>AI Assisted</strong>
              <span>Drafts, insights, reminders</span>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-marquee" aria-label="Innobiz capability strip">
        <span>Strategy</span>
        <span>Design</span>
        <span>Development</span>
        <span>Automation</span>
        <span>Analytics</span>
        <span>Growth</span>
      </section>

      <section id="services" className="section-pad services-section">
        <div className="section-head reveal">
          <p className="kicker">What We Build</p>
          <h2>Business-first digital services with premium execution.</h2>
          <p>
            A polished, technology-led website experience with animated service cards, realistic imagery, and original Innobiz Global positioning.
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
          <h2>Built for companies that want more than a website.</h2>
          <p>
            Innobiz Global is positioned as a partner for businesses that need online presence, customer acquisition, operations, and automation working together.
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
          <p className="kicker">Our Process</p>
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

      <section className="section-pad showcase-section">
        <div className="showcase-card reveal">
          <div>
            <p className="kicker">Featured Capability</p>
            <h2>Launch a connected digital business engine.</h2>
            <p>
              Website, landing pages, lead capture, CRM, payment coordination, order management, customer communication, support workflow, and analytics can be connected into one clear operating system.
            </p>
            <a className="btn btn-primary" href="#contact">Plan My Platform</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
            alt="Analytics dashboard showing digital business performance"
          />
        </div>
      </section>

      <section className="section-pad testimonial-section">
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
          <p className="kicker">Start the Conversation</p>
          <h2>Let’s build your next digital growth engine.</h2>
          <p>
            Share your business idea, existing website, or operational challenge. Innobiz can convert it into a structured digital platform and growth workflow.
          </p>
          <div className="contact-points">
            <span>✓ Premium corporate website</span>
            <span>✓ CRM and campaign workflows</span>
            <span>✓ AI automation roadmap</span>
            <span>✓ Conversion-ready landing pages</span>
          </div>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
