import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="section-pad not-found">
        <p className="kicker">Page Not Found</p>
        <h1>This page is not available.</h1>
        <p>The page may have moved, or the link may be incorrect.</p>
        <a className="btn btn-primary" href="/">Go back home</a>
      </section>
      <Footer />
    </main>
  );
}
