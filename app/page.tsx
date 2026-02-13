import Hero from '@/components/Hero';
import HomeSnapshot from '@/components/HomeSnapshot';
import ServicesGrid from '@/components/ServicesGrid';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <HomeSnapshot />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <TrustSection />
      </AnimatedSection>
      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
    </div>
  );
}

