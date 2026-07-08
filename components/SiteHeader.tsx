const menuGroups = [
  {
    label: 'InnobizAI',
    href: '/#ai-solutions',
    columns: [
      {
        title: 'AI Solutions',
        links: [
          ['AI Business Assistants', '/services/ai-automation-solutions'],
          ['Workflow Automation', '/services/ai-automation-solutions'],
          ['AI Outreach Systems', '/#portfolio'],
        ],
      },
      {
        title: 'Use Cases',
        links: [
          ['Lead Qualification', '/#solutions'],
          ['Customer Support Intelligence', '/#solutions'],
          ['Email & WhatsApp Automation', '/#solutions'],
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/#company',
    columns: [
      {
        title: 'Company',
        links: [
          ['About Innobiz', '/#company'],
          ['How We Work', '/#process'],
          ['Why Innobiz', '/#why-innobiz'],
        ],
      },
      {
        title: 'Approach',
        links: [
          ['Consulting First', '/#company'],
          ['Build to Scale', '/#process'],
          ['Launch & Improve', '/#process'],
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/#services',
    columns: [
      {
        title: 'Strategy & Transformation',
        links: [
          ['Digital Transformation', '/services/digital-transformation-consulting'],
          ['Business Consulting', '/services/digital-transformation-consulting'],
          ['Growth Roadmaps', '/services/growth-campaigns-analytics'],
        ],
      },
      {
        title: 'Engineering',
        links: [
          ['Product Engineering', '/services/product-engineering-web-apps'],
          ['Web & App Development', '/services/product-engineering-web-apps'],
          ['Cloud & DevOps', '/services/cloud-devops-managed-it'],
        ],
      },
      {
        title: 'Operations',
        links: [
          ['AI Automation', '/services/ai-automation-solutions'],
          ['CRM / ERP / Portals', '/services/crm-erp-portal-operations'],
          ['Campaign Analytics', '/services/growth-campaigns-analytics'],
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/#industries',
    columns: [
      {
        title: 'Priority Industries',
        links: [
          ['Healthcare & Wellness', '/#industries'],
          ['E-commerce & Retail', '/#industries'],
          ['Pharma & Labs', '/#industries'],
        ],
      },
      {
        title: 'Business Verticals',
        links: [
          ['Travel & Hospitality', '/#industries'],
          ['Manufacturing', '/#industries'],
          ['Professional Services', '/#industries'],
        ],
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/#portfolio',
    columns: [
      {
        title: 'Outcome Stories',
        links: [
          ['Healthcare Digital Registry', '/#portfolio'],
          ['Commerce Growth Engine', '/#portfolio'],
          ['AI Outreach Workflow', '/#portfolio'],
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/#resources',
    columns: [
      {
        title: 'Planning Assets',
        links: [
          ['Digital Roadmap Guide', '/#resources'],
          ['Automation Opportunity Audit', '/#resources'],
          ['Launch Checklist', '/#resources'],
        ],
      },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="site-header premium-header v14-header">
      <a className="brand premium-brand v14-brand" href="/#top" aria-label="Innobiz Global home">
        <span className="brand-mark premium-brand-mark v14-brand-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img" focusable="false">
            <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
            <path d="M32 4v22M56 18 36 30M8 18l20 12M28 34 8 46M36 34l20 12M32 60V38" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
          </svg>
        </span>
        <span className="brand-wordmark"><strong>innobiz</strong><em>global</em></span>
      </a>

      <nav className="desktop-nav premium-nav v14-nav" aria-label="Main navigation">
        {menuGroups.map((group) => (
          <div className="nav-item" key={group.label}>
            <a className="nav-link" href={group.href}>{group.label}</a>
            <div className="mega-menu" role="menu" aria-label={`${group.label} menu`}>
              <div className="mega-intro">
                <span>{group.label}</span>
                <strong>Explore Innobiz {group.label.toLowerCase()}</strong>
                <p>Business-first digital strategy, product engineering, AI automation, and operating systems for growth-focused companies.</p>
              </div>
              <div className="mega-columns">
                {group.columns.map((column) => (
                  <div className="mega-column" key={column.title}>
                    <h4>{column.title}</h4>
                    {column.links.map(([label, href]) => (
                      <a href={href} key={label}>{label}</a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <a className="nav-link no-chevron explore-link" href="/#solutions">Explore Innobiz Digital</a>
      </nav>

      <a className="header-cta premium-cta v14-header-cta" href="/#contact"><span>→</span> Contact Us</a>
    </header>
  );
}
