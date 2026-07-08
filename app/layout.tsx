import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Innobiz Global Ventures | Digital Growth, AI Automation & Portal Operations',
  description:
    'Innobiz Global Ventures helps businesses launch digital portals, automate customer journeys, manage campaigns, capture leads, support customers, and scale online operations.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
