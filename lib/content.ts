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
    slug: 'digital-transformation-consulting',
    eyebrow: '01',
    title: 'Digital Transformation Consulting',
    short: 'Strategy, roadmap, operating model, customer journey, automation plan, and launch priorities for digital-first businesses.',
    description:
      'We help businesses move from scattered digital activity to a structured transformation roadmap covering brand presence, product architecture, customer acquisition, CRM, automation, analytics, and operating discipline.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Transformation roadmap', 'Customer journey blueprint', 'Revenue and operations model'],
    features: ['Business model mapping', 'Customer journey design', 'Digital operating model', 'Implementation roadmap'],
    process: ['Discovery workshop', 'Opportunity mapping', 'Roadmap design', 'Execution planning'],
  },
  {
    slug: 'product-engineering-web-apps',
    eyebrow: '02',
    title: 'Product Engineering & Web Apps',
    short: 'Premium websites, portals, mobile-first web applications, landing pages, dashboards, and internal business systems.',
    description:
      'We design and engineer digital products that look premium, load fast, support real business workflows, and can grow into portals, dashboards, mobile interfaces, and customer-facing platforms.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Premium web presence', 'Scalable product foundation', 'Mobile-first experience'],
    features: ['Corporate websites', 'Web applications', 'Landing pages', 'Admin dashboards'],
    process: ['Information architecture', 'UX/UI direction', 'Development', 'Testing and deployment'],
  },
  {
    slug: 'ai-automation-solutions',
    eyebrow: '03',
    title: 'AI Automation Solutions',
    short: 'AI assistants, enquiry intelligence, response drafting, lead qualification, summaries, reminders, and workflow automation.',
    description:
      'We design practical AI workflows that reduce repetitive work and help teams respond faster, summarize information, classify enquiries, draft communication, and make operations more visible.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Faster daily operations', 'Smarter customer responses', 'Improved team productivity'],
    features: ['AI enquiry assistant', 'Email draft automation', 'Lead scoring', 'Daily summary dashboards'],
    process: ['Workflow audit', 'AI use-case design', 'Automation build', 'Team handover'],
  },
  {
    slug: 'cloud-devops-managed-it',
    eyebrow: '04',
    title: 'Cloud, DevOps & Managed IT',
    short: 'Hosting architecture, deployment pipelines, performance tuning, monitoring, backups, security basics, and support continuity.',
    description:
      'We help businesses move from fragile deployments to structured cloud-ready systems with reliable hosting, version control, deployment routines, backups, performance checks, and support processes.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Reliable deployments', 'Better performance', 'Operational continuity'],
    features: ['Cloud hosting setup', 'Deployment workflows', 'Performance optimization', 'Monitoring and backup planning'],
    process: ['Infrastructure audit', 'Deployment setup', 'Security and backup checks', 'Support handover'],
  },
  {
    slug: 'crm-erp-portal-operations',
    eyebrow: '05',
    title: 'CRM, ERP & Portal Operations',
    short: 'Lead pipelines, customer support queues, order workflows, enquiry tracking, reminders, internal portals, and reporting systems.',
    description:
      'We build structured CRM, ERP-lite, and portal workflows so every enquiry, order, task, payment coordination, support request, and follow-up has visibility and ownership.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['No lost enquiries', 'Clear team accountability', 'Better operational reporting'],
    features: ['Lead pipeline', 'Follow-up reminders', 'Support queue', 'Management reports'],
    process: ['Current process mapping', 'CRM flow design', 'Automation setup', 'Reporting dashboard'],
  },
  {
    slug: 'growth-campaigns-analytics',
    eyebrow: '06',
    title: 'Growth Campaigns & Analytics',
    short: 'Campaign landing pages, conversion tracking, email outreach systems, dashboards, and performance optimization loops.',
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
  'Pharmaceuticals & Labs',
  'Travel & Hospitality',
  'Retail & Distribution',
  'Manufacturing',
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

export const portfolioCards = [
  {
    title: 'Healthcare Digital Registry',
    category: 'Healthcare platform',
    text: 'Patient onboarding, clinical workflow, reminders, daily logs, and management dashboards connected into one operating system.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'Commerce Growth Engine',
    category: 'E-commerce operations',
    text: 'Lead capture, catalogue structure, enquiry workflow, order coordination, WhatsApp handoff, and analytics visibility.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'AI Outreach Workflow',
    category: 'Sales automation',
    text: 'Prospect capture, Gmail draft creation, campaign tracking, reply summary, and next-action intelligence for business development teams.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85',
  },
];

export const technologies = [
  'AI / LLM Workflows',
  'Next.js / React',
  'Node.js',
  'PHP / MySQL',
  'Cloud Hosting',
  'CRM / ERP Systems',
  'API Integrations',
  'Analytics Dashboards',
  'WhatsApp & Email Automation',
  'SEO Landing Pages',
];

export const resources = [
  ['Digital Roadmap Guide', 'Plan website, CRM, automation, analytics, and growth campaigns before development starts.'],
  ['Automation Opportunity Audit', 'Identify repetitive manual tasks that can be converted into AI-assisted workflows.'],
  ['Launch Readiness Checklist', 'Prepare content, leads, enquiry flow, analytics, hosting, SSL, and post-launch operations.'],
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
