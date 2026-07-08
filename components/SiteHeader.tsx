const menuGroups = [
  {
    label: 'Services',
    href: '/#services',
    columns: [
      {
        title: 'Consulting & Strategy',
        links: [
          ['Digital Transformation', '/services/digital-transformation-consulting'],
          ['Business Consulting', '/services/digital-transformation-consulting'],
          ['AI Automation', '/services/ai-automation-solutions'],
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
        title: 'Growth Operations',
        links: [
          ['CRM & ERP Systems', '/services/crm-erp-portal-operations'],
          ['Portal Operations', '/services/crm-erp-portal-operations'],
          ['Growth & Analytics', '/services/growth-campaigns-analytics'],
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/#industries',
    columns: [
      {
        title: 'Focus Industries',
        links: [
          ['Healthcare & Wellness', '/#industries'],
          ['E-commerce & Retail', '/#industries'],
          ['Pharma & Labs', '/#industries'],
        ],
      },
      {
        title: 'Operational Verticals',
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
        title: 'Case Study Style Work',
        links: [
          ['CRM Automation', '/#portfolio'],
          ['Healthcare Portals', '/#portfolio'],
          ['Digital Commerce', '/#portfolio'],
        ],
      },
    ],
  },
  {
    label: 'Technologies',
    href: '/#technologies',
    columns: [
      {
        title: 'Technology Stack',
        links: [
          ['AI & ML Workflows', '/#technologies'],
          ['Next.js / React', '/#technologies'],
          ['Node.js / PHP', '/#technologies'],
        ],
      },
      {
        title: 'Business Systems',
        links: [
          ['CRM & ERP', '/#technologies'],
          ['Cloud & APIs', '/#technologies'],
          ['Analytics Dashboards', '/#technologies'],
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/#company',
    columns: [
      {
        title: 'Innobiz Global',
        links: [
          ['About Us', '/#company'],
          ['How We Work', '/#process'],
          ['Why Choose Us', '/#why-innobiz'],
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/#resources',
    columns: [
      {
        title: 'Insights',
        links: [
          ['Guides', '/#resources'],
          ['FAQs', '/#resources'],
          ['Digital Roadmaps', '/#resources'],
        ],
      },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Innobiz Global home">
        <span className="brand-mark">IG</span>
        <span>
          <strong>Innobiz</strong>
          <em>Global Ventures</em>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {menuGroups.map((group) => (
          <div className="nav-item" key={group.label}>
            <a className="nav-link" href={group.href}>{group.label}</a>
            <div className="mega-menu" role="menu" aria-label={`${group.label} menu`}>
              <div className="mega-intro">
                <span>{group.label}</span>
                <strong>Explore Innobiz {group.label.toLowerCase()}</strong>
                <p>Structured like a premium digital engineering company, adapted for Innobiz Global’s services and operating model.</p>
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
      </nav>

      <a className="header-cta" href="/#contact">Contact Us</a>
    </header>
  );
}
