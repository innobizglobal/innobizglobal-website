export type MenuGroup = {
  label: string;
  href: string;
  intro: string;
  columns: Array<{
    title: string;
    links: Array<[string, string]>;
  }>;
};

export const menuGroups: MenuGroup[] = [
  {
    label: 'InnobizAI',
    href: '/innobizai',
    intro: 'Explore AI workflows that support sales, service, operations, and management visibility.',
    columns: [
      {
        title: 'AI Solutions',
        links: [
          ['AI Business Assistants', '/innobizai/business-assistants'],
          ['Workflow Automation', '/innobizai/workflow-automation'],
          ['AI Outreach Systems', '/innobizai/outreach-systems'],
        ],
      },
      {
        title: 'Use Cases',
        links: [
          ['Lead Qualification', '/innobizai/lead-qualification'],
          ['Customer Support Intelligence', '/innobizai/customer-support-intelligence'],
          ['Email & WhatsApp Automation', '/innobizai/email-whatsapp-automation'],
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    intro: 'Learn how Innobiz combines business consulting, technology execution, and operations thinking.',
    columns: [
      {
        title: 'Company',
        links: [
          ['About Innobiz', '/about'],
          ['How We Work', '/about/how-we-work'],
          ['Why Innobiz', '/about/why-innobiz'],
        ],
      },
      {
        title: 'Approach',
        links: [
          ['Consulting First', '/about/consulting-first'],
          ['Build to Scale', '/about/build-to-scale'],
          ['Launch & Improve', '/about/launch-improve'],
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    intro: 'Digital transformation, product engineering, AI automation, CRM, cloud, and analytics services.',
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
    href: '/industries',
    intro: 'Industry-focused digital journeys for companies that need websites plus real operating systems.',
    columns: [
      {
        title: 'Priority Industries',
        links: [
          ['Healthcare & Wellness', '/industries/healthcare-wellness'],
          ['E-commerce & Retail', '/industries/ecommerce-retail'],
          ['Pharma & Labs', '/industries/pharma-labs'],
        ],
      },
      {
        title: 'Business Verticals',
        links: [
          ['Travel & Hospitality', '/industries/travel-hospitality'],
          ['Retail & Distribution', '/industries/retail-distribution'],
          ['Manufacturing', '/industries/manufacturing'],
          ['Professional Services', '/industries/professional-services'],
          ['Startups & New Ventures', '/industries/startups-new-ventures'],
        ],
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    intro: 'Outcome-style showcases for platforms, portals, automation, and digital growth systems.',
    columns: [
      {
        title: 'Outcome Stories',
        links: [
          ['Healthcare Digital Registry', '/portfolio/healthcare-digital-registry'],
          ['Commerce Growth Engine', '/portfolio/commerce-growth-engine'],
          ['AI Outreach Workflow', '/portfolio/ai-outreach-workflow'],
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    intro: 'Planning assets for digital roadmaps, automation opportunities, and launch readiness.',
    columns: [
      {
        title: 'Planning Assets',
        links: [
          ['Digital Roadmap Guide', '/resources/digital-roadmap-guide'],
          ['Automation Opportunity Audit', '/resources/automation-opportunity-audit'],
          ['Launch Checklist', '/resources/launch-readiness-checklist'],
        ],
      },
    ],
  },
];
