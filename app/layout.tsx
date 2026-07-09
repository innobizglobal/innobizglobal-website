import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://innobizglobal.com'),
  title: {
    default: 'Innobiz Global Ventures | AI, Digital & Automation Services',
    template: '%s | Innobiz Global Ventures',
  },
  description: 'Innobiz Global Ventures builds AI assistants, workflow automation, product engineering platforms, CRM systems, and growth analytics for modern businesses.',
  openGraph: {
    title: 'Innobiz Global Ventures',
    description: 'AI, digital, automation, product engineering, and growth systems for ambitious businesses.',
    url: 'https://innobizglobal.com',
    siteName: 'Innobiz Global Ventures',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const criticalCss = `:root {
  --brand-blue: #0B2F8A;
  --electric-blue: #1E63FF;
  --warm-orange: #FF8A00;
  --deep-orange: #FF5A00;
  --ink: #071634;
  --muted: #647087;
  --line: rgba(11, 47, 138, 0.12);
  --soft: #F6F9FF;
  --white: #FFFFFF;
  --shadow: 0 22px 70px rgba(11, 47, 138, 0.10);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #fff; color: var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; overflow-x: hidden; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; }
main { min-height: 100vh; background: #fff; }
.site-header { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.96); border-bottom: 1px solid rgba(11,47,138,.10); backdrop-filter: blur(16px); box-shadow: 0 10px 34px rgba(11,47,138,.06); }
.site-header-inner { min-height: 92px; display: flex; align-items: center; gap: 26px; padding: 0 max(26px, 5vw); }
.site-logo { display: flex; align-items: center; flex: 0 0 auto; }
.site-logo img { display: block; width: 170px !important; max-width: 170px !important; height: 98px !important; max-height: 98px !important; object-fit: contain !important; }
.desktop-nav { display: flex; align-items: center; justify-content: center; gap: 7px; flex: 1; }
.nav-link { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; padding: 0 11px; border-radius: 999px; color: #101b36; font-weight: 850; font-size: 15px; white-space: nowrap; transition: all .22s ease; }
.nav-link:hover { color: var(--electric-blue); background: rgba(30, 99, 255, .07); }
.nav-chevron { display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; font-size: 16px; line-height: 1; transform: translateY(-1px); color: var(--brand-blue); opacity: .85; }
.header-cta { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 24px; border-radius: 999px; color: #fff; font-weight: 900; background: linear-gradient(135deg, var(--brand-blue), var(--electric-blue)); box-shadow: 0 14px 34px rgba(30,99,255,.28); }
.header-cta:hover { background: linear-gradient(135deg, var(--warm-orange), var(--deep-orange)); box-shadow: 0 14px 34px rgba(255,90,0,.24); }
.mobile-nav { display: none; }
.premium-hero { position: relative; min-height: 700px; display: grid; align-items: center; padding: 92px max(32px, 5.8vw) 110px; background-size: cover; background-position: center right; overflow: hidden; border-bottom: 1px solid rgba(11,47,138,.08); }
.premium-hero::after { content: ''; position: absolute; inset: auto 0 0; height: 120px; background: linear-gradient(0deg,#fff 0%,rgba(255,255,255,0) 100%); pointer-events: none; }
.hero-content { position: relative; z-index: 2; max-width: 650px; }
.hero-badge { display: inline-flex; align-items: center; gap: 10px; padding: 9px 14px; border-radius: 999px; border: 1px solid rgba(30,99,255,.18); background: rgba(255,255,255,.82); color: var(--brand-blue); font-size: 13px; font-weight: 950; letter-spacing: .12em; text-transform: uppercase; box-shadow: 0 10px 30px rgba(11,47,138,.08); }
.hero-badge span { display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg,var(--brand-blue),var(--electric-blue)); color:#fff; letter-spacing: 0; font-size: 12px; }
.premium-hero h1 { margin: 26px 0 18px; font-size: clamp(2.8rem, 5.4vw, 6.2rem); line-height: .98; letter-spacing: -.075em; color: var(--ink); max-width: 760px; }
.premium-hero h1::first-line { color: var(--brand-blue); }
.premium-hero p { margin: 0; max-width: 620px; color: #3f4d65; font-size: clamp(1.06rem, 1.6vw, 1.28rem); line-height: 1.68; font-weight: 560; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 34px; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 54px; padding: 0 24px; border-radius: 999px; font-weight: 950; border: 1px solid transparent; cursor: pointer; transition: transform .22s ease, box-shadow .22s ease, background .22s ease, color .22s ease; }
.btn:hover { transform: translateY(-2px); }
.btn-primary { color: #fff; background: linear-gradient(135deg,var(--brand-blue),var(--electric-blue)); box-shadow: 0 18px 38px rgba(30,99,255,.22); }
.btn-primary:hover { box-shadow: 0 22px 44px rgba(30,99,255,.32); }
.btn-secondary, .btn-ghost { color: var(--brand-blue); background: rgba(255,255,255,.82); border-color: rgba(30,99,255,.28); }
.btn-secondary:hover, .btn-ghost:hover { color: #fff; background: linear-gradient(135deg,var(--warm-orange),var(--deep-orange)); border-color: transparent; box-shadow: 0 18px 38px rgba(255,90,0,.22); }
.hero-selector { position: absolute; z-index: 3; left: max(32px,5.8vw); right: max(32px,5.8vw); bottom: 26px; display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 12px; }
.hero-selector button { min-height: 58px; border: 1px solid rgba(11,47,138,.12); border-radius: 18px; background: rgba(255,255,255,.78); color: #22314d; font-weight: 900; text-align: left; padding: 10px 14px; box-shadow: 0 12px 30px rgba(11,47,138,.08); backdrop-filter: blur(8px); cursor: pointer; }
.hero-selector button span { color: var(--warm-orange); margin-right: 10px; }
.hero-selector button.active { color: #fff; background: linear-gradient(135deg,var(--brand-blue),var(--electric-blue)); border-color: transparent; box-shadow: 0 18px 40px rgba(30,99,255,.22); }
.hero-selector button.active span { color: #fff; }
.logo-marquee { display: flex; justify-content: space-around; gap: 28px; padding: 24px max(28px,5.8vw); background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); color: var(--brand-blue); font-weight: 950; letter-spacing: .16em; text-transform: uppercase; }
.section-pad { padding: 92px max(28px,5.8vw); }
.section-head { max-width: 930px; margin-bottom: 42px; }
.kicker { margin: 0 0 16px; color: var(--deep-orange); font-weight: 950; letter-spacing: .16em; text-transform: uppercase; font-size: .82rem; }
.section-head h2, .showcase-card h2, .split-copy h2, .contact-copy h2, .inner-copy h2, .page-cta-card h2 { margin: 0 0 16px; color: var(--ink); font-size: clamp(2rem,4vw,4rem); line-height: 1; letter-spacing: -.055em; }
.section-head p, .showcase-card p, .split-copy p, .contact-copy p, .service-card p, .solution-card p, .portfolio-card p, .resource-card p, .timeline-item p, .testimonial-card p, .inner-copy p, .inner-feature-card p, .page-cta-card p { color: var(--muted); line-height: 1.72; }
.showcase-card, .service-card, .solution-card, .portfolio-card, .resource-card, .timeline-item, .testimonial-card, .impact-card, .contact-form, .inner-feature-card, .page-cta-card { background: rgba(255,255,255,.92); border: 1px solid var(--line); box-shadow: var(--shadow); border-radius: 28px; }
.showcase-card { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; align-items: center; padding: 44px; }
.showcase-card img, .solution-card img, .portfolio-card img, .inner-page-image, .image-main, .image-small { width: 100%; border-radius: 22px; object-fit: cover; box-shadow: 0 20px 60px rgba(11,47,138,.10); }
.service-grid, .portfolio-grid, .resource-grid, .impact-grid, .testimonial-grid, .inner-feature-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; }
.service-card, .portfolio-card, .resource-card, .impact-card, .testimonial-card, .inner-feature-card { padding: 28px; }
.service-card h3, .solution-card h3, .portfolio-card h3, .resource-card h3, .timeline-item h3, .inner-feature-card h3 { margin: 0 0 12px; color: var(--ink); font-size: 1.35rem; }
.service-card span, .portfolio-card span, .inner-feature-card span { display: block; margin-bottom: 12px; color: var(--deep-orange); font-weight: 950; letter-spacing: .12em; text-transform: uppercase; font-size: .75rem; }
.service-card a, .portfolio-card a, .resource-card a { color: var(--electric-blue); font-weight: 950; }
.solution-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; }
.solution-card { overflow: hidden; }
.solution-card div, .portfolio-card div { padding: 24px; }
.dark-band, .technologies-section { background: linear-gradient(180deg,#F6F9FF 0%,#FFFFFF 100%); }
.split-section, .contact-section, .inner-split-section { display: grid; grid-template-columns: 1fr 1fr; gap: 54px; align-items: center; }
.industry-pills, .tech-cloud, .contact-points, .detail-list { display: flex; flex-wrap: wrap; gap: 12px; }
.industry-pills a, .tech-cloud span, .contact-points span, .detail-list span { padding: 10px 14px; border-radius: 999px; background: #eef5ff; color: var(--brand-blue); font-weight: 900; border: 1px solid rgba(30,99,255,.12); }
.timeline { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
.timeline-item { display: flex; gap: 18px; padding: 24px; }
.timeline-item span { color: var(--deep-orange); font-weight: 950; }
.impact-card strong { display:block; font-size: 2.6rem; color: var(--electric-blue); letter-spacing: -.04em; }
.contact-form { display: grid; gap: 16px; padding: 28px; }
.contact-form label { display: grid; gap: 8px; color: var(--ink); font-weight: 850; }
.contact-form input, .contact-form select, .contact-form textarea { width: 100%; padding: 14px 16px; border: 1px solid rgba(11,47,138,.16); border-radius: 16px; background: #fff; color: var(--ink); font: inherit; }
.form-status { margin: 0; color: var(--brand-blue); font-weight: 800; }
.inner-hero { position: relative; background: linear-gradient(135deg,#fff 0%,#eef5ff 100%); overflow: hidden; }
.inner-hero::after { content: ''; position: absolute; right: 0; top: 0; width: 50%; height: 100%; background: url('/images/hero-product.jpg') center right/cover no-repeat; opacity: .38; }
.inner-hero-content { position: relative; z-index: 1; max-width: 850px; }
.inner-hero h1 { margin: 0 0 18px; font-size: clamp(2.6rem,5.6vw,6.4rem); line-height: .98; letter-spacing: -.075em; color: var(--ink); }
.inner-hero p { max-width: 700px; color: var(--muted); font-size: 1.16rem; line-height: 1.7; }
.inner-page-image { min-height: 360px; }
.page-cta-card { max-width: 980px; margin: 0 auto; padding: 44px; text-align: center; }
.site-footer { padding: 56px max(28px,5.8vw) 32px; background: #F5F8FF; border-top: 1px solid var(--line); color: var(--ink); }
.site-footer img { width: 260px !important; max-width: 260px !important; height: auto !important; display:block; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.2fr; gap: 34px; }
.site-footer h3 { margin: 0 0 16px; color: var(--brand-blue); }
.site-footer a { display: block; margin: 10px 0; color: #34435d; font-weight: 750; }
.site-footer p { color: var(--muted); max-width: 420px; }
.footer-bottom { margin-top: 34px; padding-top: 22px; border-top: 1px solid var(--line); color: #6b7486; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
.reveal { animation: fadeUp .72s ease both; }
.delay-1 { animation-delay: .12s; }
@media (max-width: 1180px) { .desktop-nav { display:none; } .mobile-nav { display:flex; gap:10px; overflow-x:auto; padding:0 max(20px,4vw) 14px; } .mobile-nav a { flex:0 0 auto; padding:8px 12px; border-radius:999px; background:#eef5ff; color:var(--brand-blue); font-weight:850; } .site-header-inner { min-height:84px; } .site-logo img { width:136px!important; max-width:136px!important; height:78px!important; max-height:78px!important; } }
@media (max-width: 900px) { .premium-hero { min-height: auto; padding: 54px 22px 150px; background-position: 60% center; } .premium-hero h1 { font-size: clamp(2.45rem,12vw,4.8rem); } .premium-hero p { font-size: 1rem; } .hero-selector { grid-template-columns: repeat(2,minmax(0,1fr)); left:22px; right:22px; } .hero-selector button { min-height:48px; font-size:12px; } .section-pad { padding: 64px 22px; } .service-grid, .portfolio-grid, .resource-grid, .impact-grid, .testimonial-grid, .inner-feature-grid, .solution-grid, .split-section, .contact-section, .showcase-card, .timeline, .inner-split-section, .footer-grid { grid-template-columns: 1fr; } .showcase-card { padding: 26px; } .logo-marquee { flex-wrap: wrap; font-size: .75rem; } .header-cta { padding: 0 16px; min-height: 44px; } }
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
