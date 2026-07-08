const services = [
  {
    eyebrow: '01',
    title: 'Digital Business Consulting',
    text: 'We convert business ideas into practical digital growth models with clear customer journeys, revenue flows, and launch roadmaps.',
  },
  {
    eyebrow: '02',
    title: 'Website & App Development',
    text: 'Premium websites, commerce portals, dashboards, mobile-first experiences, and custom applications built around business outcomes.',
  },
  {
    eyebrow: '03',
    title: 'AI Automation Solutions',
    text: 'AI assistants, workflow automation, lead qualification, smart email drafts, customer response automation, and decision dashboards.',
  },
  {
    eyebrow: '04',
    title: 'E-commerce & Portal Operations',
    text: 'Portal setup, catalogue management, order capture, payment coordination, CRM workflows, support coordination, and online growth operations.',
  },
  {
    eyebrow: '05',
    title: 'CRM & Customer Support Systems',
    text: 'Lead pipelines, support queues, follow-up reminders, call workflows, enquiry tracking, WhatsApp handoffs, and team productivity systems.',
  },
  {
    eyebrow: '06',
    title: 'Growth Campaigns & Analytics',
    text: 'Campaign landing pages, conversion tracking, digital analytics, email outreach systems, reporting dashboards, and optimization loops.',
  },
];

const industries = ['Healthcare & Wellness', 'E-commerce', 'Pharmaceuticals', 'Retail & D2C', 'Professional Services', 'Startups'];

const impactCards = [
  {
    stat: '360°',
    title: 'Digital Operations',
    text: 'From lead capture to customer communication, Innobiz builds connected systems instead of disconnected pages.',
  },
  {
    stat: 'AI+',
    title: 'Smarter Workflows',
    text: 'Use AI to simplify routine decisions, draft communication, summarize replies, and support sales or service teams.',
  },
  {
    stat: 'CRM',
    title: 'Action Visibility',
    text: 'Dashboards, tasks, reminders, and reports help management know what is happening every day.',
  },
];

const process = [
  ['Discover', 'Understand business model, audience, offer, current process, and revenue objective.'],
  ['Design', 'Create customer journey, website architecture, brand direction, UX flows, and content structure.'],
  ['Develop', 'Build the website, portal, automations, CRM, dashboards, and integrations.'],
  ['Automate', 'Connect AI, email, WhatsApp, forms, reminders, analytics, and internal workflows.'],
  ['Launch', 'Deploy, test, optimize speed, improve SEO basics, and prepare the team for operations.'],
  ['Scale', 'Track performance, improve conversion, add campaigns, and keep refining the platform.'],
];

const solutions = [
  {
    title: 'Online Growth Portals',
    text: 'Launch product, service, healthcare, wellness, or consultation portals with payment, CRM, and support workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'AI Business Assistants',
    text: 'Create internal assistants that prepare drafts, summarize leads, classify enquiries, and guide teams through daily work.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'CRM + Campaign Engine',
    text: 'Capture leads from campaigns, route them to teams, follow up automatically, and measure the complete sales funnel.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Innobiz Global home">
          <span className="brand-mark">IG</span>
          <span>
            <strong>Innobiz</strong>
            <em>Global Ventures</em>
          </span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Start a Project</a>
      </header>

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
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
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

      <section className="logo-marquee">
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
            The website is designed around animated service cards similar in energy to Appinventiv, but the content is original to Innobiz Global.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" style={{ animationDelay: `${index * 80}ms` }} key={service.title}>
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact">Discuss this service →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="section-pad dark-band">
        <div className="section-head reveal">
          <p className="kicker">Solutions</p>
          <h2>Real platforms, real workflows, real business outcomes.</h2>
          <p>
            Realistic imagery and strong card layouts make the site feel polished and production-ready rather than template-based.
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
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
            alt="Technology and business team collaborating"
          />
          <img
            className="image-small"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=85"
            alt="Team planning a digital product roadmap"
          />
        </div>
      </section>

      <section className="section-pad impact-section">
        <div className="section-head reveal">
          <p className="kicker">Impact Style</p>
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
            alt="Analytics dashboard showing digital business performance"
          />
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
          </div>
        </div>
        <form className="contact-form reveal delay-1">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email / Phone
            <input type="text" placeholder="name@company.com / phone" />
          </label>
          <label>
            Project Type
            <select defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Corporate Website</option>
              <option>E-commerce / Portal</option>
              <option>AI Automation</option>
              <option>CRM / Customer Support System</option>
              <option>Digital Growth Campaign</option>
            </select>
          </label>
          <label>
            Message
            <textarea placeholder="Tell us what you want to build" rows={4} />
          </label>
          <button type="button" className="btn btn-primary">Submit Enquiry</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top" aria-label="Innobiz Global home">
            <span className="brand-mark">IG</span>
            <span>
              <strong>Innobiz</strong>
              <em>Global Ventures</em>
            </span>
          </a>
          <p>Digital growth, AI automation, portal operations, CRM workflows, and analytics for ambitious businesses.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
