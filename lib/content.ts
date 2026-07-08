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
  pageIntro?: string;
  useCases?: string[];
};

export const services: Service[] = [
  {
    slug: 'digital-transformation-consulting',
    eyebrow: '01',
    title: 'Digital Transformation Consulting',
    short: 'Strategy, roadmap, operating model, customer journey, automation plan, and launch priorities for digital-first businesses.',
    description:
      'We help businesses move from scattered digital activity to a structured transformation roadmap covering brand presence, product architecture, customer acquisition, CRM, automation, analytics, and operating discipline.',
    pageIntro:
      'A structured consulting engagement to understand where your business is today, where digital can create value, and what should be built first for measurable growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Transformation roadmap', 'Customer journey blueprint', 'Revenue and operations model'],
    features: ['Business model mapping', 'Customer journey design', 'Digital operating model', 'Implementation roadmap'],
    process: ['Discovery workshop', 'Opportunity mapping', 'Roadmap design', 'Execution planning'],
    useCases: ['New digital business launch', 'Existing website or portal modernization', 'CRM and customer journey redesign'],
  },
  {
    slug: 'product-engineering-web-apps',
    eyebrow: '02',
    title: 'Product Engineering & Web Apps',
    short: 'Premium websites, portals, mobile-first web applications, landing pages, dashboards, and internal business systems.',
    description:
      'We design and engineer digital products that look premium, load fast, support real business workflows, and can grow into portals, dashboards, mobile interfaces, and customer-facing platforms.',
    pageIntro:
      'From brand websites to workflow portals, Innobiz builds practical digital products that combine design, engineering, content, and launch readiness.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Premium web presence', 'Scalable product foundation', 'Mobile-first experience'],
    features: ['Corporate websites', 'Web applications', 'Landing pages', 'Admin dashboards'],
    process: ['Information architecture', 'UX/UI direction', 'Development', 'Testing and deployment'],
    useCases: ['Corporate website', 'Customer portal', 'Internal dashboard', 'Mobile-first business application'],
  },
  {
    slug: 'ai-automation-solutions',
    eyebrow: '03',
    title: 'AI Automation Solutions',
    short: 'AI assistants, enquiry intelligence, response drafting, lead qualification, summaries, reminders, and workflow automation.',
    description:
      'We design practical AI workflows that reduce repetitive work and help teams respond faster, summarize information, classify enquiries, draft communication, and make operations more visible.',
    pageIntro:
      'AI should improve daily operations. We identify useful AI workflows, connect them with your tools, and help your team use them confidently.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Faster daily operations', 'Smarter customer responses', 'Improved team productivity'],
    features: ['AI enquiry assistant', 'Email draft automation', 'Lead scoring', 'Daily summary dashboards'],
    process: ['Workflow audit', 'AI use-case design', 'Automation build', 'Team handover'],
    useCases: ['Sales enquiry classification', 'Gmail draft preparation', 'Customer support summaries', 'Daily management reports'],
  },
  {
    slug: 'cloud-devops-managed-it',
    eyebrow: '04',
    title: 'Cloud, DevOps & Managed IT',
    short: 'Hosting architecture, deployment pipelines, performance tuning, monitoring, backups, security basics, and support continuity.',
    description:
      'We help businesses move from fragile deployments to structured cloud-ready systems with reliable hosting, version control, deployment routines, backups, performance checks, and support processes.',
    pageIntro:
      'A reliable digital business needs disciplined hosting, deployment, monitoring, backups, and support routines. We set up the foundation for stable operations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Reliable deployments', 'Better performance', 'Operational continuity'],
    features: ['Cloud hosting setup', 'Deployment workflows', 'Performance optimization', 'Monitoring and backup planning'],
    process: ['Infrastructure audit', 'Deployment setup', 'Security and backup checks', 'Support handover'],
    useCases: ['Hostinger/Cloud setup', 'Next.js and PHP deployment', 'Backup planning', 'Performance checks'],
  },
  {
    slug: 'crm-erp-portal-operations',
    eyebrow: '05',
    title: 'CRM, ERP & Portal Operations',
    short: 'Lead pipelines, customer support queues, order workflows, enquiry tracking, reminders, internal portals, and reporting systems.',
    description:
      'We build structured CRM, ERP-lite, and portal workflows so every enquiry, order, task, payment coordination, support request, and follow-up has visibility and ownership.',
    pageIntro:
      'We convert manual follow-up, scattered spreadsheets, and missed enquiries into structured operating systems with ownership, reminders, and reporting.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['No lost enquiries', 'Clear team accountability', 'Better operational reporting'],
    features: ['Lead pipeline', 'Follow-up reminders', 'Support queue', 'Management reports'],
    process: ['Current process mapping', 'CRM flow design', 'Automation setup', 'Reporting dashboard'],
    useCases: ['Lead CRM', 'Order workflow', 'Customer support portal', 'Operations reporting'],
  },
  {
    slug: 'growth-campaigns-analytics',
    eyebrow: '06',
    title: 'Growth Campaigns & Analytics',
    short: 'Campaign landing pages, conversion tracking, email outreach systems, dashboards, and performance optimization loops.',
    description:
      'We connect digital campaigns with lead capture, CRM follow-up, performance tracking, and analytics so marketing activity becomes measurable and manageable.',
    pageIntro:
      'Marketing works best when campaigns, landing pages, lead capture, follow-up, and reporting are connected. We build that operating loop.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    outcomes: ['Trackable campaigns', 'Better conversion visibility', 'Actionable business reports'],
    features: ['Landing pages', 'Campaign analytics', 'Email outreach workflow', 'Conversion reporting'],
    process: ['Campaign strategy', 'Landing page build', 'Tracking setup', 'Optimization loop'],
    useCases: ['Lead generation campaigns', 'Email outreach', 'Analytics dashboards', 'Conversion optimization'],
  },
];

export type Industry = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  needs: string[];
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: 'healthcare-wellness',
    title: 'Healthcare & Wellness',
    short: 'Patient journeys, registrations, reminders, reports, wellness programs, and secure operational dashboards.',
    description: 'We help healthcare and wellness businesses create digital front doors, structured patient workflows, appointment reminders, reports, registries, and growth campaigns.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85',
    needs: ['Patient onboarding', 'Doctor and staff dashboards', 'Follow-up reminders', 'Digital reports'],
    solutions: ['Registry apps', 'Appointment and reminder workflows', 'Patient portals', 'Analytics dashboards'],
  },
  {
    slug: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    short: 'Catalogue, orders, support, campaigns, customer retention, and digital storefront operations.',
    description: 'We help retail and D2C businesses connect storefronts, campaigns, customer enquiries, order coordination, WhatsApp handoffs, and analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    needs: ['Product discovery', 'Order visibility', 'Support workflows', 'Campaign tracking'],
    solutions: ['Commerce portals', 'CRM order flows', 'Landing pages', 'Retention dashboards'],
  },
  {
    slug: 'pharma-labs',
    title: 'Pharma & Labs',
    short: 'B2B outreach, procurement workflows, sample tracking, reports, quote management, and client communication.',
    description: 'For pharmaceutical, analytical, and lab-led businesses, we structure enquiry capture, quotation follow-up, report systems, and B2B campaign workflows.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1200&q=85',
    needs: ['B2B lead capture', 'Report workflows', 'Sample and status visibility', 'Follow-up discipline'],
    solutions: ['Client portals', 'Report generators', 'CRM dashboards', 'Email outreach workflows'],
  },
  {
    slug: 'travel-hospitality',
    title: 'Travel & Hospitality',
    short: 'Booking journeys, itinerary support, guest communication, operations dashboards, and service automation.',
    description: 'We build digital journeys that help travel and hospitality businesses capture enquiries, guide customers, coordinate bookings, and improve service visibility.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85',
    needs: ['Enquiry capture', 'Booking coordination', 'Guest communication', 'Operational reports'],
    solutions: ['Booking funnels', 'Guest CRM', 'WhatsApp handoffs', 'Travel planning assistants'],
  },
  {
    slug: 'retail-distribution',
    title: 'Retail & Distribution',
    short: 'Dealer workflows, inventory visibility, customer support, order tracking, and field-team coordination.',
    description: 'We help distribution-led businesses organize orders, dealers, leads, customer support, and management reports into one digital operating rhythm.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    needs: ['Dealer visibility', 'Order tracking', 'Field coordination', 'Stock and dispatch updates'],
    solutions: ['Dealer portals', 'Order dashboards', 'Support CRM', 'Performance reports'],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    short: 'B2B enquiries, quotation workflows, production visibility, service requests, and distributor communication.',
    description: 'Manufacturing companies need reliable systems for enquiries, quotes, customers, dealer networks, service support, and internal reporting.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85',
    needs: ['Quote management', 'B2B sales workflows', 'Service tickets', 'Management visibility'],
    solutions: ['Lead CRM', 'Quote trackers', 'Service portals', 'Sales dashboards'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    short: 'Lead capture, consultation journeys, proposal workflows, content funnels, and client reporting.',
    description: 'We help service-led businesses present expertise professionally, capture qualified leads, manage follow-ups, and build repeatable growth systems.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    needs: ['Authority-building website', 'Consultation enquiries', 'Proposal follow-up', 'Client communication'],
    solutions: ['Premium websites', 'Lead funnels', 'CRM workflows', 'Content and resource hubs'],
  },
  {
    slug: 'startups-new-ventures',
    title: 'Startups & New Ventures',
    short: 'MVPs, landing pages, growth experiments, investor-ready positioning, and operational foundations.',
    description: 'We help founders convert ideas into practical launches with focused websites, MVP flows, dashboards, and staged growth roadmaps.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85',
    needs: ['Idea validation', 'MVP launch', 'Landing pages', 'Growth experiments'],
    solutions: ['MVP build', 'Launch roadmap', 'Pitch-ready website', 'Analytics setup'],
  },
];

export const industryNames = industries.map((industry) => industry.title);

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
    slug: 'online-growth-portals',
    title: 'Online Growth Portals',
    text: 'Launch product, service, healthcare, wellness, or consultation portals with CRM and support workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
  },
  {
    slug: 'ai-business-assistants',
    title: 'AI Business Assistants',
    text: 'Create internal assistants that prepare drafts, summarize leads, classify enquiries, and guide teams through daily work.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85',
  },
  {
    slug: 'crm-campaign-engine',
    title: 'CRM + Campaign Engine',
    text: 'Capture leads from campaigns, route them to teams, follow up properly, and measure the complete sales funnel.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85',
  },
];

export type PortfolioCard = {
  slug: string;
  title: string;
  category: string;
  text: string;
  image: string;
  highlights: string[];
  modules: string[];
};

export const portfolioCards: PortfolioCard[] = [
  {
    slug: 'healthcare-digital-registry',
    title: 'Healthcare Digital Registry',
    category: 'Healthcare platform',
    text: 'Patient onboarding, clinical workflow, reminders, daily logs, and management dashboards connected into one operating system.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Patient registration', 'Plan tracking', 'Automated reminders', 'Staff dashboard'],
    modules: ['Patient app', 'Doctor plan entry', 'Daily logs', 'Progress reporting'],
  },
  {
    slug: 'commerce-growth-engine',
    title: 'Commerce Growth Engine',
    category: 'E-commerce operations',
    text: 'Lead capture, catalogue structure, enquiry workflow, order coordination, WhatsApp handoff, and analytics visibility.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Product catalogue', 'Campaign landing pages', 'Lead CRM', 'WhatsApp follow-up'],
    modules: ['Storefront', 'Order dashboard', 'Customer queue', 'Campaign reports'],
  },
  {
    slug: 'ai-outreach-workflow',
    title: 'AI Outreach Workflow',
    category: 'Sales automation',
    text: 'Prospect capture, Gmail draft creation, campaign tracking, reply summary, and next-action intelligence for business development teams.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Prospect list', 'Draft creation', 'Reply monitoring', 'Action summary'],
    modules: ['Apollo search', 'Gmail drafts', 'Campaign tracker', 'Reply intelligence'],
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

export type Resource = {
  slug: string;
  title: string;
  text: string;
  sections: string[];
};

export const resources: Resource[] = [
  {
    slug: 'digital-roadmap-guide',
    title: 'Digital Roadmap Guide',
    text: 'Plan website, CRM, automation, analytics, and growth campaigns before development starts.',
    sections: ['Business objective clarity', 'Customer journey map', 'Technology roadmap', 'Launch priorities'],
  },
  {
    slug: 'automation-opportunity-audit',
    title: 'Automation Opportunity Audit',
    text: 'Identify repetitive manual tasks that can be converted into AI-assisted workflows.',
    sections: ['Manual task mapping', 'Automation priority scoring', 'AI workflow options', 'Team adoption plan'],
  },
  {
    slug: 'launch-readiness-checklist',
    title: 'Launch Readiness Checklist',
    text: 'Prepare content, leads, enquiry flow, analytics, hosting, SSL, and post-launch operations.',
    sections: ['Content readiness', 'Form and CRM testing', 'SEO basics', 'Analytics and backup checks'],
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

export type SimplePage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  bullets: string[];
  cta?: string;
};

export const aiPages: SimplePage[] = [
  {
    slug: 'business-assistants',
    eyebrow: 'InnobizAI',
    title: 'AI Business Assistants',
    summary: 'Internal AI assistants for routine summaries, drafts, enquiries, and management visibility.',
    description: 'We design practical assistants that work around your business process, not generic chatbot scripts.',
    bullets: ['Lead and enquiry summaries', 'Email draft support', 'Daily action reports', 'Workflow guidance'],
    cta: 'Discuss an AI assistant',
  },
  {
    slug: 'workflow-automation',
    eyebrow: 'InnobizAI',
    title: 'Workflow Automation',
    summary: 'Connect forms, CRM, Gmail, WhatsApp, dashboards, and reminders into repeatable workflows.',
    description: 'Automation should remove friction from everyday operations and make ownership clear across the team.',
    bullets: ['Follow-up automation', 'Internal notifications', 'Task routing', 'Status dashboards'],
    cta: 'Map my workflow',
  },
  {
    slug: 'outreach-systems',
    eyebrow: 'InnobizAI',
    title: 'AI Outreach Systems',
    summary: 'Prospect capture, draft creation, campaign follow-up, and reply summaries for business development.',
    description: 'We help business teams run structured outreach while keeping approvals and communication quality under control.',
    bullets: ['Prospect list workflows', 'Draft email preparation', 'Reply monitoring', 'Next-action summaries'],
    cta: 'Build outreach system',
  },
  {
    slug: 'lead-qualification',
    eyebrow: 'InnobizAI',
    title: 'Lead Qualification',
    summary: 'Classify and prioritize enquiries based on business fit, urgency, service interest, and next action.',
    description: 'Every lead should have context, priority, and ownership. We create qualification flows that help teams respond faster.',
    bullets: ['Lead scoring', 'Service interest tagging', 'Priority routing', 'Follow-up reminders'],
    cta: 'Improve lead handling',
  },
  {
    slug: 'customer-support-intelligence',
    eyebrow: 'InnobizAI',
    title: 'Customer Support Intelligence',
    summary: 'Summaries, categories, response suggestions, and visibility for support teams.',
    description: 'Support teams need clear context and next actions. AI can help organize requests and reduce repetitive response work.',
    bullets: ['Ticket classification', 'Response suggestions', 'Issue summaries', 'Escalation visibility'],
    cta: 'Plan support intelligence',
  },
  {
    slug: 'email-whatsapp-automation',
    eyebrow: 'InnobizAI',
    title: 'Email & WhatsApp Automation',
    summary: 'Automated notifications, reminders, enquiry handoffs, and communication tracking.',
    description: 'We connect customer communication to the operating workflow so teams can track what was sent and what needs action.',
    bullets: ['Email draft workflows', 'WhatsApp handoff', 'Reminder messages', 'Conversation tracking'],
    cta: 'Automate communication',
  },
];

export const aboutPages: SimplePage[] = [
  {
    slug: 'how-we-work',
    eyebrow: 'About Innobiz',
    title: 'How We Work',
    summary: 'A practical delivery model from discovery to design, development, automation, launch, and scale.',
    description: 'Our process keeps business goals, user experience, technical build, and operations connected from day one.',
    bullets: ['Discovery and roadmap', 'Design and content structure', 'Build and integrations', 'Launch and optimization'],
  },
  {
    slug: 'why-innobiz',
    eyebrow: 'About Innobiz',
    title: 'Why Innobiz',
    summary: 'Business-first thinking supported by technology execution and operational discipline.',
    description: 'We focus on the complete growth engine, not only a website screen. That includes CRM, campaigns, follow-up, reports, and automation.',
    bullets: ['Strategy-led execution', 'Premium design direction', 'Practical automation', 'Long-term improvement mindset'],
  },
  {
    slug: 'consulting-first',
    eyebrow: 'Approach',
    title: 'Consulting First',
    summary: 'We begin with business context before recommending technology.',
    description: 'This reduces wasted development and helps prioritize features that can create commercial impact.',
    bullets: ['Business model understanding', 'Audience and journey clarity', 'Workflow assessment', 'Implementation priorities'],
  },
  {
    slug: 'build-to-scale',
    eyebrow: 'Approach',
    title: 'Build to Scale',
    summary: 'Digital platforms should support growth, future pages, campaigns, data, and internal operations.',
    description: 'We create structures that can expand instead of rebuilding every time the business adds a new requirement.',
    bullets: ['Reusable page sections', 'Scalable data models', 'Automation-ready workflows', 'Performance-first deployment'],
  },
  {
    slug: 'launch-improve',
    eyebrow: 'Approach',
    title: 'Launch & Improve',
    summary: 'After launch, the work continues through measurement, feedback, and improvement.',
    description: 'We help teams track performance, optimize conversion, and add workflows as the business learns from real usage.',
    bullets: ['Analytics review', 'Conversion improvement', 'Workflow refinement', 'New campaign rollouts'],
  },
];
