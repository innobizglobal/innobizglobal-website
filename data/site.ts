export type NavGroup = {
  label: string;
  href: string;
  description?: string;
  columns?: { title: string; links: { label: string; href: string }[] }[];
};

export const navGroups: NavGroup[] = [
  {
    label: 'InnobizAI', href: '/innobizai', description: 'AI assistants, workflow automation, and outreach intelligence.',
    columns: [
      { title: 'AI Solutions', links: [
        { label: 'AI Business Assistants', href: '/innobizai/ai-business-assistants' },
        { label: 'Workflow Automation', href: '/innobizai/workflow-automation' },
        { label: 'AI Outreach Systems', href: '/innobizai/ai-outreach-systems' }
      ]},
      { title: 'Use Cases', links: [
        { label: 'Lead Qualification', href: '/innobizai/lead-qualification' },
        { label: 'Customer Support Intelligence', href: '/innobizai/customer-support-intelligence' },
        { label: 'Email & WhatsApp Automation', href: '/innobizai/email-whatsapp-automation' }
      ]}
    ]
  },
  {
    label: 'About', href: '/about', description: 'How Innobiz builds practical digital growth systems.',
    columns: [
      { title: 'Company', links: [
        { label: 'About Innobiz', href: '/about' },
        { label: 'How We Work', href: '/about/how-we-work' },
        { label: 'Why Innobiz', href: '/about/why-innobiz' }
      ]},
      { title: 'Approach', links: [
        { label: 'Consulting First', href: '/about/consulting-first' },
        { label: 'Build to Scale', href: '/about/build-to-scale' },
        { label: 'Launch & Improve', href: '/about/launch-improve' }
      ]}
    ]
  },
  {
    label: 'Services', href: '/services', description: 'Strategy, engineering, automation, CRM, portals, and analytics.',
    columns: [
      { title: 'Strategy & Transformation', links: [
        { label: 'Digital Transformation', href: '/services/digital-transformation' },
        { label: 'Business Consulting', href: '/services/business-consulting' },
        { label: 'Growth Roadmaps', href: '/services/growth-roadmaps' }
      ]},
      { title: 'Engineering', links: [
        { label: 'Product Engineering', href: '/services/product-engineering' },
        { label: 'Web & App Development', href: '/services/web-app-development' },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops' }
      ]},
      { title: 'Operations', links: [
        { label: 'CRM & ERP Systems', href: '/services/crm-erp-systems' },
        { label: 'Portal Operations', href: '/services/portal-operations' },
        { label: 'Growth & Analytics', href: '/services/growth-analytics' }
      ]}
    ]
  },
  {
    label: 'Industries', href: '/industries', description: 'Solutions for growth-focused businesses across sectors.',
    columns: [
      { title: 'Focus Industries', links: [
        { label: 'Healthcare & Wellness', href: '/industries/healthcare-wellness' },
        { label: 'E-commerce & Retail', href: '/industries/ecommerce-retail' },
        { label: 'Pharma & Labs', href: '/industries/pharma-labs' }
      ]},
      { title: 'Operational Verticals', links: [
        { label: 'Travel & Hospitality', href: '/industries/travel-hospitality' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Professional Services', href: '/industries/professional-services' }
      ]}
    ]
  },
  {
    label: 'Portfolio', href: '/portfolio', description: 'Case-study style examples of systems Innobiz can build.',
    columns: [
      { title: 'Case Study Style Work', links: [
        { label: 'CRM Automation for Healthcare', href: '/portfolio/crm-automation-healthcare' },
        { label: 'Retail Digital Growth System', href: '/portfolio/retail-growth-system' },
        { label: 'Lab Operations Portal', href: '/portfolio/lab-operations-portal' }
      ]},
      { title: 'Capabilities', links: [
        { label: 'AI Lead Engine', href: '/portfolio/ai-lead-engine' },
        { label: 'Customer Support Dashboard', href: '/portfolio/customer-support-dashboard' },
        { label: 'E-commerce Operations Suite', href: '/portfolio/ecommerce-operations-suite' }
      ]}
    ]
  },
  {
    label: 'Resources', href: '/resources', description: 'Guides, insights, and planning frameworks.',
    columns: [
      { title: 'Insights', links: [
        { label: 'Digital Growth Playbook', href: '/resources/digital-growth-playbook' },
        { label: 'AI Automation Guide', href: '/resources/ai-automation-guide' },
        { label: 'CRM Readiness Checklist', href: '/resources/crm-readiness-checklist' }
      ]},
      { title: 'Planning', links: [
        { label: 'Project Discovery Framework', href: '/resources/project-discovery-framework' },
        { label: 'Website Launch Checklist', href: '/resources/website-launch-checklist' },
        { label: 'Automation Opportunity Map', href: '/resources/automation-opportunity-map' }
      ]}
    ]
  }
];

export const heroSlides = [
  {
    eyebrow: '01 / AI ASSISTANTS',
    title: 'AI Business Assistants That Work Like A Real Team',
    text: 'Build intelligent assistants for sales, support, operations, and customer engagement—designed to reduce manual effort and improve speed.',
    image: '/images/hero-ai-assistants.jpg',
    primary: 'Consult Our Experts',
    secondary: 'Explore AI Solutions',
    href: '/innobizai/ai-business-assistants'
  },
  {
    eyebrow: '02 / WORKFLOW AUTOMATION',
    title: 'Workflow Automation That Removes Manual Work',
    text: 'Automate approvals, data movement, CRM tasks, reporting, and daily operations with connected workflows built around your business process.',
    image: '/images/hero-automation.jpg',
    primary: 'Automate Your Workflow',
    secondary: 'View Services',
    href: '/innobizai/workflow-automation'
  },
  {
    eyebrow: '03 / PRODUCT ENGINEERING',
    title: 'Product Engineering For Scalable Digital Platforms',
    text: 'Design and build modern websites, apps, portals, dashboards, and business systems with future-ready architecture and premium user experience.',
    image: '/images/hero-product-engineering.jpg',
    primary: 'Build With Innobiz',
    secondary: 'View Capabilities',
    href: '/services/product-engineering'
  },
  {
    eyebrow: '04 / GROWTH ANALYTICS',
    title: 'Growth & Analytics That Turn Data Into Decisions',
    text: 'Use dashboards, campaign measurement, lead tracking, and performance insights to improve conversion, revenue, and operational clarity.',
    image: '/images/hero-growth-analytics.jpg',
    primary: 'Drive Growth',
    secondary: 'See Insights',
    href: '/services/growth-analytics'
  }
];

export const homeServices = [
  ['Digital Transformation', 'Strategy, technology planning, and implementation roadmaps for growing businesses.'],
  ['AI Automation', 'AI assistants, smart workflows, outreach automation, and practical productivity systems.'],
  ['Product Engineering', 'Websites, apps, portals, dashboards, and platforms built for performance and scale.'],
  ['CRM & ERP Systems', 'Lead capture, customer tracking, order workflows, reporting, and operational visibility.'],
  ['Growth & Analytics', 'Dashboards, campaign insights, performance reports, and decision-support systems.'],
  ['Portal Operations', 'Customer portals, admin backends, service workflows, and digital operations support.']
];

export const pageMap: Record<string, { title: string; eyebrow: string; intro: string; bullets: string[]; cta?: string }> = {
  'innobizai': { title: 'InnobizAI', eyebrow: 'AI solutions', intro: 'Practical AI assistants and automation systems designed around business workflows, not hype.', bullets: ['AI assistants for sales, support, and operations', 'Lead qualification and customer response automation', 'Workflow automation for approvals, reminders, and CRM tasks', 'AI outreach systems for campaigns and follow-up'], cta: 'Discuss AI automation' },
  'about': { title: 'About Innobiz Global', eyebrow: 'Company', intro: 'Innobiz Global Ventures helps businesses build digital growth engines across strategy, technology, automation, and operations.', bullets: ['Business-first consulting approach', 'Execution-ready technology planning', 'Practical automation and analytics', 'Long-term growth and support mindset'], cta: 'Talk to Innobiz' },
  'services': { title: 'Services', eyebrow: 'Capabilities', intro: 'A complete digital growth stack: consulting, product engineering, automation, CRM, portals, and analytics.', bullets: ['Digital strategy and transformation', 'Website, app, and portal development', 'AI workflow automation', 'CRM, ERP, dashboards, and analytics'], cta: 'Explore services' },
  'industries': { title: 'Industries', eyebrow: 'Focus sectors', intro: 'Digital solutions for healthcare, wellness, retail, pharma, labs, hospitality, manufacturing, and professional services.', bullets: ['Customer-facing digital platforms', 'Operational dashboards and portals', 'Automation for enquiries and follow-up', 'Analytics for business clarity'], cta: 'Map your industry solution' },
  'portfolio': { title: 'Portfolio', eyebrow: 'Case-study style work', intro: 'Explore the types of systems Innobiz can design and implement for business growth and digital operations.', bullets: ['CRM and lead automation', 'E-commerce growth systems', 'Healthcare and lab portals', 'Support dashboards and AI workflows'], cta: 'Review capabilities' },
  'resources': { title: 'Resources', eyebrow: 'Insights', intro: 'Planning guides and practical frameworks for digital transformation, AI automation, CRM readiness, and website launches.', bullets: ['Digital growth playbooks', 'AI automation opportunity maps', 'CRM readiness checklists', 'Launch planning guides'], cta: 'Explore resources' },
  'explore-innobiz-digital': { title: 'Explore Innobiz Digital', eyebrow: 'Digital growth platform', intro: 'A connected view of how Innobiz brings strategy, technology, automation, CRM, and analytics together.', bullets: ['Plan your digital roadmap', 'Build customer-facing experiences', 'Automate operational workflows', 'Track performance and improve continuously'], cta: 'Start a digital roadmap' },
  'contact': { title: 'Contact Innobiz Global', eyebrow: 'Let’s build', intro: 'Share your requirement and we will help you shape it into a practical digital roadmap.', bullets: ['Website and app development', 'AI automation and CRM systems', 'Digital marketing and analytics', 'Business process transformation'], cta: 'Send enquiry' }
};

export function getPageForSlug(slug: string[]) {
  const key = slug.join('/');
  if (pageMap[key]) return pageMap[key];
  const last = slug[slug.length - 1]?.replace(/-/g, ' ') || 'Digital Solution';
  const title = last.replace(/\b\w/g, (m) => m.toUpperCase());
  return {
    title,
    eyebrow: slug[0]?.replace(/-/g, ' ') || 'Innobiz',
    intro: `${title} is part of the Innobiz Global digital growth ecosystem, designed to help businesses improve operations, customer experience, automation, and measurable outcomes.`,
    bullets: [
      'Business-first discovery and workflow mapping',
      'Technology design aligned to real operating needs',
      'Automation, dashboards, and scalable digital execution',
      'Launch support, analytics, and continuous improvement'
    ],
    cta: 'Discuss this requirement'
  };
}
