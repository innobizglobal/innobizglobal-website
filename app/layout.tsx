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


const criticalCss = `
  *,*::before,*::after{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#ffffff;color:#071634;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow-x:hidden}a{color:inherit;text-decoration:none}img{max-width:100%;height:auto}main{position:relative;min-height:100vh;background:#fff}.site-header img{width:178px!important;max-width:178px!important;height:76px!important;max-height:76px!important;object-fit:contain!important;display:block!important}.mega-menu{color:#071634}.section-pad{padding:92px max(28px,5.8vw)}.logo-marquee{display:flex;justify-content:space-around;gap:28px;padding:24px max(28px,5.8vw);background:#fff;border-top:1px solid rgba(13,42,99,.08);border-bottom:1px solid rgba(13,42,99,.08);color:#5d6678;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.section-head{max-width:920px;margin-bottom:42px}.kicker{margin:0 0 16px;color:#0a56f1;font-weight:900;letter-spacing:.16em;text-transform:uppercase;font-size:.82rem}.section-head h2,.showcase-card h2,.split-copy h2,.contact-copy h2{margin:0 0 16px;color:#071634;font-size:clamp(2rem,4vw,4rem);line-height:1;letter-spacing:-.055em}.section-head p,.showcase-card p,.split-copy p,.contact-copy p,.service-card p,.solution-card p,.portfolio-card p,.resource-card p,.timeline-item p,.testimonial-card p{color:#526074;line-height:1.7}.showcase-card,.service-card,.solution-card,.portfolio-card,.resource-card,.timeline-item,.testimonial-card,.impact-card,.contact-form,.detail-card{background:#fff;border:1px solid rgba(13,42,99,.10);box-shadow:0 22px 70px rgba(10,31,73,.08);border-radius:28px}.showcase-card{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center;padding:44px}.showcase-card img,.solution-card img,.portfolio-card img{width:100%;border-radius:22px;object-fit:cover}.service-grid,.portfolio-grid,.resource-grid,.impact-grid,.testimonial-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.service-card,.portfolio-card,.resource-card,.impact-card,.testimonial-card{padding:28px}.service-card h3,.solution-card h3,.portfolio-card h3,.resource-card h3,.timeline-item h3{margin:0 0 12px;color:#071634;font-size:1.35rem}.service-card span,.portfolio-card span{display:block;margin-bottom:12px;color:#ff6b00;font-weight:900;letter-spacing:.12em;text-transform:uppercase;font-size:.75rem}.service-card a,.portfolio-card a,.resource-card a{color:#0a56f1;font-weight:900}.solution-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.solution-card{overflow:hidden}.solution-card div,.portfolio-card div{padding:24px}.split-section,.contact-section{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center}.industry-pills,.tech-cloud,.contact-points,.detail-list{display:flex;flex-wrap:wrap;gap:12px}.industry-pills a,.tech-cloud span,.contact-points span,.detail-list span{padding:10px 14px;border-radius:999px;background:#eef5ff;color:#0a56f1;font-weight:800}.timeline{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.timeline-item{display:flex;gap:18px;padding:24px}.timeline-item span{color:#ff6b00;font-weight:900}.contact-form{display:grid;gap:16px;padding:28px}.contact-form label{display:grid;gap:8px;color:#071634;font-weight:800}.contact-form input,.contact-form select,.contact-form textarea{width:100%;padding:14px 16px;border:1px solid rgba(13,42,99,.15);border-radius:16px;background:#fff;color:#071634}.btn,.form-alt{display:inline-flex;justify-content:center;align-items:center;min-height:52px;padding:0 22px;border-radius:999px;background:#0a56f1;color:#fff;border:none;font-weight:900}.site-footer{padding:56px max(28px,5.8vw);background:#071634;color:#fff}.site-footer img{width:160px!important;height:auto!important}.desktop-nav{display:flex}.mobile-nav-toggle{display:none}@media(max-width:1100px){.desktop-nav{display:none!important}.site-header{min-height:82px!important}.site-header img{width:138px!important;height:64px!important}.v19-hero{min-height:auto!important;padding-top:72px!important}.v19-hero-content{width:min(100%,680px)!important}.v19-hero h1{font-size:clamp(2.2rem,10vw,4rem)!important}.v19-slide-controls{grid-template-columns:repeat(2,minmax(0,1fr))!important}.service-grid,.portfolio-grid,.resource-grid,.impact-grid,.testimonial-grid,.solution-grid,.split-section,.contact-section,.showcase-card,.timeline{grid-template-columns:1fr!important}.logo-marquee{flex-wrap:wrap;font-size:.78rem}}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
