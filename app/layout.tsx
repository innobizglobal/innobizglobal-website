import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://innobizglobal.com'),
  title: {
    default: 'Innobiz Global Ventures | Digital Growth, AI Automation & Portal Operations',
    template: '%s | Innobiz Global Ventures',
  },
  description:
    'Innobiz Global Ventures helps businesses launch premium websites, digital portals, AI automation workflows, CRM systems, campaigns, and analytics-led growth engines.',
  keywords: [
    'Innobiz Global',
    'digital business consulting',
    'AI automation',
    'website development',
    'CRM workflows',
    'portal operations',
    'digital growth',
  ],
  openGraph: {
    title: 'Innobiz Global Ventures',
    description: 'Digital growth, AI automation, CRM workflows, and portal operations for ambitious businesses.',
    url: 'https://innobizglobal.com',
    siteName: 'Innobiz Global Ventures',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
