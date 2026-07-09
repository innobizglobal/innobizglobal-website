import HeroSlider from '@/components/HeroSlider';
import { CTASection, ProcessSection, ServicesSection } from '@/components/Sections';

export default function HomePage() {
  return (
    <main id="main">
      <HeroSlider />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
