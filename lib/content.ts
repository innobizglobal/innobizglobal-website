export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  image: string;
  outcomes: string[];
  features: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: 'digital-business-consulting',
    eyebrow: '01',
    title: 'Digital Business Consulting',
    short: 'Turn business ideas into structured digital growth models, customer journeys, and practical launch roadmaps.',
    description:
      'We help founders and growing businesses convert an idea, process, or offline service into a clear digital business model with positioning, offers, workflows, platform architecture, and launch priorities.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Clear digital roadmap', 'Customer journey blueprint', 'Revenue and operations model'],
    features: ['Business model mapping', 'Customer journey design', 'Launch roadmap', 'Operational workflow planning'],
    process: ['Discovery workshop', 'Market and audience mapping', 'Digital roadmap', 'Launch priority plan'],
  },
  {
    slug: 'website-app-development',
    eyebrow: '02',
    title: 'Website & App Development',
    short: 'Premium websites, landing pages, mobile-first applications, dashboards, and portals built around business outcomes.',
    description:
      'We create high-quality digital experiences that look premium, load fast, communicate clearly, and support lead capture, enquiries, content, campaigns, and future automation.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Premium brand presence', 'Lead-ready website', 'Mobile-first experience'],
    features: ['Corporate websites', 'Landing pages', 'Custom web apps', 'Admin dashboards'],
    process: ['Information architecture', 'UI design', 'Development', 'Testing and deployment'],
  },
  {
    slug: 'ai-automation-solutions',
    eyebrow: '03',
    title: 'AI Automation Solutions',
    short: 'AI assistants, smart workflows, response drafting, lead qualification, summaries, reminders, and decision dashboards.',
    description:
      'We design practical AI workflows that reduce repetitive work and help teams respond faster, summarize information, classify enquiries, draft communication, and make operations more visible.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Faster daily operations', 'Smarter customer responses', 'Improved team productivity'],
    features: ['AI enquiry assistant', 'Email draft automation', 'Lead scoring', 'Daily summary dashboards'],
    process: ['Workflow audit', 'AI use-case design', 'Automation build', 'Team handover'],
  },
  {
    slug: 'ecommerce-portal-operations',
    eyebrow: '04',
    title: 'E-commerce & Portal Operations',
    short: 'Portal setup, catalogue management, order capture, payment coordination, CRM workflow, and support operations.',
    description:
      'We help companies run online portals with better catalogue structure, enquiry capture, order workflow, customer support, payment coordination, and operational reporting.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Organized online operations', 'Better order visibility', 'Reduced manual follow-up'],
    features: ['Product/service catalogue', 'Order workflow', 'Payment coordination', 'Support queue'],
    process: ['Portal planning', 'Catalogue setup', 'CRM linkage', 'Operations dashboard'],
  },
  {
    slug: 'crm-customer-support-systems',
    eyebrow: '05',
    title: 'CRM & Customer Support Systems',
    short: 'Lead pipelines, support queues, reminders, WhatsApp handoffs, enquiry tracking, and team productivity systems.',
    description:
      'We build structured CRM and customer support workflows so every enquiry, lead, follow-up, support request, and task has visibility and ownership.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['No lost enquiries', 'Clear team accountability', 'Better follow-up discipline'],
    features: ['Lead pipeline', 'Follow-up reminders', 'Support queue', 'Management reports'],
    process: ['Current process mapping', 'CRM flow design', 'Automation setup', 'Reporting dashboard'],
  },
  {
    slug: 'growth-campaigns-analytics',
    eyebrow: '06',
    title: 'Growth Campaigns & Analytics',
    short: 'Campaign landing pages, conversion tracking, email outreach systems, analytics dashboards, and optimization loops.',
    description:
      'We connect digital campaigns with lead capture, CRM follow-up, performance tracking, and analytics so marketing activity becomes measurable and manageable.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Trackable campaigns', 'Better conversion visibility', 'Actionable business reports'],
    features: ['Landing pages', 'Campaign analytics', 'Email outreach workflow', 'Conversion reporting'],
    process: ['Campaign strategy', 'Landing page build', 'Tracking setup', 'Optimization loop'],
  },
];

export const industries = [
  'Healthcare & Wellness',
  'E-commerce & D2C',
  'Pharmaceuticals',
  'Retail & Distribution',
  'Professional Services',
  'Startups & New Ventures',
];

export const impactCards = [
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

export const process = [
  ['Discover', 'Understand the business model, audience, offer, current process, and revenue objective.'],
  ['Design', 'Create customer journey, website architecture, brand direction, UX flows, and content structure.'],
  ['Develop', 'Build the website, portal, automations, CRM, dashboards, and integrations.'],
  ['Automate', 'Connect AI, email, WhatsApp, forms, reminders, analytics, and internal workflows.'],
  ['Launch', 'Deploy, test, optimize speed, improve SEO basics, and prepare the team for operations.'],
  ['Scale', 'Track performance, improve conversion, add campaigns, and keep refining the platform.'],
];

export const solutions = [
  {
    title: 'Online Growth Portals',
    text: 'Launch product, service, healthcare, wellness, or consultation portals with CRM and support workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'AI Business Assistants',
    text: 'Create internal assistants that prepare drafts, summarize leads, classify enquiries, and guide teams through daily work.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'CRM + Campaign Engine',
    text: 'Capture leads from campaigns, route them to teams, follow up properly, and measure the complete sales funnel.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85',
  },
];

export const testimonials = [
  {
    quote: 'Innobiz Global brings together business thinking, technology execution, and operational discipline into one practical digital roadmap.',
    name: 'Digital Transformation Partner',
    role: 'For growth-focused organizations',
  },
  {
    quote: 'The focus is not only on building a website. The real value is connecting customer acquisition, follow-up, support, and reporting.',
    name: 'Operating Model First',
    role: 'Consulting-led delivery',
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
