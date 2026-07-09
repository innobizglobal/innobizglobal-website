import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://innobizglobal.com'),
  title: {
    default: 'Innobiz Global Ventures | AI, Digital Transformation & Automation',
    template: '%s | Innobiz Global Ventures',
  },
  description:
    'Innobiz Global Ventures helps businesses build AI automation, digital products, CRM workflows, portals, and analytics-led growth systems.',
  keywords: [
    'Innobiz Global',
    'digital transformation',
    'AI automation',
    'website development',
    'CRM workflows',
    'portal operations',
    'digital growth',
  ],
  openGraph: {
    title: 'Innobiz Global Ventures',
    description: 'AI, digital transformation, automation, product engineering, CRM workflows, and growth systems.',
    url: 'https://innobizglobal.com',
    siteName: 'Innobiz Global Ventures',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const criticalCss = `
:root {
  --brand-blue: #0B2F8A;
  --electric-blue: #1E63FF;
  --warm-orange: #FF8A00;
  --deep-orange: #FF5A00;
  --dark-bg: #060B14;
  --soft-dark: #0D1630;
  --white: #FFFFFF;
  --muted: #B8C2D6;
  --muted-2: #7F8DAA;
  --line: rgba(255,255,255,.13);
  --card: rgba(255,255,255,.065);
  --card-strong: rgba(255,255,255,.095);
  --blue-glow: rgba(30,99,255,.35);
  --orange-glow: rgba(255,138,0,.22);
  --shadow: 0 30px 90px rgba(0,0,0,.42);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background:
    radial-gradient(circle at 14% 6%, rgba(30,99,255,.30), transparent 30%),
    radial-gradient(circle at 86% 10%, rgba(255,138,0,.13), transparent 28%),
    linear-gradient(180deg, var(--dark-bg) 0%, #081022 44%, var(--dark-bg) 100%);
  color: var(--white);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: .42;
  background-image:
    linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 58px 58px;
  mask-image: linear-gradient(to bottom, black, transparent 78%);
}
main { position: relative; z-index: 1; min-height: 100vh; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; }
button, input, textarea, select { font: inherit; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 10px max(24px, 5vw);
  background: rgba(6,11,20,.94);
  border-bottom: 1px solid rgba(255,255,255,.10);
  box-shadow: 0 18px 60px rgba(0,0,0,.35);
  backdrop-filter: blur(18px);
}
.brand { display: inline-flex; align-items: center; flex: 0 0 auto; }
.brand img, .v16-nav-logo, .v19-nav-logo {
  width: 190px !important;
  max-width: 190px !important;
  height: 64px !important;
  max-height: 64px !important;
  object-fit: contain !important;
  display: block !important;
}
.desktop-nav { display: flex; align-items: center; justify-content: center; gap: 26px; flex: 1 1 auto; min-width: 0; }
.nav-item { position: relative; display: inline-flex; align-items: center; }
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(255,255,255,.88);
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  transition: color .2s ease, transform .2s ease;
}
.nav-link:hover { color: var(--electric-blue); }
.nav-chevron { display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; color: var(--muted); font-size: 14px; line-height: 1; }
.explore-link { color: var(--muted) !important; }
.explore-link:hover { color: var(--warm-orange) !important; }
.header-cta, .premium-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  color: #fff;
  font-weight: 900;
  white-space: nowrap;
  background: linear-gradient(135deg, var(--brand-blue), var(--electric-blue));
  box-shadow: 0 18px 42px rgba(30,99,255,.28);
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.header-cta:hover, .premium-cta:hover { transform: translateY(-2px); box-shadow: 0 22px 52px rgba(30,99,255,.38); background: linear-gradient(135deg, var(--electric-blue), var(--warm-orange)); }
.mega-menu {
  display: none;
  grid-template-columns: 260px 1fr;
  gap: 26px;
  position: absolute;
  left: 50%;
  top: 36px;
  transform: translateX(-50%);
  width: 780px;
  max-width: calc(100vw - 72px);
  padding: 24px;
  border-radius: 26px;
  background: rgba(9,18,39,.98);
  border: 1px solid rgba(255,255,255,.13);
  box-shadow: 0 30px 90px rgba(0,0,0,.50);
  color: var(--white);
  backdrop-filter: blur(22px);
}
.nav-item:hover .mega-menu { display: grid; }
.mega-intro { padding: 18px; border-radius: 20px; background: linear-gradient(135deg, rgba(30,99,255,.14), rgba(255,138,0,.10)); border: 1px solid rgba(255,255,255,.08); }
.mega-intro span { color: var(--warm-orange); font-weight: 900; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; }
.mega-intro strong { display: block; margin-top: 10px; color: #fff; font-size: 22px; line-height: 1.1; }
.mega-intro p { margin: 12px 0 0; color: var(--muted); line-height: 1.55; }
.mega-columns { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
.mega-column h4 { margin: 0 0 12px; color: var(--muted); font-size: 14px; text-transform: uppercase; letter-spacing: .12em; }
.mega-column a { color: rgba(255,255,255,.88); font-weight: 760; padding: 8px 0; display: block; }
.mega-column a:hover { color: var(--electric-blue); }

.v20-hero, .v19-hero {
  position: relative;
  min-height: calc(100vh - 92px);
  overflow: hidden;
  display: grid;
  align-items: center;
  padding: clamp(76px, 8vw, 116px) max(28px, 5.8vw) 50px;
  background:
    radial-gradient(circle at 80% 42%, rgba(30,99,255,.28), transparent 34%),
    radial-gradient(circle at 62% 64%, rgba(255,138,0,.14), transparent 26%),
    linear-gradient(135deg, #060B14 0%, #0D1630 60%, #060B14 100%);
}
.v20-hero::before, .v19-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(6,11,20,.98) 0%, rgba(6,11,20,.92) 34%, rgba(6,11,20,.48) 62%, rgba(6,11,20,.18) 100%),
    radial-gradient(circle at 50% 44%, rgba(30,99,255,.25), transparent 30%);
  z-index: 1;
}
.v20-hero::after, .v19-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(115deg, transparent 0 46%, rgba(30,99,255,.28) 47%, transparent 49%),
    linear-gradient(70deg, transparent 0 58%, rgba(255,138,0,.17) 59%, transparent 61%);
  opacity: .35;
  z-index: 1;
  animation: circuitDrift 9s linear infinite;
}
@keyframes circuitDrift { from { transform: translateX(-2%); } to { transform: translateX(2%); } }
.v19-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center right;
  opacity: .36;
  filter: saturate(1.2) contrast(1.05) brightness(.72);
  mix-blend-mode: screen;
  z-index: 0;
  transition: opacity .5s ease;
}
.v19-hero-content { position: relative; z-index: 3; width: min(690px, 52vw); color: var(--white); }
.v19-eyebrow, .kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  color: var(--warm-orange);
  font-weight: 900;
  font-size: .83rem;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.v19-eyebrow {
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(30,99,255,.12);
  border: 1px solid rgba(30,99,255,.24);
  color: var(--muted);
}
.v19-hero h1 {
  margin: 0 0 22px;
  color: #fff;
  font-size: clamp(2.75rem, 4.9vw, 5.15rem);
  line-height: .96;
  letter-spacing: -.06em;
  font-weight: 950;
  text-wrap: balance;
}
.v19-hero h1 .accent-blue, .accent-blue { color: var(--electric-blue); }
.v19-hero h1 .accent-orange, .accent-orange { color: var(--warm-orange); }
.v19-hero-text { margin: 0; color: var(--muted); font-size: clamp(1.05rem, 1.25vw, 1.24rem); line-height: 1.65; max-width: 640px; font-weight: 600; }
.v19-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 30px; }
.v19-btn, .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 58px;
  padding: 0 26px;
  border-radius: 999px;
  border: 0;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
}
.v19-btn-primary, .btn-primary {
  color: #fff;
  background: linear-gradient(135deg, var(--brand-blue) 0%, var(--electric-blue) 100%);
  box-shadow: 0 22px 48px rgba(30,99,255,.25);
}
.v19-btn-primary:hover, .btn-primary:hover { background: linear-gradient(135deg, var(--electric-blue) 0%, var(--warm-orange) 115%); transform: translateY(-2px); }
.v19-btn-secondary, .btn-ghost, .form-alt {
  color: #fff;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.16);
}
.v19-btn-secondary:hover, .btn-ghost:hover, .form-alt:hover { border-color: rgba(255,138,0,.5); color: var(--warm-orange); transform: translateY(-2px); }
.v19-slide-controls {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 42px;
  max-width: 720px;
}
.v19-slide-controls button {
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.065);
  color: var(--muted);
  border-radius: 18px;
  padding: 12px 10px;
  cursor: pointer;
  text-align: left;
  font-weight: 900;
  box-shadow: none;
}
.v19-slide-controls button.active {
  border-color: rgba(30,99,255,.55);
  background: linear-gradient(135deg, rgba(30,99,255,.22), rgba(255,138,0,.10));
  color: #fff;
  box-shadow: 0 18px 38px rgba(30,99,255,.16);
}

.section-pad { padding: 96px max(28px,5.8vw); }
.logo-marquee {
  display: flex;
  justify-content: space-around;
  gap: 28px;
  padding: 24px max(28px,5.8vw);
  background: rgba(13,22,48,.84);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-weight: 900;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.section-head { max-width: 920px; margin-bottom: 44px; }
.section-head h2, .showcase-card h2, .split-copy h2, .contact-copy h2, .inner-copy h2, .page-cta-card h2, .resource-detail-copy h2 {
  margin: 0 0 16px;
  color: var(--white);
  font-size: clamp(2rem,4vw,4rem);
  line-height: 1;
  letter-spacing: -.055em;
}
.section-head p, .showcase-card p, .split-copy p, .contact-copy p, .service-card p, .solution-card p, .portfolio-card p, .resource-card p, .timeline-item p, .testimonial-card p, .inner-copy p, .page-cta-card p, .inner-feature-card p, .detail-card p, .resource-detail-copy p {
  color: var(--muted);
  line-height: 1.7;
}
.showcase-card, .service-card, .solution-card, .portfolio-card, .resource-card, .timeline-item, .testimonial-card, .impact-card, .contact-form, .inner-feature-card, .page-cta-card, .detail-card, .page-card-grid > a {
  background: linear-gradient(180deg, rgba(255,255,255,.085), rgba(255,255,255,.045));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 28px;
  backdrop-filter: blur(18px);
}
.service-card:hover, .portfolio-card:hover, .resource-card:hover, .impact-card:hover, .inner-feature-card:hover, .page-card-grid > a:hover {
  border-color: rgba(30,99,255,.45);
  box-shadow: 0 30px 90px rgba(30,99,255,.14);
  transform: translateY(-3px);
}
.showcase-card { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; align-items: center; padding: 44px; }
.showcase-card img, .solution-card img, .portfolio-card img, .inner-page-image { width: 100%; border-radius: 22px; object-fit: cover; filter: saturate(1.05) contrast(1.04); }
.service-grid, .portfolio-grid, .resource-grid, .impact-grid, .testimonial-grid, .inner-feature-grid, .page-card-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; }
.service-card, .portfolio-card, .resource-card, .impact-card, .testimonial-card, .inner-feature-card, .page-card-grid > a { padding: 28px; transition: .2s ease; }
.service-card h3, .solution-card h3, .portfolio-card h3, .resource-card h3, .timeline-item h3, .inner-feature-card h3, .page-card-grid h3 { margin: 0 0 12px; color: #fff; font-size: 1.35rem; }
.service-card span, .portfolio-card span, .inner-feature-card span, .impact-card strong { display: block; margin-bottom: 12px; color: var(--warm-orange); font-weight: 950; letter-spacing: .12em; text-transform: uppercase; font-size: .75rem; }
.impact-card strong { font-size: 2.5rem; letter-spacing: -.04em; text-transform: none; }
.service-card a, .portfolio-card a, .resource-card a, .page-link-row a { color: var(--electric-blue); font-weight: 900; }
.dark-band { background: linear-gradient(135deg, rgba(13,22,48,.88), rgba(6,11,20,.88)); border-block: 1px solid var(--line); }
.solution-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; }
.solution-card { overflow: hidden; }
.solution-card div, .portfolio-card div { padding: 24px; }
.split-section, .contact-section, .inner-split-section { display: grid; grid-template-columns: 1fr 1fr; gap: 54px; align-items: center; }
.image-stack { position: relative; min-height: 420px; }
.image-main { position: absolute; inset: 0 12% 10% 0; height: 390px; object-fit: cover; border-radius: 28px; box-shadow: var(--shadow); }
.image-small { position: absolute; right: 0; bottom: 0; width: 46%; border-radius: 24px; box-shadow: var(--shadow); border: 1px solid var(--line); }
.industry-pills, .tech-cloud, .contact-points, .detail-list, .page-link-row { display: flex; flex-wrap: wrap; gap: 12px; }
.industry-pills a, .tech-cloud span, .contact-points span, .detail-list span, .page-link-row a {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(30,99,255,.13);
  border: 1px solid rgba(30,99,255,.22);
  color: #dfe8ff;
  font-weight: 850;
}
.timeline { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
.timeline-item { display: flex; gap: 18px; padding: 24px; }
.timeline-item > span { color: var(--warm-orange); font-weight: 950; }
.contact-form { display: grid; gap: 16px; padding: 28px; }
.contact-form label { display: grid; gap: 8px; color: #fff; font-weight: 850; }
.contact-form input, .contact-form select, .contact-form textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 16px;
  background: rgba(255,255,255,.06);
  color: #fff;
}
.contact-form option { color: #071634; }
.form-status { color: var(--muted); margin: 0; }
.inner-hero { position: relative; overflow: hidden; background: linear-gradient(135deg, rgba(13,22,48,.95), rgba(6,11,20,.98)); border-bottom: 1px solid var(--line); }
.inner-hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at 80% 30%, rgba(30,99,255,.27), transparent 30%), radial-gradient(circle at 40% 80%, rgba(255,138,0,.10), transparent 26%); }
.inner-hero-content { position: relative; z-index: 1; max-width: 920px; padding-top: 42px; }
.inner-hero h1 { margin: 0 0 20px; color: #fff; font-size: clamp(2.4rem, 6vw, 5.4rem); line-height: .96; letter-spacing: -.06em; }
.inner-hero p { max-width: 760px; color: var(--muted); line-height: 1.7; font-size: 1.12rem; }
.inner-listing-section, .inner-detail-section, .contact-page-section { background: linear-gradient(180deg, rgba(255,255,255,.02), transparent); }
.footer, .site-footer { display: grid; grid-template-columns: 1.1fr 1.4fr; gap: 44px; padding: 58px max(28px,5.8vw); background: #030711; color: #fff; border-top: 1px solid var(--line); }
.footer img, .v16-footer-logo { width: 190px !important; max-width: 190px !important; height: auto !important; }
.footer p { color: var(--muted); max-width: 560px; line-height: 1.7; }
.footer-columns { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
.footer h4 { color: var(--warm-orange); margin: 0 0 12px; }
.footer a { display: block; color: var(--muted); margin: 8px 0; font-weight: 760; }
.footer a:hover { color: var(--electric-blue); }
.not-found { min-height: 60vh; display: grid; place-items: center; text-align: center; }
.reveal { animation: rise .75s ease both; }
.delay-1 { animation-delay: .15s; }
@keyframes rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 1180px) {
  .desktop-nav { gap: 16px; }
  .nav-link, .explore-link { font-size: 14px !important; }
  .brand img, .v16-nav-logo, .v19-nav-logo { width: 155px !important; max-width: 155px !important; height: 56px !important; }
}
@media (max-width: 980px) {
  .site-header { min-height: 82px; padding: 10px 18px; }
  .desktop-nav { display: none !important; }
  .header-cta { min-height: 46px; padding: 0 16px; }
  .v19-hero { min-height: auto; padding-top: 80px; }
  .v19-hero::before { background: linear-gradient(90deg, rgba(6,11,20,.96), rgba(6,11,20,.72)); }
  .v19-hero-content { width: min(100%, 720px) !important; }
  .v19-hero h1 { font-size: clamp(2.35rem, 10vw, 4rem) !important; }
  .v19-slide-controls { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .service-grid, .portfolio-grid, .resource-grid, .impact-grid, .testimonial-grid, .inner-feature-grid, .page-card-grid, .solution-grid, .split-section, .contact-section, .inner-split-section, .showcase-card, .timeline, .footer { grid-template-columns: 1fr; }
  .logo-marquee { flex-wrap: wrap; font-size: .75rem; }
  .image-stack { min-height: auto; display: grid; gap: 16px; }
  .image-main, .image-small { position: static; width: 100%; height: auto; }
  .footer-columns { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .brand img, .v16-nav-logo, .v19-nav-logo { width: 128px !important; max-width: 128px !important; height: 48px !important; }
  .header-cta { display: none; }
  .v19-slide-controls { grid-template-columns: 1fr; }
  .section-pad { padding: 72px 20px; }
}
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
