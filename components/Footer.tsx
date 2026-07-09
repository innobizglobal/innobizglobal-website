import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/innobiz-logo-nav.png" alt="Innobiz Global Ventures" className="footer-logo" width="387" height="68" />
          <p>Business-first digital strategy, product engineering, AI automation, and operating systems for growth-focused companies.</p>
        </div>
        <div>
          <h4>Services</h4>
          <Link href="/services/product-engineering">Product Engineering</Link>
          <Link href="/services/web-app-development">Web & App Development</Link>
          <Link href="/services/growth-analytics">Growth & Analytics</Link>
        </div>
        <div>
          <h4>InnobizAI</h4>
          <Link href="/innobizai/ai-business-assistants">AI Business Assistants</Link>
          <Link href="/innobizai/workflow-automation">Workflow Automation</Link>
          <Link href="/innobizai/ai-outreach-systems">AI Outreach Systems</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Ready to build a practical digital growth engine?</p>
          <Link href="/contact" className="footer-cta">Start a discussion</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Innobiz Global Ventures. All rights reserved.</div>
    </footer>
  );
}
