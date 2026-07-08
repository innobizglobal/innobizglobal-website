import type { Metadata } from 'next';
import { ContactForm } from '../../components/ContactForm';
import { Footer } from '../../components/Footer';
import { PageHero } from '../../components/PageHero';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Innobiz Global Ventures for digital transformation, websites, AI automation, CRM, portals, and growth systems.',
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact Us"
        title="Let’s build your next digital growth engine."
        text="Share your business idea, current website, process challenge, or digital growth requirement. We will help structure it into a practical roadmap."
        ctaLabel="Email Innobiz"
        ctaHref="mailto:hello@innobizglobal.com"
      />
      <section className="section-pad contact-section contact-page-section">
        <div className="contact-copy reveal">
          <p className="kicker">Start Here</p>
          <h2>Tell us what you want to build or improve.</h2>
          <p>Use the enquiry form or email us directly. The form opens your email app with the details ready to send.</p>
          <div className="contact-points">
            <span>✓ Website, portal, app, or dashboard</span>
            <span>✓ AI automation or workflow system</span>
            <span>✓ CRM, ERP, enquiry, or support process</span>
            <span>✓ Campaign, analytics, or digital growth engine</span>
          </div>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
